import { Component, ViewChild } from '@angular/core';
import { SummaryService } from 'src/app/Services/summary.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @ViewChild(BaseChartDirective, { static: false }) chart!: BaseChartDirective;

  constructor(public summaryService: SummaryService) {
    this.summaryService.getExtractionData().then(() => {
      if (this.chart !== undefined) {
        this.chart.update();
      }
    });

    this.summaryService.getFermentationData().then(() => {
      if (this.chart !== undefined) {
        this.chart.update();
      }

    });

  }
}
