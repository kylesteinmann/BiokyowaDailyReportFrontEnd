import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class NotificationsService {
  private apiUrl = "http://localhost:3000/notifications";

  constructor(private http: HttpClient) { }

  getNotifications() {
    return this.http.get(this.apiUrl)
  }

}
