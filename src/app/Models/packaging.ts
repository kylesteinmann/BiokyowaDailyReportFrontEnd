

export class Packaging {
  id: string;
  date: Date;
  plant: number;
  product: string;
  campaign: string;
  packages: string;
  incoming: number;
  outgoing: number;
  [key: string]: any;

    constructor( id = '',
      date = new Date(),
      plant = 0,
      product = '',
      campaign = '',
      packages = '',
      incoming = 0,
      outgoing = 0,) {

        this.id = id;
        this.date = date;
        this.plant = plant;
        this.product = product;
        this.campaign = campaign;
        this.packages = packages;
        this.incoming = incoming;
        this.outgoing = outgoing;
      }
  }
