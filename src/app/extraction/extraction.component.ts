import { Component } from '@angular/core';
import { ExtractionService } from '../Services/extraction.service';

@Component({
  selector: 'app-extraction',
  templateUrl: './extraction.component.html',
  styleUrls: ['./extraction.component.css']
})
export class ExtractionComponent {

  constructor(public extractionService: ExtractionService) {

   }

  sortTable(column: string) {
    this.extractionService.extractions.sort((a, b) => {
      if (a[column] < b[column]) {
        return -1;
      }
      if (a[column] > b[column]) {
        return 1;
      }
      return 0;
    });
  }
}
