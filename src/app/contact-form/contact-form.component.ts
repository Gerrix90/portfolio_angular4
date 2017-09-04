import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Validators, FormGroup,  FormControl} from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { NgZone } from '@angular/core';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public isActive: boolean = false;
  
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

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {

  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    if (number > 5000) {
      this.isActive = true;
    } else if (this.isActive && number < 10) {
      this.isActive = false;
    }
  }

	onSubmit() {
    this.formSubmitAttempt = true;
  }
};
 

  // submit(form) {
  //   form.valid;
  // }
 


