import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IUser } from '../../models/iuser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = environment.baseUrl;
  helper = new JwtHelperService();
  currentUser: IUser = {
    username: '',
    email: '',
    role: ''
  };
  constructor(private http: HttpClient) {}

  login(model: any): Observable<IUser>{
    return this.http.post(this.baseUrl + `login?Email=${model.Email}&Password=${model.Password}`, model).pipe(
      map((response: any) => {
        const decodedToken = this.helper.decodeToken(response.token);
        this.currentUser.username = decodedToken.username;
        this.currentUser.email = decodedToken.email;
        this.currentUser.role = decodedToken.role;
        localStorage.setItem('username', decodedToken.given_name);
        localStorage.setItem('email', decodedToken.email);
        localStorage.setItem('role', decodedToken.role);
        localStorage.setItem('token', response.token);
        return this.currentUser;
      })
    );
  }

  loggedIn(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  logout() {
    this.currentUser = {
      username: '',
      email: '',
      role: ''
    };
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
  }

  register(model: any) {
    const url = this.baseUrl + `register?UserName=${model.UserName}&Email=${model.Email}&Password=${model.Password}&Role=${model.Role}`
    console.log(localStorage.getItem('token'));
    const token = 'Bearer ' + localStorage.getItem('token');
    return this.http.post(url, model, {
      observe: 'response',
      headers: new HttpHeaders({
        'Authorization': token,
      }),
    })
  }
}