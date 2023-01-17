import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TerrainsService {
  baseURL: string = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getTerrains(): Observable<any> {
    return this.http.get(this.baseURL + 'terrains/');
  }
  delete(id: string): Observable<any> {
    return this.http.delete(this.baseURL + 'terrains/' + id);
  }

  add(
    sport: number,
    address: string,
    surface: number,
    price: number,
    description: string,
    image: string,
    available: boolean
  ): Observable<any> {
    return this.http.post(this.baseURL + 'terrains', {
      sport: sport,
      address: address,
      surface: surface,
      price: price,
      description: description,
      image: image,
      available: available,
    });
  }
}
