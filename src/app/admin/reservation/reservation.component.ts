import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  reservations: any[] = [];
  errorMessage: string = '';
  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(
      (response) => {
        this.reservations = response;
      },
      (error) => {
        this.errorMessage = error;
        this.errorMessage = error.error.message;
      }
    );
  }
}
