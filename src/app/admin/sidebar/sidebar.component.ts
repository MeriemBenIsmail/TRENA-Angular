import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  modeValue: string = 'Terrains Sportifs';

  @Output() mode = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  terrain() {
    this.modeValue = 'Terrains Sportifs';
    this.mode.emit(this.modeValue);
  }
  coach() {
    this.modeValue = 'Coaches Sportifs';
    this.mode.emit(this.modeValue);
  }
  reservation() {
    this.modeValue = 'Reservations Des Terrains';
    this.mode.emit(this.modeValue);
  }
  users() {
    this.modeValue = 'Utilisateurs';
    this.mode.emit(this.modeValue);
  }
  logout() {
    localStorage.clear();
    window.location.reload();
  }
}
