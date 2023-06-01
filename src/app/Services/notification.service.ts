import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Notification } from "../Models/notifications";
import { ApiUrlService } from "./api-url.service";
@Injectable({
  providedIn: 'root'
})


export class NotificationService {


  notifications;
  private apiUrl = 'http://localhost:3000/notifications'

  constructor(private http: HttpClient, public apiUrlService: ApiUrlService) { this.getNotifications() }

  getNotifications() {
    return this.http.get(this.apiUrl).subscribe((responseData) => {
      console.log(responseData);
      this.notifications = responseData
    })
  }

  sendNotifications(message: Notification) {
    return this.http.post(this.apiUrl, message).subscribe(() =>
      this.getNotifications())
  }

}
