import { Component, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { User } from 'src/app/Models/user.model';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User = null;
  currentUserRole
  currentUserDepartment
  constructor(public userService: UserService, private authService: AuthService) {
    this.currentUserRole = this.userService.userRole()
    this.currentUserDepartment = this.userService.userDepartment()
  }

  ngOnInit(): void {
    this.userService.currentUserSubject.subscribe((user: User) => {
      this.currentUser = user;
    })
  }

  onLogout() {
    this.authService.logout();
  }

}
