import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  // mode : 1 = terrain , 2 = coaches , 3= reservations

  header: string = '';
  @Input() mode: string = 'Terrains Sportifs';
  constructor() {}

  ngOnInit(): void {}
}
