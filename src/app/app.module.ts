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
