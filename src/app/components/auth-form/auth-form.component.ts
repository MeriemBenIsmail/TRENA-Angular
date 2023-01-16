import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
  public toggle: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleForm() {
    this.toggle = !this.toggle;
  }
}
