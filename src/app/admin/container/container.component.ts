import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  // mode : 1 = terrain , 2 = coaches , 3= reservations

  addVisible: boolean = false;
  @Input() mode: string = 'Terrains Sportifs';
  constructor() {}

  ngOnInit(): void {}
  addAction() {
    this.addVisible = true;
  }
  showValue(value: any) {
    this.addVisible = value;
  }
}
