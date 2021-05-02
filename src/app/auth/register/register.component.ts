import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  PatternValidator,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) {}

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
  registerForm = this.fb.group(
    {
      userName: ['', [Validators.required, Validators.maxLength(30)]],
      firstName: ['', [Validators.required, Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.maxLength(15)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(30)],
      ],
      password: [
        null,
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(30),
          RegisterComponent.patternValidator(/\d/, { hasNumber: true }),
          RegisterComponent.patternValidator(/[A-Z]/, { hasUpperCase: true }),
          RegisterComponent.patternValidator(/[a-z]/, { hasLowerCase: true }),
          RegisterComponent.patternValidator(
            /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/,
            { hasSpicalCharacter: true }
          ),
        ]),
      ],
      cPassword: ['', Validators.required],
    },
    {
      validator: this.passwordsValidator,
    }
  );

  validationMessages = {
    userName: [
      { type: 'required', message: 'Username is required.' },
      { type: 'maxlength', message: 'Maximum length is 30 characters.' },
    ],
    firstName: [
      { type: 'required', message: 'First name is required.' },
      { type: 'maxlength', message: 'Maximum length is 15 characters.' },
    ],
    lastName: [
      { type: 'required', message: 'Last name is required' },
      { type: 'maxlength', message: 'Maximum length is 15 characters.' },
    ],
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'Enter a valid email.' },
      { type: 'maxlength', message: 'Maximum length is 40 characters.' },
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
    cPassword: [
      { type: 'required', message: 'Confirm password is required.' },
      {
        type: 'passwordsMissMatch',
        message: "Those passwords didn't match. Try again.",
      },
      {
        type: 'firstPasswordInvalid',
        message: 'The first password is invalid',
      },
    ],
  };

  submit(e: any) {
    e.preventDefault();
  }

  ngOnInit(): void {}

  passwordsValidator(fg: FormGroup) {
    let passWord = fg.get('password');
    let confirmPassWord = fg.get('cPassword');
    console.log(passWord?.errors === null);

    if (confirmPassWord?.dirty || confirmPassWord?.touched) {
      if (passWord?.errors !== null)
        confirmPassWord?.setErrors({ firstPasswordInvalid: true });
      else if (passWord?.value !== confirmPassWord?.value)
        confirmPassWord?.setErrors({ passwordsMissMatch: true });
    }
  }
}
