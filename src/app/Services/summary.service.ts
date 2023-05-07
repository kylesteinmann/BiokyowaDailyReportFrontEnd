import { Injectable } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Extraction } from 'src/app/Models/extraction';
import { Fermentation } from '../Models/fermentation';


@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  title = 'Reports Summary';

  public extractionConcentrationChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Tryptophan Concentration',
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(27,94,32)',
        backgroundColor: 'rgba(27,94,32.3)'
      },
      {
        data: [],
        label: 'Valine Concentration',
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(244,94,32)',
        backgroundColor: 'rgba(244,94,32.3)'
      }
    ]
  };

  public extractionVolumeChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Tryptophan Volume',
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(27,94,32)',
        backgroundColor: 'rgba(27,94,32.3)'
      },
      {
        data: [],
        label: 'Valine Volume',
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(244,94,32)',
        backgroundColor: 'rgba(244,94,32.3)'
      }
    ]
  };

  public extractionWeightChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Tryptophan Weight',
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(27,94,32)',
        backgroundColor: 'rgba(27,94,32.3)'
      },
      {
        data: [],
        label: 'Valine Weight',
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(244,94,32)',
        backgroundColor: 'rgba(244,94,32.3)'
      }
    ]
  };

  public extractionLevelChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Tryptophan Level',
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(27,94,32)',
        backgroundColor: 'rgba(27,94,32.3)'
      },
      {
        data: [],
        label: 'Valine Level',
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(244,94,32)',
        backgroundColor: 'rgba(244,94,32.3)'
      }
    ]
  };

  public extractionPhChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Tryptophan PH',
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(27,94,32)',
        backgroundColor: 'rgba(27,94,32.3)'
      },
      {
        data: [],
        label: 'Valine PH',
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(244,94,32)',
        backgroundColor: 'rgba(244,94,32.3)'
      }
    ]

  };

  public fermentationReceivedChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Tryptophan Received',
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(27,94,32)',
        backgroundColor: 'rgba(27,94,32.3)'
      },
      {
        data: [],
        label: 'Valine Received',
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(244,94,32)',
        backgroundColor: 'rgba(244,94,32.3)'
      }
    ]

  };

  public fermentationLevelChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Tryptophan Level',
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(27,94,32)',
        backgroundColor: 'rgba(27,94,32.3)'
      },
      {
        data: [],
        label: 'Valine Level',
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(244,94,32)',
        backgroundColor: 'rgba(244,94,32.3)'
      }
    ]

  };

  public fermentationWeightChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Tryptophan Weight',
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(27,94,32)',
        backgroundColor: 'rgba(27,94,32.3)'
      },
      {
        data: [],
        label: 'Valine Weight',
        fill: false,
        tension: 0.5,
        borderColor: 'rgb(244,94,32)',
        backgroundColor: 'rgba(244,94,32.3)'
      }
    ]

  };

  public ChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public ChartLegend = true;

  constructor(private http: HttpClient) {

  }

  getExtractionData(): Promise<void> {
    return new Promise((resolve) => {

      this.http.get<Extraction>('http://localhost:3000/extractions').subscribe((res: any) => {

        const uniqueDates = new Set();
        res.forEach((extraction: Extraction) => {
          uniqueDates.add(extraction.date)

          if (extraction.product == "Tryptophan") {
            this.extractionConcentrationChartData.datasets[0].data?.push(extraction.concentration);
            this.extractionVolumeChartData.datasets[0].data?.push(extraction.volume);
            this.extractionWeightChartData.datasets[0].data?.push(extraction.weight);
            this.extractionLevelChartData.datasets[0].data?.push(extraction.level);
            this.extractionPhChartData.datasets[0].data?.push(extraction.ph);
          } else {
            this.extractionConcentrationChartData.datasets[1].data?.push(extraction.concentration);
            this.extractionVolumeChartData.datasets[1].data?.push(extraction.volume);
            this.extractionWeightChartData.datasets[1].data?.push(extraction.weight);
            this.extractionLevelChartData.datasets[1].data?.push(extraction.level);
            this.extractionPhChartData.datasets[1].data?.push(extraction.ph);
          }
        });
        this.extractionConcentrationChartData.labels = Array.from(uniqueDates);
        this.extractionVolumeChartData.labels = Array.from(uniqueDates);
        this.extractionWeightChartData.labels = Array.from(uniqueDates);
        this.extractionLevelChartData.labels = Array.from(uniqueDates);
        this.extractionPhChartData.labels = Array.from(uniqueDates);
        resolve();
      });
    });
  }

  getFermentationData(): Promise<void> {
    return new Promise((resolve) => {

      this.http.get<Fermentation>('http://localhost:3000/fermentations').subscribe((res: any) => {

        const uniqueDates = new Set();
        res.forEach((fermentation: Fermentation) => {
          uniqueDates.add(fermentation.date)

          if (fermentation.product == "Tryptophan") {
            this.fermentationReceivedChartData.datasets[0].data?.push(fermentation.received);
            this.fermentationWeightChartData.datasets[0].data?.push(fermentation.weight);
            this.fermentationLevelChartData.datasets[0].data?.push(fermentation.level);
          } else {
            this.fermentationReceivedChartData.datasets[1].data?.push(fermentation.received);
            this.fermentationWeightChartData.datasets[1].data?.push(fermentation.weight);
            this.fermentationLevelChartData.datasets[1].data?.push(fermentation.level);

          }
        });
        this.fermentationReceivedChartData.labels = Array.from(uniqueDates);
        this.fermentationWeightChartData.labels = Array.from(uniqueDates);
        this.fermentationLevelChartData.labels = Array.from(uniqueDates);
        resolve();
      });
    });
  }
}
