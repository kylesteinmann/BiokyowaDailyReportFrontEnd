import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Notification } from "../Models/notifications";
@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  private apiUrl = "http://localhost:3000/notifications";

  notifications;

  constructor(private http: HttpClient) { this.getNotifications() }

  getNotifications() {
    return this.http.get(this.apiUrl).subscribe((responseData) => {
      console.log(responseData);
      this.notifications = responseData
    })
  }

  sendNotifications(message: Notification) {
    return this.http.post(this.apiUrl, message).subscribe()
  }

}
