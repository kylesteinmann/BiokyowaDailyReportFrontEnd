import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FermentationService } from 'src/app/Services/fermentation.service';


@Component({
  selector: 'app-fermentation-dialog',
  templateUrl: './fermentation-dialog.component.html',
  styleUrls: ['./fermentation-dialog.component.css']
})
export class FermentationDialogComponent {
  constructor(public dialogRef: MatDialogRef<FermentationDialogComponent>, public fermentationService: FermentationService) { }

  onCancel(): void {
    this.dialogRef.close();
  }
}
