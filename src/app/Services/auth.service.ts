import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { ApiUrlService } from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router, private userService: UserService, public apiUrlService: ApiUrlService) { }

  signup(blog) {
    return this.http.post(this.apiUrlService.apiUrl + "api/v1/users/create", blog)
  }

  login(user) {
    return this.http.post(this.apiUrlService.apiUrl + "api/v1/users/login", user)

  }

  autoSignIn() {
    // get Token from browser
    const token = this.getToken();
    if (!token) {
      return;
    }
    // send request to get user info

    this.http.get(this.apiUrlService.apiUrl + "api/v1/users/me", {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    }).subscribe((res: any) => {
      if (res.success) {

        this.userService.setCurrentUser(
          res.payload.user
        )

        // navigate to summary
        this.route.navigate(['/summary'])
      }
    })


  }

  logout() {
    const token = this.getToken();

    this.http.delete(this.apiUrlService.apiUrl + "api/v1/users/logout", {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    }).subscribe((res: any) => {
      if (res.success) {
        this.removeToken();
        this.userService.setCurrentUser(null);
        this.route.navigate(['/login'])

      }
    }
    )
  }

  getToken() {
    return JSON.parse(localStorage.getItem('token'))
  }

  setToken(token) {
    localStorage.setItem('token', JSON.stringify(token))
  }

  removeToken() {
    localStorage.removeItem('token')
  }


}
