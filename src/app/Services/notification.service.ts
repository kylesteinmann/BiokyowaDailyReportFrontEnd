import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Notification } from "../Models/notifications";
import { ApiUrlService } from "./api-url.service";
@Injectable({
  providedIn: 'root'
})

export class NotificationService {


  notifications;

  constructor(private http: HttpClient, public apiUrlService: ApiUrlService) { this.getNotifications() }

  getNotifications() {
    return this.http.get(this.apiUrlService.apiUrl).subscribe((responseData) => {
      console.log(responseData);
      this.notifications = responseData
    })
  }

  sendNotifications(message: Notification) {
    return this.http.post(this.apiUrlService.apiUrl, message).subscribe()
  }

}
