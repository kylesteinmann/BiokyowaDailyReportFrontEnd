import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ExtractionService } from '../Services/extraction.service';
@Component({
  selector: 'app-extraction',
  templateUrl: './extraction.component.html',
  styleUrls: ['./extraction.component.css']
})
export class ExtractionComponent {

  constructor(public extractionService: ExtractionService) {

   }



}
