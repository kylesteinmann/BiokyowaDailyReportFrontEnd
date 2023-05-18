import { Component } from '@angular/core';
import { PackagingService } from '../../Services/packaging.service';

@Component({
  selector: 'app-packaging',
  templateUrl: './packaging.component.html',
  styleUrls: ['./packaging.component.css']
})
export class PackagingComponent {

  constructor(public packagingService: PackagingService) {

  }

  sortTable(column: string) {
    this.packagingService.packagings.sort((a, b) => {
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
