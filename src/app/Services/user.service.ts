import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUserSubject = new BehaviorSubject<User>(null);
  private currentUserRole: string;
  private currentUserDepartment: string;

  constructor() { }

  setCurrentUser(user: User) {
    this.currentUserSubject.next(user);
    this.currentUserRole = user.role;
    this.currentUserDepartment = user.department;


  }

  public get currentUser(): User {
    return this.currentUserSubject.value;


  }
  public userRole() {
    if (!this.currentUserSubject.value) {
      return null
    }
    return this.currentUserRole;
  }

  public userDepartment() {
    if (!this.currentUserSubject.value) {
      return null
    }
    return this.currentUserDepartment;
  }
}
