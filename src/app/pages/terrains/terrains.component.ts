import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-terrains',
  templateUrl: './terrains.component.html',
  styleUrls: ['./terrains.component.css'],
})
export class TerrainsComponent implements OnInit {
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
}
