import { Component, Input, OnInit } from '@angular/core';
import { IQuiz } from 'src/app/models/iquiz';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {
  @Input() quiz: IQuiz = {
    id: '',
    title: '',
    description: '',
    category: ''
  };
  @Input() color: string = '';
  colors: string[] = ['#FF388A', '#FFD229', '#FFDAD6', '#3860FF', '#2FAB5A']

  constructor() { }

  ngOnInit(): void {
  }

}
