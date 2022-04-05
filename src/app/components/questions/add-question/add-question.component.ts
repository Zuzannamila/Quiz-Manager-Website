import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ParamMap, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AnswersService } from 'src/app/services/answers.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { QuizzesService } from 'src/app/services/quizzes.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  form: FormGroup;
  id: any;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _quizzesService: QuizzesService, 
    private _questionsService: QuestionsService,
    private _answersService: AnswersService,
    private _router: Router
    ) {
    this.form = new FormGroup({
      question: new FormControl('', [Validators.required]),
			answers: new FormControl('', [Validators.required]),
			answerAText: new FormControl('', [Validators.required]),
			answerBText: new FormControl('', [Validators.required]),
      answerCText: new FormControl('', [Validators.required]),
			answerDText: new FormControl('', [Validators.required]),
		});
   }

  ngOnInit(): void {
    this._activeRoute.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        return this._quizzesService.getQuizById(params.get('id'));
      })
    ).subscribe(quiz => {
        this.setId(quiz);
      },
      error => {
        console.log('Error on fetching data: ', error);
      })
  }

  async onSubmit() {
    const questionToAdd: any = {
			content: this.form.value.question.trim(),
			quizId: this.id
		};
    const answersToAdd: any[] = [];
    const answerAToAdd: any = {
			content: this.form.value.answerAText.trim(),
      isCorrect: (this.form.value.answers === 'answerA')
		};
    const answerBToAdd: any = {
			content: this.form.value.answerBText.trim(),
      isCorrect: (this.form.value.answers === 'answerB')
		};
    const answerCToAdd: any = {
			content: this.form.value.answerCText.trim(),
      isCorrect: (this.form.value.answers === 'answerC')
		};
    const answerDToAdd: any = {
			content: this.form.value.answerDText.trim(),
      isCorrect: (this.form.value.answers === 'answerD')
		};
    answersToAdd.push(answerAToAdd);
    answersToAdd.push(answerBToAdd);
    answersToAdd.push(answerCToAdd);
    answersToAdd.push(answerDToAdd);
    await this._questionsService.addQuestion(questionToAdd, this.id).subscribe((res: any) => {
      this._answersService.addAnswers(answersToAdd, res.id).subscribe((x: Response ) => {
        this._router.navigate([`/${this.id}`]);
      });
    });
  }

  setId = (quiz: any) => {
		this.id = quiz.id;
	};

  isDisabled(isEmpty: any) {
    if (isEmpty) {
      return true;
    }
    return undefined;
  }
}
