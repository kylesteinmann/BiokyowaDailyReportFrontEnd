import { Component, OnInit, ViewChild } from '@angular/core';
import { SummaryService } from 'src/app/Services/summary.service';
import { BaseChartDirective } from 'ng2-charts';
import { UserService } from 'src/app/Services/user.service';
import { FermentationService } from 'src/app/Services/fermentation.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @ViewChild(BaseChartDirective, { static: false }) chart!: BaseChartDirective;

  constructor(public summaryService: SummaryService, public userService: UserService, public fermentationService: FermentationService) {
    this.fermentationService.getFermentations();
  }

  ngOnInit(): void {
    this.summaryService.getExtractionData()
    this.summaryService.getFermentationData()
    this.summaryService.getPackagingData()
  }
}
