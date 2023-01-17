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
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './pages/admin/sidenav/sidenav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminHeaderComponent } from './pages/admin/admin-header/admin-header.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { TitleComponent } from './components/title/title.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { StepsTerrainsComponent } from './components/steps-terrains/steps-terrains.component';
import { CatalogueTerrainsComponent } from './components/catalogue-terrains/catalogue-terrains.component';
import { FilterTerrainsComponent } from './components/filter-terrains/filter-terrains.component';


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
    LayoutComponent,
    TitleComponent,
    LoginFormComponent,
    SignUpFormComponent,
    AuthFormComponent,
    LoaderComponent,
    StepsTerrainsComponent,
    CatalogueTerrainsComponent,
    FilterTerrainsComponent,
  ],
  imports: [
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
