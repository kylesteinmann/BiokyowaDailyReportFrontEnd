import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FermentationService } from './fermentation.service';
import { ApiUrlService } from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  csvChosen: boolean = false;
  selectedFile: File;

  constructor(public http: HttpClient, public fermentationService: FermentationService, public apiUrlService: ApiUrlService) { }

  onCsvSubmit(department: string) {

    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    this.http.post<any>(this.apiUrlService.apiUrl + department + '/import', formData)
      .subscribe(
        () => {
          console.log('CSV file submitted successfully!');
          this.fermentationService.getFermentations();
        },
        (error) => {
          console.error('Error submitting CSV file:', error);
        }
      );
  }

  onCsvFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
