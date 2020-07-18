import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Email } from '../email';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  @Input() email: Email;
  emailForm: FormGroup;

  @Output() emailSubmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    //passed passdown can be accessed in the ngOnInit
    const { subject, from, to, text } = this.email;

    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from : new FormControl({value: from, disabled: true},  [Validators.required]),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text)
    })
  }

  onSubmit(){
    if(this.emailForm.invalid){
      return;
    }

    this.emailSubmit.emit(this.emailForm.value);
    //console.log(this.emailForm.getRawValue());
  }
}
