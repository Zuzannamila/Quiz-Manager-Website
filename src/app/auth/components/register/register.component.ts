import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  radio: string | undefined;

  constructor(
    private _router: Router,
    private _authService: AuthService 
    ) {
    this.form = new FormGroup({
			userName: new FormControl('', [Validators.required]),
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required])
		});
  }

  onSubmit() {
    if (this.form.valid) {
			const userToAdd: any = {
				UserName: this.form.value.userName.trim(),
				Email: this.form.value.email.trim(),
				Password: this.form.value.password,
        Role: this.form.value.role,
			};
			this._authService.register(userToAdd).subscribe(x => {
				this._router.navigate(['/user-menager']);
			});
		} 
  }

  isDisabled(isEmpty: any) {
    console.log(isEmpty);
    if (isEmpty) {
      return true;
    }
    return undefined;
  }
}
