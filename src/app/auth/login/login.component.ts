import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
constructor(private authService:AuthService){}

onSubmit(){
  const loginUser = this.loginForm.value;
  this.authService.login(loginUser).subscribe((res:any)=>{
    console.log(res)
  })
}
}
