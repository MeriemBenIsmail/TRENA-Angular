import { Injectable } from '@angular/core';
import { Terrain } from '../models/Terrain';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filterTerrains(terrains: Terrain[], filter : any) {
    let filteredTerrains = [...terrains];
    if (filter.surface) {
      filteredTerrains = filteredTerrains.filter(terrain => terrain.surface >= filter.surface);
    }
    if (filter.sport) {
      filteredTerrains = filteredTerrains.filter(terrain => terrain.sport === filter.sport);
    }
    if (filter.address) {
      filteredTerrains = filteredTerrains.filter(terrain => terrain.address === filter.address);
    }
    return filteredTerrains;
  }
}
