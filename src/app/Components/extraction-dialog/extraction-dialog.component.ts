import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ExtractionService } from 'src/app/Services/extraction.service';
import { CsvService } from 'src/app/Services/csv.service';

@Component({
  selector: 'app-extraction-dialog',
  templateUrl: './extraction-dialog.component.html',
  styleUrls: ['./extraction-dialog.component.css']
})
export class ExtractionDialogComponent {
  constructor(public dialogRef: MatDialogRef<ExtractionDialogComponent>, public csvService: CsvService, public extractionService: ExtractionService) { }

  onCancel(): void {
    this.dialogRef.close();
  }
}
