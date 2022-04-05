import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
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

  constructor(private _activeRoute: ActivatedRoute, private _quizzesService: QuizzesService, private _questionsService: QuestionsService) { }

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

  assignDataToCards(quiz: any) {
    return this._questionsService.getQuestions(quiz.id).subscribe((res: any) => {
      console.log(res);

      });

  };

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
