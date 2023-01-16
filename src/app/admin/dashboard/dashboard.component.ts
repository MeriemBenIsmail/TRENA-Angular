import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  mode: string = 'Terrains Sportifs';
  constructor() {}

  ngOnInit(): void {}

  showValue(value: string) {
    this.mode = value;
  }
}
