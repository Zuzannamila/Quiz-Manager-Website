import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  form: FormGroup;

  constructor(private _activeRoute: ActivatedRoute, private _questionsService: QuestionsService) {
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
    // this._activeRoute.paramMap
    // .pipe(
    //   switchMap((params: ParamMap) => {
    //     return this._questionsService.getQuizById(params.get('id'));
    //   })
    // ).subscribe(quiz => {
    //     this.setPage(quiz);
    //   },
    //   error => {
    //     console.log('Error on fetching data: ', error);
    //   }
    // );
  }

  onSubmit() {

  }
  isDisabled(isEmpty: any) {
    if (isEmpty) {
      return true;
    }
    return undefined;
  }

}
