import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  form: FormGroup;

  constructor() { 
    this.form = new FormGroup({
      answer: new FormControl('', [Validators.required])
		});
  }

  ngOnInit(): void {
  }

}
