import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Terrain } from '../../models/Terrain';
import{ Filter } from '../../models/Filter';
@Component({
  selector: 'app-filter-terrains',
  templateUrl: './filter-terrains.component.html',
  styleUrls: ['./filter-terrains.component.css']
})
export class FilterTerrainsComponent implements OnInit {
  @Input()
  terrains!: Terrain[];

  @Output() onFilter = new EventEmitter<Filter>();

  filterSport: string='';
  filterSurface: number=0;
  filterAddress: string='';
filters: Filter = {
      sport: this.filterSport,
      surface: this.filterSurface,
      address: this.filterAddress
    }
  sports = ['Soccer', 'Basketball', 'Tennis', 'Volleyball'];

  constructor() { }

  ngOnInit() {
  }

  filter() {
    
    this.onFilter.emit(this.filters);
  }
}