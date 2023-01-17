import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD

=======
>>>>>>> 6d93322adc2289a33a1fea07bdd69f70de752718
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor(private router: Router) {}

<<<<<<< HEAD
  ngOnInit(): void {}
  goToTerrain() {
    this.router.navigate(['/terrains']);
=======
  constructor(private router: Router) { }
  goToTerrain() {
    const link = ['terrains'];
    this.router.navigate(link);
    }
  ngOnInit(): void {
>>>>>>> 6d93322adc2289a33a1fea07bdd69f70de752718
  }
}
