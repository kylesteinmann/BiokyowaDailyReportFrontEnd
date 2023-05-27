import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Packaging } from '../Models/packaging';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PackagingDialogComponent } from '../Components/packaging-dialog/packaging-dialog.component';
import { NotificationService } from './notification.service';
import { ApiUrlService } from './api-url.service';


@Injectable({
  providedIn: 'root'
})
export class PackagingService {
  packagingForm: FormGroup;
  newPackagingSelected: boolean = false;
  packagings: Packaging[] = []
  selectedPackagingId: string = '';
  dialogRef: any;

  constructor(private http: HttpClient, public dialog: MatDialog, public notificationService: NotificationService, public apiUrlService: ApiUrlService) {
    this.packagingForm = new FormGroup({

      date: new FormControl(),
      plant: new FormControl(),
      product: new FormControl(),
      campaign: new FormControl(),
      packages: new FormControl(),
      incoming: new FormControl(),
      outgoing: new FormControl(),
    })

    this.getPackagings();
  }

  getPackagings() {
    this.http.get<Packaging>(this.apiUrlService.apiUrl + 'packagings').subscribe((data: any) => {
      this.packagings = data;
    })
  }

  onSubmitPackagingForm() {
    if (this.newPackagingSelected) {
      this.http
        .post<Packaging>(this.apiUrlService.apiUrl + 'packagings', this.packagingForm.value)
        .subscribe((data: any) => {
          this.packagings.push(data);
          this.newPackagingSelected = false;
          this.dialog.closeAll()
          this.notificationService.sendNotifications({ message: "New Packaging added" });
        });
    } else {
      this.http
        .put(this.apiUrlService.apiUrl + 'packagings/' + this.selectedPackagingId, this.packagingForm.value)
        .subscribe(() => {
          this.getPackagings();
          this.newPackagingSelected = false;
          this.dialog.closeAll()
          this.notificationService.sendNotifications({ message: "Packaging Edited" });
        });
    }
    this.packagingForm.reset()
  }


  // onEditPackaging(packagingId: string) {
  //   this.selectedPackagingId = packagingId;
  //   this.http.put('http://localhost:3000/packagings/' + packagingId, this.packagingForm.value).subscribe(() => {
  //     this.getPackagings();
  //     this.newPackagingSelected = false;
  //   })
  // }


  onDeletePackaging(packagingId: string) {
    this.http.delete<Packaging>(this.apiUrlService.apiUrl + 'packagings/' + packagingId).subscribe((data: any) => {
      this.getPackagings();
      this.notificationService.sendNotifications({ message: "Packaging Deleted" });
    })
  }

  onSelectPackaging(id: string) {
    this.http.get<Packaging>(this.apiUrlService.apiUrl + 'packagings/' + id).subscribe((data: Packaging) => {
      this.packagingForm.patchValue(data);
      this.newPackagingSelected = false;
    });
  }



  openDialog(): void {
    this.dialog.open(PackagingDialogComponent, {
      width: '500px'
    });
  }


}
