import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseURL: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  add(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.baseURL + 'user', {
      name: username,
      email: email,
      password: password,
      role: 'user',
    });
  }
  delete(email: string): Observable<any> {
    return this.http.delete(this.baseURL + 'user/'+email);
  }

  getUsers(): Observable<any> {
    return this.http.get(this.baseURL + 'user/');
  }
}
