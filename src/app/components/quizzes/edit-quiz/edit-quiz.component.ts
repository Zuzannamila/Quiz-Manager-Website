import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { QuizzesService } from 'src/app/services/quizzes.service';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { IQuiz } from 'src/app/models/iquiz';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.css']
})
export class EditQuizComponent implements OnInit {
  form: FormGroup;
  id: any;
  currentQuiz: IQuiz | undefined;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router,
    private _quizzesService: QuizzesService,
    private _formBuilder: FormBuilder
  ) { 
    this.form = this._formBuilder.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.email]),
      category: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this._activeRoute.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        return this._quizzesService.getQuizById(params.get('id'));
      })
    ).subscribe(quiz => {
        this.setPage(quiz);
      },
      error => {
        console.log('Error on fetching data: ', error);
      }
    );
  }

  setPage = (quiz: any) => {
		this.currentQuiz = quiz;
    this.form.get('title')?.setValue(quiz.title);
		this.form.get('description')?.setValue(quiz.description);
    this.form.get('category')?.setValue(quiz.category);
	};

  onSubmit() {
    const quizToEdit: any = {
			title: this.form.value.title.trim(),
			description: this.form.value.description.trim(),
			category: this.form.value.category.trim(),
		};
		this._quizzesService.editQuiz(quizToEdit, this.currentQuiz?.id).subscribe((x: Response ) => {
      this._router.navigate([``]);
		});
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') == 'Admin' ? true : false;
  }

  isDisabled(isEmpty: any) {
    if (isEmpty) {
      return true;
    }
    return undefined;
  }
}
