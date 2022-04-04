import { Component, OnInit } from '@angular/core';
import { QuizzesService } from 'src/app/services/quizzes.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(private _quizzesService: QuizzesService) { }

  ngOnInit(): void {
    // this._quizzesService.getQuizzes().subscribe((secrets: any) => console.log(secrets));
  }
  isAdmin(): boolean {
    return localStorage.getItem('role') == 'Admin' ? true : false;
  }
}
