import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Fermentation } from '../Models/fermentation';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { FermentationDialogComponent } from '../Components/fermentation-dialog/fermentation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class FermentationService {
  fermentationForm: FormGroup;
  newFermentationSelected: boolean = false;
  fermentations: Fermentation[] = []
  selectedFermentationId: string = '';
  dialogRef: any;
  csvChosen: boolean = false;
  selectedFile: File;



  constructor(private http: HttpClient, public dialog: MatDialog) {
    this.fermentationForm = new FormGroup({

      date: new FormControl(),
      plant: new FormControl(),
      product: new FormControl(),
      campaign: new FormControl(),
      stage: new FormControl(),
      tank: new FormControl(),
      weight: new FormControl(),
      level: new FormControl(),
      received: new FormControl()
    })

    this.getFermentations();
  }
  getFermentations() {
    this.http.get<Fermentation>('http://localhost:3000/fermentations').subscribe((data: any) => {
      this.fermentations = data;
    })
  }

  onSubmitFermentationForm() {
    if (this.newFermentationSelected) {
      this.http
        .post<Fermentation>('http://localhost:3000/fermentations', this.fermentationForm.value)
        .subscribe((data: any) => {
          this.fermentations.push(data);
          this.newFermentationSelected = false;
          this.dialog.closeAll()
        });
    } else {
      this.http
        .put('http://localhost:3000/fermentations/' + this.selectedFermentationId, this.fermentationForm.value)
        .subscribe(() => {
          this.getFermentations();
          this.newFermentationSelected = false;
          this.dialog.closeAll()
        });
    }
    this.fermentationForm.reset()
  }

  onEditFermentation(fermentationId: string) {
    this.selectedFermentationId = fermentationId;
    this.http.put('http://localhost:3000/fermentations/' + fermentationId, this.fermentationForm.value).subscribe(() => {
      this.getFermentations();
      this.newFermentationSelected = false;
    })
  }

  onDeleteFermentation(fermentationId: string) {
    this.http.delete<Fermentation>('http://localhost:3000/fermentations/' + fermentationId).subscribe(() => {
      this.getFermentations();
    })
  }

  onSelectFermentation(id: string) {
    this.http.get<Fermentation>('http://localhost:3000/fermentations/' + id).subscribe((data: Fermentation) => {
      this.fermentationForm.patchValue(data);
      this.newFermentationSelected = false;
    });
  }

  openDialog(): void {
    this.dialog.open(FermentationDialogComponent, {
      width: '500px'
    });
  }

  onCsvFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onCsvSubmit() {

    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    this.http.post<any>('http://localhost:3000/fermentations/import', formData)
      .subscribe(
        () => {
          console.log('CSV file submitted successfully!');
          this.getFermentations();
        },
        (error) => {
          console.error('Error submitting CSV file:', error);
        }
      );
  }

}
