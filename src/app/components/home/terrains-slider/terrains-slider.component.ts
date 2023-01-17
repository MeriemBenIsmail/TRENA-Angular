import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { TerrainsService } from 'src/app/services/terrains.service';

@Component({
  selector: 'app-terrains-slider',
  templateUrl: './terrains-slider.component.html',
  styleUrls: ['./terrains-slider.component.css'],
})
export class TerrainsSliderComponent implements OnInit {
  terrains: any[] = [];
  errorMessage: string = '';
  bgImageClass = 'bg-image';
  modalIsOpen: boolean = false;

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
  setModalIsOpen() {
    this.modalIsOpen = !this.modalIsOpen;
  }
  constructor(
    private router: Router,
    private terrainsService: TerrainsService
  ) {}
  navigateToTerrains() {
    const link = ['terrains'];
    this.router.navigate(link);
  }
  ngOnInit(): void {
    this.terrainsService.getTerrains().subscribe(
      (response) => {
        this.terrains = response;
        this.terrains.map((terrain, id) => {
          if (terrain.sport === 1) {
            terrain.sport = 'football';
          } else if (terrain.sport === 2) {
            terrain.sport = 'basketball';
          } else if (terrain.sport === 3) {
            terrain.sport = 'volleyball';
          } else if (terrain.sport === 4) {
            terrain.sport = 'tennis';
          }
        });
      },
      (error) => {
        this.errorMessage = error;
        this.errorMessage = error.error.message;
      }
    );
  }
}
