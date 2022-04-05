import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IQuestion } from 'src/app/models/iquestion';
import { AnswersService } from 'src/app/services/answers.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { QuizzesService } from 'src/app/services/quizzes.service';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.css']
})
export class QuizDetailsComponent implements OnInit {
  title: string = '';
  description: string = '';
  category: string = '';
  id: string = '';

  questions: IQuestion[] = [];
  fullQuestions: any[] = [];

  constructor(
    private _activeRoute: ActivatedRoute,
    private _quizzesService: QuizzesService,
    private _answersService: AnswersService,
    private _questionsService: QuestionsService) { }

  ngOnInit(): void {
    this._activeRoute.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        return this._quizzesService.getQuizById(params.get('id'));
      })
    ).subscribe(quiz => {
        this.setPage(quiz);
        this.assignDataToCards(quiz);
      },
      error => {
        console.log('Error on fetching data: ', error);
      }
    );
  }


  assignDataToCards = (quiz: any) => {
    return this._questionsService.getQuestions(quiz.id).subscribe((res: any) => {
      this.questions = res;
      this.questions.forEach(question => {
        return this._answersService.getAnswers(question.id).subscribe((res: any) => {
          let correctAnswerIndex = res.findIndex((x: { isCorrect: boolean; }) => x.isCorrect == true);     
          var fullQuestion : any =  {
            content: question.content,
            answerA: res[0]?.content,
            answerB: res[1]?.content,
            answerC: res[2]?.content,
            answerD: res[3]?.content,
            correctAnswer: correctAnswerIndex,
            questionId: question.id
          };
          this.fullQuestions.push(fullQuestion);
    
          });
      });

      });

  }

  setPage = (quiz: any) => {
    this.id = quiz.id;
    this.title = quiz.title;
		this.description = quiz.description;
    this.category = quiz.category;
	};

  isAdmin(): boolean {
    return localStorage.getItem('role') == 'Admin' ? true : false;
  }
}
