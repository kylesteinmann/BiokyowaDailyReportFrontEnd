import { Injectable } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Extraction } from 'src/app/Models/extraction';
import { Fermentation } from '../Models/fermentation';
import { Packaging } from '../Models/packaging';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  summaryTitle = 'Reports Summary';

  public ChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public ChartLegend = true;

  constructor(private http: HttpClient) {
  }

  private createChartData(chartType: string, label: string, colorOne: string, colorTwo): ChartConfiguration<'line'>['data'] {
    return {
      labels: [],
      datasets: [
        {
          data: [], label: `Tryptophan ${label}`, fill: false, tension: 0.5, borderColor: colorOne, backgroundColor: `${colorOne}`
        },
        {
          data: [], label: `Valine ${label}`, fill: false, tension: 0.5, borderColor: colorTwo, backgroundColor: `${colorTwo} `
        }
      ]
    };
  }

  public extractionConcentrationChartData = this.createChartData('line', 'Concentration', 'rgb(27,94,32)', 'rgb(244,94,32)');
  public extractionVolumeChartData = this.createChartData('line', 'Volume', 'rgb(27,94,32)', 'rgb(244,94,32)');
  public extractionWeightChartData = this.createChartData('line', 'Weight', 'rgb(27,94,32)', 'rgb(244,94,32)');
  public extractionLevelChartData = this.createChartData('line', 'Level', 'rgb(27,94,32)', 'rgb(244,94,32)');
  public extractionPhChartData = this.createChartData('line', 'Ph', 'rgb(27,94,32)', 'rgb(244,94,32)');
  public fermentationReceivedChartData = this.createChartData('line', 'Received', 'rgb(27,94,32)', 'rgb(244,94,32)');
  public fermentationLevelChartData = this.createChartData('line', 'Level', 'rgb(27,94,32)', 'rgb(244,94,32)');
  public fermentationWeightChartData = this.createChartData('line', 'Weight', 'rgb(27,94,32)', 'rgb(244,94,32)');
  public packagingIncomingChartData = this.createChartData('line', 'Incoming', 'rgb(27,94,32)', 'rgb(244,94,32)');
  public packagingOutgoingChartData = this.createChartData('line', 'Outgoing', 'rgb(27,94,32)', 'rgb(244,94,32)');

  private updateChartData(chartData: ChartConfiguration<'line'>['data'], _product: string, value: number, index: number): void {
    chartData.datasets[index].data?.push(value);
  }

  getExtractionData(): Promise<void> {
    return new Promise((resolve) => {
      if (localStorage.getItem('extractionData')) {
        const extractionData = JSON.parse(localStorage.getItem('extractionData') || '{}');
        this.extractionConcentrationChartData = extractionData.extractionConcentrationChartData;
        this.extractionVolumeChartData = extractionData.extractionVolumeChartData;
        this.extractionWeightChartData = extractionData.extractionWeightChartData;
        this.extractionLevelChartData = extractionData.extractionLevelChartData;
        this.extractionPhChartData = extractionData.extractionPhChartData;
        resolve();
      } else {
        this.http.get<Extraction>('http://localhost:3000/extractions').subscribe((res: any) => {
          const uniqueDates = new Set();

          res.forEach((extraction: Extraction) => {
            const date = new Date(extraction.date);
            const formattedDate = date.toLocaleDateString('en-US', {
              month: 'numeric',
              day: 'numeric',
              year: '2-digit'
            }).replace(/\//g, '/');
            uniqueDates.add(formattedDate);



            const productIndex = extraction.product === 'Tryptophan' ? 0 : 1;
            this.updateChartData(this.extractionConcentrationChartData, extraction.product, extraction.concentration, productIndex);
            this.updateChartData(this.extractionVolumeChartData, extraction.product, extraction.volume, productIndex);
            this.updateChartData(this.extractionWeightChartData, extraction.product, extraction.weight, productIndex);
            this.updateChartData(this.extractionLevelChartData, extraction.product, extraction.level, productIndex);
            this.updateChartData(this.extractionPhChartData, extraction.product, extraction.ph, productIndex);

          });
          this.extractionConcentrationChartData.labels = Array.from(uniqueDates);
          this.extractionVolumeChartData.labels = Array.from(uniqueDates);
          this.extractionWeightChartData.labels = Array.from(uniqueDates);
          this.extractionLevelChartData.labels = Array.from(uniqueDates);
          this.extractionPhChartData.labels = Array.from(uniqueDates);
          localStorage.setItem('extractionData', JSON.stringify({
            extractionConcentrationChartData: this.extractionConcentrationChartData,
            extractionVolumeChartData: this.extractionVolumeChartData,
            extractionWeightChartData: this.extractionWeightChartData,
            extractionLevelChartData: this.extractionLevelChartData,
            extractionPhChartData: this.extractionPhChartData
          }));

          resolve();
        });
      }
    });
  }

  getFermentationData(): Promise<void> {
    return new Promise((resolve) => {
      if (localStorage.getItem('fermentationData')) {
        const fermentationData = JSON.parse(localStorage.getItem('fermentationData') || '{}');
        this.fermentationReceivedChartData = fermentationData.fermentationReceivedChartData;
        this.fermentationLevelChartData = fermentationData.fermentationLevelChartData;
        this.fermentationWeightChartData = fermentationData.fermentationWeightChartData;
        resolve();
      } else {
        this.http.get<Fermentation>('http://localhost:3000/fermentations').subscribe((res: any) => {
          const uniqueDates = new Set();
          res.forEach((fermentation: Fermentation) => {
            const date = new Date(fermentation.date);
            const formattedDate = date.toLocaleDateString('en-US', {
              month: 'numeric',
              day: 'numeric',
              year: '2-digit'
            }).replace(/\//g, '/');

            uniqueDates.add(formattedDate);
            const productIndex = fermentation.product === 'Tryptophan' ? 0 : 1;
            this.updateChartData(this.fermentationReceivedChartData, fermentation.product, fermentation.received, productIndex);
            this.updateChartData(this.fermentationLevelChartData, fermentation.product, fermentation.level, productIndex);
            this.updateChartData(this.fermentationWeightChartData, fermentation.product, fermentation.weight, productIndex);

          });
          this.fermentationReceivedChartData.labels = Array.from(uniqueDates);
          this.fermentationLevelChartData.labels = Array.from(uniqueDates);
          this.fermentationWeightChartData.labels = Array.from(uniqueDates);

          localStorage.setItem('fermentationData', JSON.stringify({
            fermentationReceivedChartData: this.fermentationReceivedChartData,
            fermentationLevelChartData: this.fermentationLevelChartData,
            fermentationWeightChartData: this.fermentationWeightChartData
          }));

          resolve();
        });
      }
    });
  }

  getPackagingData(): Promise<void> {
    return new Promise((resolve) => {
      if (localStorage.getItem('packagingData')) {
        const packagingData = JSON.parse(localStorage.getItem('packagingData') || '{}');
        this.packagingIncomingChartData = packagingData.packagingIncomingChartData;
        this.packagingOutgoingChartData = packagingData.packagingOutgoingChartData;
        resolve();
      } else {
        this.http.get<Packaging>('http://localhost:3000/packagings').subscribe((res: any) => {
          const uniqueDates = new Set();

          res.forEach((packaging: Packaging) => {
            const date = new Date(packaging.date);
            const formattedDate = date.toLocaleDateString('en-US', {
              month: 'numeric',
              day: 'numeric',
              year: '2-digit'
            }).replace(/\//g, '/');

            uniqueDates.add(formattedDate);

            const productIndex = packaging.product === 'Tryptophan' ? 0 : 1;
            this.updateChartData(this.packagingIncomingChartData, packaging.product, packaging.incoming, productIndex);
            this.updateChartData(this.packagingOutgoingChartData, packaging.product, packaging.outgoing, productIndex);
          });

          this.packagingIncomingChartData.labels = Array.from(uniqueDates);
          this.packagingOutgoingChartData.labels = Array.from(uniqueDates);
          localStorage.setItem('packagingData', JSON.stringify({
            packagingIncomingChartData: this.packagingIncomingChartData,
            packagingOutgoingChartData: this.packagingOutgoingChartData
          }));

          resolve();
        });
      }
    });
  }
}
