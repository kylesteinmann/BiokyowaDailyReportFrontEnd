import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FermentationService } from 'src/app/Services/fermentation.service';
import { CsvService } from 'src/app/Services/csv.service';


@Component({
  selector: 'app-fermentation-dialog',
  templateUrl: './fermentation-dialog.component.html',
  styleUrls: ['./fermentation-dialog.component.css']
})
export class FermentationDialogComponent {
  constructor(public dialogRef: MatDialogRef<FermentationDialogComponent>, public fermentationService: FermentationService, public csvService: CsvService) { }

  onCancel(): void {
    this.dialogRef.close();
  }
}
