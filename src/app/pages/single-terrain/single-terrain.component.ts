import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  resSuccessMessage: string = '';
  user: string = '';
  constructor(
    private router: Router,
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
      (response: any) => {
        if (response) {
          this.terrain = response;
          if (this.terrain) {
            if (this.terrain?.sport === 1) {
              this.terrain.sport = 'football';
            } else if (this.terrain?.sport === 2) {
              this.terrain.sport = 'basketball';
            } else if (this.terrain?.sport === 3) {
              this.terrain.sport = 'volleyball';
            } else if (this.terrain?.sport === 4) {
              this.terrain.sport = 'tennis';
            }
            this.title = 'Terrain de ' + this.terrain.sport;
          }
        } else {
          this.router.navigate(['/not-found']);
        }
      },
      (error: any) => {
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
    console.log(date_d, date_f);
    this.reservationservice
      .add(this.id, this.user, newDate_d, newDate_f)
      .subscribe(
        (response: any) => {
          if (response) {
            if (response.res === 'error') {
              this.resErrorMessage = response.message;
            } else {
              this.resSuccessMessage = 'Reservation effectuée avec succés';
              setTimeout(() => {
                window.location.reload();
              }, 3000);
            }
          }
        },
        (error: any) => {}
      );
  }
}
