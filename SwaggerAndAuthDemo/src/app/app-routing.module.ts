import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopsComponent } from './shops/shops.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuardGuard } from './authentication-guard.guard';
import { AvailableRoutes } from './AvailableRoutes';

const routes: Routes = [
  {
    path: 'shops',
    component: ShopsComponent,
    canActivate: [AuthenticationGuardGuard],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {path: '',  redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

