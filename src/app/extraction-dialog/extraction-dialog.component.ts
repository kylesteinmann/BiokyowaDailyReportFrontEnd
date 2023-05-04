import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ExtractionService } from '../Services/extraction.service';

@Component({
  selector: 'app-extraction-dialog',
  templateUrl: './extraction-dialog.component.html',
  styleUrls: ['./extraction-dialog.component.css']
})
export class ExtractionDialogComponent {
  constructor(public dialogRef: MatDialogRef<ExtractionDialogComponent>, public extractionService:ExtractionService) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
