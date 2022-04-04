import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { QuizzesService } from 'src/app/services/quizzes.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  form: FormGroup;

  constructor(private _router: Router, private _quizzesService: QuizzesService) { 
    this.form = new FormGroup({
			title: new FormControl('', [Validators.required]),
			description: new FormControl('', [Validators.required, Validators.email]),
			category: new FormControl('', [Validators.required]),
		});
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const quizToAdd: any = {
			title: this.form.value.title.trim(),
			description: this.form.value.description.trim(),
			category: this.form.value.category.trim(),
		};
		this._quizzesService.addQuiz(quizToAdd).subscribe((x: Response ) => {
      var string = JSON.stringify(x);
      var json = JSON.parse(string);
      var id = json.body['id'];
      this._router.navigate([`/edit-quiz/${id}`]);
		});
    // this._quizzesService.addQuiz(quizToAdd).subscribe(quiz => {
    //   var string = JSON.stringify(x);
    //   var json = JSON.parse(string);
    //   var id = json.body['id'];
    //   this._router.navigate([`/edit-quiz/${quiz}`]);
		// });

  }
  isDisabled(isEmpty: any) {
    if (isEmpty) {
      return true;
    }
    return undefined;
  }

}
