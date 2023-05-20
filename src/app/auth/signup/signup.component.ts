import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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
    password_confirmation: new FormControl(''),

  })

  constructor(private authService:AuthService, private route:Router){}

  onSubmit(){
   const blog = this.signupForm.value;

    this.authService.signup(blog).subscribe(
      (res:any)=>{
        if(res.success){
          this.route.navigate(["/summary"])
        }
      }
    )
  }
}
