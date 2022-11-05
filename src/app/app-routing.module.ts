import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleEnum } from './enums/role-enum';
import { RoleGuard } from './guards/role.guard';
import { AdminOverviewComponent } from './pages/admin-overview/admin-overview.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  {
    path: 'users',
    component: AdminOverviewComponent,
    canActivate: [RoleGuard],
    data: { roles: [RoleEnum.Admin, RoleEnum.Manager] },
  },
  {
    path: 'managers',
    component: AdminOverviewComponent,
    canActivate: [RoleGuard],
    data: { roles: [RoleEnum.Admin] },
  },
  {
    path: 'admins',
    component: AdminOverviewComponent,
    canActivate: [RoleGuard],
    data: { roles: [RoleEnum.Admin] },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
