import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup,  FormControl} from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

	private formSubmitAttempt: boolean;

  form = new FormGroup({
  	name: new FormControl('', [
  		Validators.required,
  		Validators.minLength(5)
    ]),
    email: new FormControl('', Validators.required)
  })

  get name() {
  	return this.form.get('name');
  }
  get email() {
  	return this.form.get('email');
  }
  submit(form) {
    form.valid;
  }

  constructor() { }

  ngOnInit() {

  }

	onSubmit() {
    this.formSubmitAttempt = true;
  }
};
 

  // submit(form) {
  //   form.valid;
  // }
 


