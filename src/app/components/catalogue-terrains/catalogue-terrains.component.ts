import { Component, OnInit } from '@angular/core';
import { Terrain } from '../../models/Terrain';
import { FilterService } from '../../services/filterService.service';

@Component({
  selector: 'app-catalogue-terrains',
  templateUrl: './catalogue-terrains.component.html',
  styleUrls: ['./catalogue-terrains.component.css'],
  providers: [FilterService]
})
export class CatalogueTerrainsComponent  {
  public terrains : Terrain[]= [
    { id:1,description: 'Mountain terrain', sport: 'hiking', address: 'Mount Everest', surface: 1000, image: '1.jpg',title:'terrain 1' },
    { id:2,description: 'Desert terrain', sport: 'sandboarding', address: 'Sahara Desert', surface: 500, image: '2.jpg',title:'terrain 2' },
    { id:3,description: 'Forest terrain', sport: 'mountain biking', address: 'Amazon Rainforest', surface: 800, image: '3.jpg',title:'terrain 3' },
    { id:4,description: 'City terrain', sport: 'skateboarding', address: 'New York City', surface: 300, image: '4.jpg',title:'terrain 4' }
  ];
  public filteredTerrains: Terrain[]=this.terrains;

  constructor(private filterService: FilterService) { }

  ngOnInit() :void{
    
    this.filteredTerrains = this.terrains;
  }

  onFilterChange(filter:any) {
    this.filteredTerrains = this.filterService.filterTerrains(this.terrains, filter);
    console.log(filter)
  }
}
