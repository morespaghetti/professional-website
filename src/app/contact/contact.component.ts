import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, Validators, FormGroup, FormGroupDirective} from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private readonly apiContactus: string= 'https://6lw8sfxsj6.execute-api.ap-southeast-2.amazonaws.com/prod/contactus';
  public submitEnable: boolean= true;

  public contactFormGroup= new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  @ViewChild('contactForm', {static: true}) contactFormGroupDirective: FormGroupDirective;

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  ngOnInit(){
  }

  emailErrorMessageGet(){
    if( this.contactFormGroup.controls.email.hasError('required') ){
      return 'Please enter your email';
    }else if( this.contactFormGroup.controls.email.hasError('email') ){
      return 'Please enter a valid email';
    }else{
      return '';
    }
  }

  nameErrorMessageGet(){
    if( this.contactFormGroup.controls.name.hasError('required') ){
      return 'Please enter your name';
    }else{
      return '';
    }
  }

  messageErrorMessageGet(){
    if( this.contactFormGroup.controls.message.hasError('required') ){
      return 'Pease enter a message';
    }else{
      return '';
    }
  }

  onSubmit(){
    // Check if the fields are valid
    if( !this.contactFormGroup.valid ){
      return;
    }

    this.submitEnable= false;

    const messageBody= {
      name: this.contactFormGroup.controls.name.value,
      email: this.contactFormGroup.controls.email.value,
      desc: this.contactFormGroup.controls.message.value
    };

    this.http.post(this.apiContactus, messageBody).subscribe(
      res=> {
        setTimeout(() => this.contactFormGroupDirective.resetForm(), 0);
        this.messageSnackBar('Your message has been sent');
        this.submitEnable= true;
      },
      err=> {
        this.messageSnackBar('Unable to send message. Please try again');
        this.submitEnable= true;
      }
    );

  }

  private messageSnackBar(message: string){
    this.snackBar.open(message, '', {duration: 2000});
  }

}
