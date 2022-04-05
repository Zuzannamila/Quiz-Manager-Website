import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { IQuiz } from '../models/iquiz';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  constructor(private http: HttpClient, private _router: Router) { }
  baseUrl: string = environment.baseUrl;

  addQuiz(model: any) {
    const url = this.baseUrl + 'api/quizzes';
    const token = 'Bearer ' + localStorage.getItem('token');
    return this.http.post(url, model, {
      observe: 'response',
      headers: new HttpHeaders({
        'Authorization': token,
      }),
    })
    .pipe(
      map((response: any) => {
        return response;
      })
    )
  }
  editQuiz(model: any, id: any) {
    const url = this.baseUrl + `api/quizzes/${id}`;
    const token = 'Bearer ' + localStorage.getItem('token');
    return this.http.put(url, model, {
      observe: 'response',
      headers: new HttpHeaders({
        'Authorization': token,
      }),
    })
    .pipe(
      map((response: any) => {
        return response;
      })
    )
  }
  getQuizzes() {
    const url = this.baseUrl + 'api/quizzes';
		return this.http
			.get<IQuiz[]>(url, { observe: 'response' })
			.pipe(
				map(response => response.body));
  }

  getQuizById(id: any) {
    const url = this.baseUrl + `api/quizzes/${id}`;
    return this.http.get(url, {observe: 'response'}).pipe(
      map(response => response.body));
  }
}
