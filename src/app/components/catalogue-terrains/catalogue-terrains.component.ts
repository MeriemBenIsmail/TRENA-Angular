import { Component, OnInit } from '@angular/core';
import { Terrain } from '../../models/Terrain';
import { FilterService } from 'src/app/services/filter.service';
import { TerrainsService } from 'src/app/services/terrains.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-catalogue-terrains',
  templateUrl: './catalogue-terrains.component.html',
  styleUrls: ['./catalogue-terrains.component.css'],
  providers: [FilterService],
})
export class CatalogueTerrainsComponent {
  public terrains: any[] = [];
  public filteredTerrains: Terrain[] = this.terrains;
  errorMessage: string = '';
  constructor(
    private filterService: FilterService,
    private terrainsService: TerrainsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.filteredTerrains = this.terrains;
    this.terrainsService.getTerrains().subscribe(
      (response) => {
        this.terrains = response;
        this.terrains.map((terrain, id) => {
          if (terrain.sport === 1) {
            terrain.sport = 'football';
          } else if (terrain.sport === 2) {
            terrain.sport = 'basketball';
          } else if (terrain.sport === 3) {
            terrain.sport = 'volleyball';
          } else if (terrain.sport === 4) {
            terrain.sport = 'tennis';
          }
        });
      },
      (error) => {
        this.errorMessage = error;
        this.errorMessage = error.error.message;
      }
    );
  }

  onFilterChange(filter: any) {
    this.filteredTerrains = this.filterService.filterTerrains(
      this.terrains,
      filter
    );
    console.log(filter);
  }
}
