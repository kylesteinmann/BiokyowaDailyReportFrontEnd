import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm = new FormGroup({
    email: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl('')
  })

  constructor(private http:HttpClient){}

  onSubmit(){
   const blog = this.signupForm.value;

    this.http.post("http://localhost:3000/api/v1/users/create", blog).subscribe(
      (res:any)=>(console.log(res))
    )
  }
}
