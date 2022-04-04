import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

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
  // addQuiz(model: any) {
  //   const url = this.baseUrl + 'api/quizzes';
  //   const token = 'Bearer ' + localStorage.getItem('token');
  //   return this.http.post(url, model, {
  //     observe: 'response',
  //     headers: new HttpHeaders({
  //       'Authorization': token,
  //     }),
  //   })
  //   .pipe(
  //     map(response => response.body));
  // }

  // getQuizzes() {
  //   const url = this.baseUrl + 'api/quizzes';
	// 	return this._http
	// 		.get<CategoryGroupChip[]>(url, { observe: 'response' })
	// 		.pipe(
	// 			map(response => makeSelectable(response.body)),
	// 			catchError(err => handleRequestErrors(err, this._noDataUIErrorMessage, this._snackbarService))
	// 		);
  // }

  getQuizById(id: any) {
    console.log('here in get byid')
  
    const url = this.baseUrl + `api/quizzes/${id}`;
    return this.http.get(url, {observe: 'response'}).pipe(
      map(response => response.body));
  }
}
