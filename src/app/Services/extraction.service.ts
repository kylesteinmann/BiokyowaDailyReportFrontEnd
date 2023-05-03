import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ExtractionService {
  extractionForm: FormGroup;
  constructor() {
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
      levelIndicator: new FormControl(),
      ph: new FormControl()
    })
  }

  onSubmitExtractionForm() {

  }
}
