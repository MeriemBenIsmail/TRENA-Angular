import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  mode: string = 'Terrains Sportifs';
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    this.authService.getProfile(token).subscribe(
      (response) => {},
      (error) => {
        if (error.error.statusCode === 401) {
          this.router.navigate(['/connexion']);
        }
      }
    );
  }

  showValue(value: string) {
    this.mode = value;
  }
}
