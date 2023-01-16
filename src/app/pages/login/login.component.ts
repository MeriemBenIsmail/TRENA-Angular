import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    this.authService.getProfile(token).subscribe(
      (response) => {
        if (response) {
          this.router.navigate(['/']);
        }
      },
      (error) => {}
    );
  }
}
