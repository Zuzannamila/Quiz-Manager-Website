import { Component, OnInit } from '@angular/core';
import { SecretService } from 'src/app/services/secret.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(private secretService: SecretService) { }

  ngOnInit(): void {
    this.secretService.getValues().subscribe((secrets) => console.log(secrets));
  }
  isAdmin(): boolean {
    return localStorage.getItem('role') == 'Admin' ? true : false;
  }
}
