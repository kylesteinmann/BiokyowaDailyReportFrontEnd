import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ExtractionService } from '../Services/extraction.service';
@Component({
  selector: 'app-extraction',
  templateUrl: './extraction.component.html',
  styleUrls: ['./extraction.component.css']
})
export class ExtractionComponent {
  extractionForm: FormGroup;
  constructor(public extractionService: ExtractionService) {
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
  });
   }



}
