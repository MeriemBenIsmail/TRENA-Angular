import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerrainsComponent } from './pages/terrains/terrains.component';
import { CoachesComponent } from './pages/coaches/coaches.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'terrains', component: TerrainsComponent },
  { path: 'coaches', component: CoachesComponent },
  { path: 'connexion', component: LoginComponent },
  { path: 'inscription', component: RegistrationComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
