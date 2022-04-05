import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { QuizzesService } from 'src/app/services/quizzes.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  form: FormGroup;
  id: any;

  constructor(private _activeRoute: ActivatedRoute,private _quizzesService: QuizzesService) {
    this.form = new FormGroup({
      question: new FormControl('', [Validators.required]),
			answers: new FormControl('', [Validators.required]),
			answerAText: new FormControl('', [Validators.required, Validators.email]),
			answerBText: new FormControl('', [Validators.required]),
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

  onSubmit() {
    const questionToAdd: any = {
			content: this.form.value.content.trim(),
			quizId: this.form.value.quizId.trim()
		};
    // this._quizzesService.addQuestion(questionToAdd).subscribe((x: Response ) => {
    //   var string = JSON.stringify(x);
    //   var json = JSON.parse(string);
    //   var questionId = json.body['id'];
		// });
    const answersToAdd: any[] = [];
    const answerAToAdd: any = {
			content: this.form.value.answerAText.trim(),
			questionId: this.form.value.answerBText.trim(),
      isCorrect: this.form.value.answers
		};
    answerAToAdd.push(answerAToAdd);
    // this._quizzesService.addAnswers(answersToAdd).subscribe((x: Response ) => {
    //   var string = JSON.stringify(x);
    //   var json = JSON.parse(string);
    //   var questionId = json.body['id'];
		// });
    

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
