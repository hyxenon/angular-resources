import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') singunForm: NgForm
  defaultQuestion = 'pet'
  answer = ''
  genders = ['male', 'female']
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    asnwer: '',
    gender: ''
  }

  submitted = false

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.singunForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })
    this.singunForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
    
  // }
  onSubmit(){
    this.submitted = true
    this.user.username = this.singunForm.value.userData.username
    this.user.email = this.singunForm.value.userData.email
    this.user.secretQuestion = this.singunForm.value.secret
    this.user.gender = this.singunForm.value.gender
    
    this.singunForm.reset()
  }
}
