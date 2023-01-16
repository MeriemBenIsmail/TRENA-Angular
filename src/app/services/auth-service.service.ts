import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  baseURL: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRepos(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + userName + '/repos');
  }
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.baseURL + 'auth/register', {
      name: username,
      email: email,
      password: password,
      role: 'user',
    });
  }
  login(email: string, password: string): Observable<any> {
    return this.http.post(this.baseURL + 'auth/login', {
      email: email,
      password: password,
    });
  }
  getProfile(token: string | any): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Authorization', `Bearer ${token}`);
    return this.http.get(this.baseURL + 'user/profile', { headers });
  }
}
