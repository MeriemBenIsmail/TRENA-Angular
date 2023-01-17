import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  baseURL: string = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getReservations(): Observable<any> {
    return this.http.get(this.baseURL + 'reservations/');
  }
  add(
    terrain: string,
    user: string,
    date_d: string,
    date_f: string
  ): Observable<any> {
    return this.http.post(this.baseURL + 'reservations/', {
      user: user,
      terrain: terrain,
      date_d: date_d,
      date_f: date_f,
      status: 1,
    });
  }
}
