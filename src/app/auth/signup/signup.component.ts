import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
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
    department: new FormControl(''),
    role: new FormControl('Operator')
  })

  constructor(private authService: AuthService) { }

  onSubmit() {
    const blog = this.signupForm.value;

    this.authService.signup(blog).subscribe(
    )
  }
}
