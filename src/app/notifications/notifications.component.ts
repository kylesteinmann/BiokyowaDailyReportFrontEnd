import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../Services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: any[] = [];

  constructor(private notificationsService: NotificationsService){

  }

  ngOnInit(){
    this.fetchNotifications();
  }

  fetchNotifications(){
    this.notificationsService.getNotifications().subscribe(
      (res: any[]) => {
        this.notifications = res;
      }
    )
  }

}
