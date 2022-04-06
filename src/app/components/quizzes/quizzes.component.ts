import { IQuiz, Tile } from './../../models/iquiz';
import { Component, OnInit } from '@angular/core';
import { QuizzesService } from 'src/app/services/quizzes.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})


export class QuizzesComponent implements OnInit {
  quizzes: IQuiz[] = [];
  colors: string[] = ['#FF388A', '#FFD229', '#FFDAD6', '#3860FF', '#2FAB5A']
  tiles: Tile[] = [];

  constructor(private _quizzesService: QuizzesService) { }

  ngOnInit(): void {
    this.assignDataToCards();
  }

  assignDataToCards() {
    return this._quizzesService.getQuizzes().subscribe((res: any) => {
      this.quizzes = res;
      this.quizzes.forEach(quiz => {
        var tile : Tile =  {
          color: this.colors[Math.floor(Math.random() * this.colors.length)],
          cols: 1,
          rows: 1,
          quiz: quiz
        };
        this.tiles.push(tile);
      });
    });
  };
  
  isAdmin(): boolean {
    return localStorage.getItem('role') == 'Admin' ? true : false;
  }
}
