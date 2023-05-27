import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Extraction } from '../Models/extraction';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ExtractionDialogComponent } from '../Components/extraction-dialog/extraction-dialog.component';
import { NotificationService } from './notification.service';
import { ApiUrlService } from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class ExtractionService {
  extractionForm: FormGroup;
  newExtractionSelected: boolean = false;
  extractions: Extraction[] = []
  selectedExtractionId: string = '';
  dialogRef: any;

  constructor(private http: HttpClient,
    public dialog: MatDialog,
    public notificationService: NotificationService,
    public apiUrlService: ApiUrlService) {

    this.extractionForm = new FormGroup({
      date: new FormControl(),
      plant: new FormControl(),
      product: new FormControl(),
      campaign: new FormControl(),
      stage: new FormControl(),
      tank: new FormControl(),
      concentration: new FormControl(),
      volume: new FormControl(),
      weight: new FormControl(),
      level: new FormControl(),
      ph: new FormControl()
    })
    this.getExtractions();
  }

  getExtractions() {
    this.http.get<Extraction>(this.apiUrlService.apiUrl + 'extractions').subscribe((data: any) => {
      this.extractions = data;
    })
  }

  onSubmitExtractionForm() {
    if (this.newExtractionSelected) {
      this.http
        .post<Extraction>(this.apiUrlService.apiUrl + 'extractions', this.extractionForm.value)
        .subscribe((data: any) => {


          this.extractions.push(data);
          this.notificationService.sendNotifications({ message: "New Extraction Added" });
          this.newExtractionSelected = false;
          this.dialog.closeAll()

        });
    } else {
      this.http
        .put(this.apiUrlService.apiUrl + 'extractions/' + this.selectedExtractionId, this.extractionForm.value)
        .subscribe(() => {
          this.getExtractions();
          this.newExtractionSelected = false;
          this.dialog.closeAll()
          this.notificationService.sendNotifications({ message: " Extraction Edited" });
        });
    }
    this.extractionForm.reset()
  }

  // onEditExtraction(extractionId: string) {
  //   this.selectedExtractionId = extractionId;
  //   this.http.put('http://localhost:3000/extractions/' + extractionId, this.extractionForm.value).subscribe(() => {
  //     this.getExtractions();
  //     this.newExtractionSelected = false;
  //   })
  // }

  onDeleteExtraction(extractionId: string) {
    this.http.delete<Extraction>(this.apiUrlService.apiUrl + 'extractions/' + extractionId).subscribe((data: any) => {
      this.getExtractions();
      this.notificationService.sendNotifications({ message: " Extraction Deleted" });
    })
  }

  onSelectExtraction(id: string) {
    this.http.get<Extraction>(this.apiUrlService.apiUrl + 'extractions/' + id).subscribe((data: Extraction) => {
      this.extractionForm.patchValue(data);
      this.newExtractionSelected = false;
    });
  }

  openDialog(): void {
    this.dialog.open(ExtractionDialogComponent, {
      width: '500px'
    });
  }

}


