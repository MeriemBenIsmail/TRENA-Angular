export class Filter {
    sport: string;
    surface: number;
    address: string;
    constructor( sport = '', surface = 0, address = '') {
      this.sport = sport;
      this.surface = surface;
      this.address = address;
     
    }
  }