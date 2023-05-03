

export class Extraction {
  id: string;
  date: Date;
  plant: number;
  product: string;
  campaign: string;
  stage: string;
  tank: string;
  concentration: number;
  volume: number;
  weight: number;
  level: number;
  ph: number;

    constructor( id = '',
      date = new Date(),
      plant = 0,
      product = '',
      campaign = '',
      stage = '',
      tank = '',
      concentration = 0,
      volume = 0,
      weight = 0,
      level = 0,
      ph = 0,) {

        this.id = id;
        this.date = date;
        this.plant = plant;
        this.product = product;
        this.campaign = campaign;
        this.stage = stage;
        this.tank = tank;
        this.concentration = concentration;
        this.volume = volume;
        this.weight = weight;
        this.level = level;
        this.ph = ph;
      }
  }
