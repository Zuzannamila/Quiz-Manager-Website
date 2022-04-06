import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: string = '';
  @Input() answerA: string = '';
  @Input() answerB: string = '';
  @Input() answerC: string = '';
  @Input() answerD: string = '';
  @Input() correctAnswer: number | undefined
  @Input() questionId: string = '';
  
  form: FormGroup;

  constructor(private _router: Router) { 
    this.form = new FormGroup({
      answers: new FormControl('', [Validators.required])
		});
  }

  ngOnInit(): void {
  }

  navigateToEdit() {
    this._router.navigate([`/edit-question/${this.questionId}`]);
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') == 'Admin' ? true : false;
  }

  isTeacher(): boolean {
    return localStorage.getItem('role') == 'Teacher' ? true : false;
  }

  showAnswers() {
    switch (this.correctAnswer) {
      case 0:
        this.form.setValue({answers:'answerA'});
        break;
      case 1:
        this.form.setValue({answers:'answerB'});
        break;
      case 2:
        this.form.setValue({answers:'answerC'});
        break;
      case 3:
        this.form.setValue({answers:'answerD'});
        break;
      default:
        break;
    }
  }
}
