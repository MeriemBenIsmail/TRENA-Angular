import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  handleLogout() {
    localStorage.clear();
    this.router.navigate(['/connexion']);
  }
}
