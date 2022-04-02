import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IUser } from '../../models/iuser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = environment.baseUrl;

  helper = new JwtHelperService();

  currentUser: IUser = {
    username: '',
    email: '',
    role: '',
    jobtitle: '',
  };
  constructor(private http: HttpClient) {}

  login(model: any): Observable<IUser> {
    return this.http.post(this.baseUrl + 'identity/login', model).pipe(
      map((response: any) => {
        const decodedToken = this.helper.decodeToken(response.token);

        this.currentUser.username = decodedToken.given_name;
        this.currentUser.email = decodedToken.email;
        this.currentUser.jobtitle = decodedToken.JobTitle;
        this.currentUser.role = decodedToken.role;

        localStorage.setItem('token', response.token);

        return this.currentUser;
      })
    );
  }

  loggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (token != null)
    {
      return !this.helper.isTokenExpired(token);
    }
    return !this.helper.isTokenExpired(undefined);
     
  }

  logout() {
    this.currentUser = {
      username: '',
      email: '',
      role: '',
      jobtitle: '',
    };
    localStorage.removeItem('token');
  }

  register(model: any) {
    console.log("here")
    // return this.http.post(this.baseUrl + 'register', model);
    return this.http.post(this.baseUrl + `register?UserName=${model.UserName}&Email=${model.Email}&Password=${model.Password}`, model);
  }

  confirmEmail(model: any) {
    return this.http.post(this.baseUrl + 'identity/confirmemail', model);
  }
}