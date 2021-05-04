import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(event: any) {
    event.preventDefault();
    var user = {
      UserName: this.loginForm.get('userName')?.value,
      Password: this.loginForm.get('password')?.value,
    };

    this.http
      .post('https://localhost:5001/api/auth/login', user)
      .subscribe((res: any) => {
        if (res.succeeded) {
          console.log('Login success');
          this.router.navigateByUrl('/');
        } else {
          console.log('Login failed');

          alert('Error : Username or password wrong.');
        }
      });
  }

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: [
      null,
      Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(30),
        LoginComponent.patternValidator(/\d/, {
          /*hasNumber: true*/
        }),
        LoginComponent.patternValidator(/[A-Z]/, {
          /*hasUpperCase: true */
        }),
        LoginComponent.patternValidator(/[a-z]/, {
          /*hasLowerCase: true */
        }),
        LoginComponent.patternValidator(
          /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/,
          {
            /*hasSpicalCharacter: true */
          }
        ),
      ]),
    ],
  });
  validationMessages = {
    userName: [
      { type: 'required', message: 'Username is required.' },
      { type: 'maxlength', message: 'Maximum length is 30 characters.' },
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Minmum length is 8 characters.' },
      { type: 'maxlength', message: 'Maximum length is 15 characters.' },
      { type: 'hasNumber', message: 'Password must contain number.' },
      {
        type: 'hasUpperCase',
        message: 'Password must contain upper case letter.',
      },
      {
        type: 'hasLowerCase',
        message: 'Password must contain lower case letter.',
      },
      {
        type: 'hasSpicalCharacter',
        message: 'Password must contain spical character.',
      },
    ],
  };
  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null as any;
      }
      const valid = regex.test(control.value);

      return valid ? null : (error as any);
    };
  }
}
