import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Validators, FormGroup,  FormControl} from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';



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
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  })

  get name() {
  	return this.form.get('name');
  }
  get email() {
  	return this.form.get('email');
  }
  get message() {
    return this.form.get('message');
  }

  constructor(@Inject(DOCUMENT) private document: Document, private http: Http) { 
  }

  ngOnInit() {

  }

	onSubmit() {
    this.formSubmitAttempt = true;
    let headers = new Headers({ 
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = new RequestOptions({ headers: headers });
    let url = "http://formspree.io/magdalena.pal90@gmail.com";
    let data = `name=${this.name.value}&email=${this.email.value}&message=${this.message.value}`;

    this.http.post(url, data, options).subscribe(
      data => { alert("Message sent, thank you!") },
      err => { alert("Message not sent, technical problems :(") }
    );
  }
};
