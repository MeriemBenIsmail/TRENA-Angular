import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-terrain-card',
  templateUrl: './terrain-card.component.html',
  styleUrls: ['./terrain-card.component.css'],
})
export class TerrainCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {console.log(this.image)}

  @Input() setModalIsOpen: any;
  @Input() id: any;
  @Input() sport: string | undefined;
  @Input() address: string | undefined;
  @Input() image: string | undefined;
  @Input() surface: any;
  @Input() type: any;
  @Input() available: any;
  @Input() description: any;
  @Input() reviews: any;

  bannerIsOpen: boolean = false;

  setBannerIsOpen(val: boolean) {
    this.bannerIsOpen = val;
  }
}
