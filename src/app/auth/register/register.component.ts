import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../auth.module.css'],
})


export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public service: AuthService
  ) {}

  registerForm = this.fb.group({
      userName: ['', this.service.userNameValidation],
      firstName: ['', this.service.firstNameValidation],
      lastName: ['', this.service.lastNameValidation],
      email: ['', this.service.emailValidation],
      password: ['', this.service.passwordValidation],
      cPassword: ['', this.service.cPasswordValidation],
    },
    { validator: this.service.passwordsValidator }
  );

  submit(event: any) {
    event.preventDefault();

    var user = {
      UserName: this.registerForm.get('userName')?.value,
      FirstName: this.registerForm.get('firstName')?.value,
      LastName: this.registerForm.get('lastName')?.value,
      Password: this.registerForm.get('password')?.value,
      Email: this.registerForm.get('email')?.value,
    };

    this.http.post('https://localhost:5001/api/auth/register', user).subscribe(
      (res: any) => {
        if (res.succeeded) 
          this.router.navigateByUrl('/');
        else
          res.errors.forEach((element: any) => {
            alert('Error :' + element.description);
          });
      },
      (err) => {
        if (err.name === 'HttpErrorResponse') 
          alert('Sorry, the server not response');
        else console.log(err.name);
      }
    );
  }
}
