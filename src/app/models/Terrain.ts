export class Terrain {
  description: string;
  sport: number;
  price: number;
  address: string;
  surface: number;
  image: string;
  constructor(
    public id = 0,
    description = '',
    sport = 1,
    address = '',
    surface = 0,
    image = '',
    price = 0,
    available = true
  ) {
    this.id = id;
    this.description = description;
    this.sport = sport;
    this.address = address;
    this.surface = surface;
    this.image = image;
    this.price = price;
  }
}
