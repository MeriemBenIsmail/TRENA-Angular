import { Component, OnInit } from '@angular/core';
import { TerrainsService } from 'src/app/services/terrains.service';

@Component({
  selector: 'app-admin-terrains',
  templateUrl: './admin-terrain.component.html',
  styleUrls: ['./admin-terrain.component.css'],
})
export class AdminTerrainComponent implements OnInit {
  errorMessage: string = '';
  terrains: any[] = [];
  constructor(private terrainsService: TerrainsService) {}

  ngOnInit(): void {
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
  handleDelete(id: string) {
    this.terrainsService.delete(id).subscribe(
      (response) => {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
      (error) => {
        this.errorMessage = error;
        this.errorMessage = error.error.message;
      }
    );
  }
}
