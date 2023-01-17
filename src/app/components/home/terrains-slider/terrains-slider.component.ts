import { Component, OnInit , ViewChild } from '@angular/core';
import terrains  from "../../../data/Terrains.json";
import { Router } from '@angular/router';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-terrains-slider',
  templateUrl: './terrains-slider.component.html',
  styleUrls: ['./terrains-slider.component.css'],
	
})
export class TerrainsSliderComponent implements OnInit {
  terrains = terrains;
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
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}
  setModalIsOpen() {
    this.modalIsOpen = !this.modalIsOpen;
  }
  constructor(private router: Router) { }
  navigateToTerrains() {
    const link = ['terrains'];
    this.router.navigate(link);
    }
  ngOnInit(): void {
  }

}
