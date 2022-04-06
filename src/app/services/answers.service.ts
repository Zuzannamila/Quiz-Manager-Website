import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IAnswer } from '../models/ianswer';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  constructor(private http: HttpClient) { }
  baseUrl: string = environment.baseUrl;

  addAnswers(model: any, id: any) {
    const url = this.baseUrl + `api/${id}/answers`;
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

  getAnswers(id: any) {
    const url = this.baseUrl + `api/${id}/answers`;
		return this.http
			.get<IAnswer[]>(url, { observe: 'response' })
			.pipe(
				map(response => response.body));
  }
  
  editAnswers(model: any, id: any) {
    const url = this.baseUrl + `api/answers/${id}`;
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
}
