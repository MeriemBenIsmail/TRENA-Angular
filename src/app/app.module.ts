import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TerrainsComponent } from './pages/terrains/terrains.component';
import { CoachesComponent } from './pages/coaches/coaches.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './pages/admin/sidenav/sidenav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminHeaderComponent } from './pages/admin/admin-header/admin-header.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { CardComponent } from './components/home/card/card.component';
import { TerrainCardComponent } from './components/Terrain/terrain-card/terrain-card.component';
import { TerrainsSliderComponent } from './components/home/terrains-slider/terrains-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TerrainsComponent,
    CoachesComponent,
    LoginComponent,
    RegistrationComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    AdminHeaderComponent,
    HeroComponent,
    AboutUsComponent,
    CardComponent,
    TerrainCardComponent,
    TerrainsSliderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
