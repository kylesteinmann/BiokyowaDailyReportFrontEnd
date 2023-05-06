import { Component } from '@angular/core';
import { FermentationService } from 'src/app/Services/fermentation.service';

@Component({
  selector: 'app-fermentation',
  templateUrl: './fermentation.component.html',
  styleUrls: ['./fermentation.component.css']
})
export class FermentationComponent {
  constructor(public fermentationService: FermentationService) {

  }
  sortTable(column: string) {
    this.fermentationService.fermentations.sort((a, b) => {
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
