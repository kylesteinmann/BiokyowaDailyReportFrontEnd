import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FermentationService } from './fermentation.service';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  csvChosen: boolean = false;
  selectedFile: File;

  constructor(public http: HttpClient, public fermentationService: FermentationService) { }

  onCsvSubmit(department: string) {

    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    this.http.post<any>('http://localhost:3000/' + department + '/import', formData)
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
