import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { TerrainsService } from 'src/app/services/terrains.service';

@Component({
  selector: 'app-single-terrain',
  templateUrl: './single-terrain.component.html',
  styleUrls: ['./single-terrain.component.css'],
})
export class SingleTerrainComponent implements OnInit {
  id: string = '';
  title: string = '';
  terrain: any;
  errorMessage: string = '';
  resErrorMessage: string = '';
  user: string = '';
  constructor(
    private authService: AuthServiceService,
    private reservationservice: ReservationService,
    private route: ActivatedRoute,
    private terrainsService: TerrainsService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.authService.getProfile(token).subscribe(
      (response) => {
        if (response) {
          this.user = response.id;
        }
      },
      (error) => {
        this.errorMessage = error.error.message;
      }
    );
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.terrainsService.getTerrainById(this.id).subscribe(
      (response) => {
        this.terrain = response;
        if (this.terrain.sport === 1) {
          this.terrain.sport = 'football';
        } else if (this.terrain.sport === 2) {
          this.terrain.sport = 'basketball';
        } else if (this.terrain.sport === 3) {
          this.terrain.sport = 'volleyball';
        } else if (this.terrain.sport === 4) {
          this.terrain.sport = 'tennis';
        }
        this.title = 'Terrain de ' + this.terrain.sport;
      },
      (error) => {
        this.errorMessage = error;
        this.errorMessage = error.error.message;
      }
    );
  }
  onSubmit(formulaire: NgForm) {
    // recuperer user id

    const { date, date_d, date_f } = formulaire.form.value;
    const newDate_d: string = date + 'T' + date_d + ':00.690Z';
    const newDate_f: string = date + 'T' + date_f + ':00.690Z';
    this.reservationservice
      .add(this.id, this.user, newDate_d, newDate_f)
      .subscribe(
        (response) => {
          if (response) {
            if (response.res === 'error') {
              this.resErrorMessage = response.message;
            }
          }
        },
        (error) => {}
      );
  }
}
