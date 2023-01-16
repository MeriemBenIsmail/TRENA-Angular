import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  username: string = '';
  errorMessage: string = '';
  constructor(private authService: AuthServiceService) {}
  token: string | any;
  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
    this.token = localStorage.getItem('token');

    this.authService.getProfile(this.token).subscribe(
      (response) => {
        if (response) {
          this.username = response.name;
        }
      },
      (error) => {
        this.errorMessage = error.error.message;
      }
    );
  }

  scroll = (): void => {
    let scrollHeigth;

    if (window.innerWidth < 350) {
      scrollHeigth = 150;
    } else if (window.innerWidth < 500 && window.innerWidth > 350) {
      scrollHeigth = 250;
    } else if (window.innerWidth < 700 && window.innerWidth > 500) {
      scrollHeigth = 350;
    } else if (window.innerWidth < 1000 && window.innerWidth > 700) {
      scrollHeigth = 500;
    } else {
      scrollHeigth = 650;
    }

    if (window.scrollY >= scrollHeigth) {
      document.body.style.setProperty('--navbar-scroll', 'white');
      document.body.style.setProperty('--navbar-scroll-text', 'black');
      document.body.style.setProperty(
        '--navbar-scroll-shadow',
        '0px 6px 12px -5px #000000'
      );
    } else if (window.scrollY < scrollHeigth) {
      document.body.style.setProperty('--navbar-scroll', 'transparent');
      document.body.style.setProperty('--navbar-scroll-text', 'white');
      document.body.style.setProperty('--navbar-scroll-shadow', 'none');
    }
  };
}
