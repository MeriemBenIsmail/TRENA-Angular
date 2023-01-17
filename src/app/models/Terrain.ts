export class Terrain {
    description: string;
    sport: string;
    address: string;
    surface: number;
    image: string;
    title: string;
    constructor(public id = 0, description = '', sport = '', address = '', surface = 0,image='',title='') {
        this.id = id;
        this.description = description;
        this.sport = sport;
        this.address = address;
        this.surface = surface;
        this.image = image;
        this.title= title;
      }
  }