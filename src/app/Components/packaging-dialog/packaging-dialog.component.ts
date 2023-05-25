import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PackagingService } from '../../Services/packaging.service';
import { CsvService } from '../../Services/csv.service';

@Component({
  selector: 'app-packaging-dialog',
  templateUrl: './packaging-dialog.component.html',
  styleUrls: ['./packaging-dialog.component.css']
})
export class PackagingDialogComponent {
  constructor(public dialogRef: MatDialogRef<PackagingDialogComponent>, public csvService: CsvService, public packagingService: PackagingService) { }

  onCancel(): void {
    this.dialogRef.close();
  }
}
