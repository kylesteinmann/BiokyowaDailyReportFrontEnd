import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Extraction } from '../Models/extraction';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExtractionService {
  extractionForm: FormGroup;
  newExtractionSelected: boolean = false;
  extractions: Extraction[] = []
  selectedExtractionId: string = '';

  constructor(private http:HttpClient) {
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
    this.http.get<Extraction>('http://localhost:3000/extractions').subscribe((data:any) => {
      this.extractions = data;
    })
  }

  onSubmitExtractionForm() {
    if (this.newExtractionSelected) {
      this.http
        .post<Extraction>('http://localhost:3000/extractions', this.extractionForm.value)
        .subscribe((data: any) => {
          this.extractions.push(data);
          this.extractionForm.reset();
          this.newExtractionSelected = false;

        });
    } else {
      this.http
        .put('http://localhost:3000/extractions/' + this.selectedExtractionId, this.extractionForm.value)
        .subscribe(() => {
          this.getExtractions();
          this.newExtractionSelected = false;
        });
    }
  }


  onEditExtraction(extractionId:string) {
    this.http.put('http://localhost:3000/extractions/' + extractionId, this.extractionForm.value).subscribe(() => {
      this.getExtractions();
    })
  }

  onDeleteExtraction(extractionId: string) {
    this.http.delete<Extraction>('http://localhost:3000/extractions/' + extractionId).subscribe((data:any) => {
      this.getExtractions();
    })
  }

  onSelectExtraction(id: string) {
  this.http.get<Extraction>('http://localhost:3000/extractions/' + id).subscribe((data: Extraction) => {
    this.extractionForm.setValue({
      date: data.date,
      plant: data.plant,
      product: data.product,
      campaign: data.campaign,
      stage: data.stage,
      tank: data.tank,
      concentration: data.concentration,
      volume: data.volume,
      weight: data.weight,
      level: data.level,
      ph: data.ph
    });
    this.newExtractionSelected = true;
  });
}

}


