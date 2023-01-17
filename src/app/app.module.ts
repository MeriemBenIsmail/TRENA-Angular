import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { TitleComponent } from './components/title/title.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { ContainerComponent } from './admin/container/container.component';
import { AdminButtonComponent } from './admin/admin-button/admin-button.component';
import { UsersComponent } from './admin/users/users.component';
import { AddFormComponent } from './admin/add-form/add-form.component';
import { AddTerrainFormComponent } from './admin/add-terrain-form/add-terrain-form.component';
import { AddCoachFormComponent } from './admin/add-coach-form/add-coach-form.component';
import { ReservationComponent } from './admin/reservation/reservation.component';
import { AdminTerrainComponent } from './admin/admin-terrain/admin-terrain.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { SingleTerrainComponent } from './pages/single-terrain/single-terrain.component';
import { TerrainHeroComponent } from './components/terrain-hero/terrain-hero.component';
import { BgHeaderComponent } from './shared/bg-header/bg-header.component';
import { AboutComponent } from './pages/about/about.component';
import { CatalogueTerrainsComponent } from './components/catalogue-terrains/catalogue-terrains.component';
import { FilterTerrainsComponent } from './components/filter-terrains/filter-terrains.component';
import { StepsTerrainsComponent } from './components/steps-terrains/steps-terrains.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { CardComponent } from './components/home/card/card.component';
import { TerrainsSliderComponent } from './components/home/terrains-slider/terrains-slider.component';
import { TerrainCardComponent } from './components/Terrain/terrain-card/terrain-card.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

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
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    LayoutComponent,
    TitleComponent,
    LoginFormComponent,
    SignUpFormComponent,
    AuthFormComponent,
    LoaderComponent,
    DashboardComponent,
    SidebarComponent,
    ContainerComponent,
    AdminButtonComponent,
    UsersComponent,
    AddFormComponent,
    AddTerrainFormComponent,
    AddCoachFormComponent,
    ReservationComponent,
    AdminTerrainComponent,
    DropdownComponent,
    SingleTerrainComponent,
    TerrainHeroComponent,
    BgHeaderComponent,
    AboutComponent,
    CatalogueTerrainsComponent,
    FilterTerrainsComponent,
    StepsTerrainsComponent,
    AboutUsComponent,
    CardComponent,
    TerrainsSliderComponent,
    TerrainCardComponent,
  ],
  imports: [
    NgbCarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
