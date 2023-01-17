import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loading: boolean = false;
  errorMessage: string = '';
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(formulaire: NgForm) {
    const { email, password } = formulaire.form.value;
    this.loading = true;
    this.authService.login(email, password).subscribe(
      (response) => {
        if (response) localStorage.setItem('token', response.token);
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 3000);
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
        this.errorMessage = error.error.message;
      }
    );
  }
}
