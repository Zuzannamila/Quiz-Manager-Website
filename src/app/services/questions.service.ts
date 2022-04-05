import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IQuestion } from '../models/iquestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }
  baseUrl: string = environment.baseUrl;

  getQuestions(id: any) {
    const url = this.baseUrl + `api/${id}/questions`;
		return this.http
			.get<IQuestion[]>(url, { observe: 'response' })
			.pipe(
				map(response => response.body));
  }

  // addQuestion(model: any) {
  //   const url = this.baseUrl + `api/${id}/questions`;
  //   const token = 'Bearer ' + localStorage.getItem('token');
  //   return this.http.post(url, model, {
  //     observe: 'response',
  //     headers: new HttpHeaders({
  //       'Authorization': token,
  //     }),
  //   })
  //   .pipe(
  //     map((response: any) => {
  //       return response;
  //     })
  //   )
  // }
}
