import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ValidationErrors, Validators } from '@angular/forms'
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3), 
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ],
     [this.uniqueUsername.validate]
    ),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4), 
      Validators.maxLength(20),
    ]),
    passwordConfirmation: new FormControl('',[
      Validators.required,
      Validators.minLength(4), 
      Validators.maxLength(20),
    ]),

  }, {
    validators: [this.matchPasswod.validate]
  });

  constructor(
    private matchPasswod: MatchPassword, 
    private uniqueUsername: UniqueUsername,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.authForm.invalid){
      return;
    }

    this.authService.signup(this.authForm.value)
    .subscribe({
      next: response => {
          //navigate to other route
      },
      error: err => {
        if(!err.status){
          this.authForm.setErrors({ noConnection: true })
        }
      }
    });
  }
}
