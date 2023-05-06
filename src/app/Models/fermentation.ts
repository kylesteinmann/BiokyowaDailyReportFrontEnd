

export class Fermentation {
  id: string;
  date: Date;
  plant: number;
  product: string;
  campaign: string;
  stage: string;
  tank: string;
  weight: number;
  level: number;
  received: number;
  [key: string]: any;

  constructor(id = '',
    date = new Date(),
    plant = 0,
    product = '',
    campaign = '',
    stage = '',
    tank = '',
    weight = 0,
    level = 0,
    received = 0,) {

    this.id = id;
    this.date = date;
    this.plant = plant;
    this.product = product;
    this.campaign = campaign;
    this.stage = stage;
    this.tank = tank;
    this.weight = weight;
    this.level = level;
    this.received = received;
  }
}
