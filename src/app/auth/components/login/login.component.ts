import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup;

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { 
    this.form = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required]),
		});
  }
  ngOnInit() {
    this._authService.logout();
  }

  onSubmit() {
    if (this.form.valid) {
			const userToLogin: any = {
				Email: this.form.value.email.trim(),
				Password: this.form.value.password
			};
			this._authService.login(userToLogin).subscribe(res => {
				this._router.navigate(['']);
			},
      err => (
        this.form.setErrors({ unauthenticated: true })
      ));
		} 
  }

  isDisabled(isEmpty: boolean) {
    if (isEmpty) {
      return true;
    }
    return undefined;
  }

}
