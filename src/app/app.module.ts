import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XssComponent } from './components/xss/xss.component';

import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { VulnerabilityButtonComponent } from './components/vulnerability-button/vulnerability-button.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AdminOverviewComponent } from './pages/admin-overview/admin-overview.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { ManagerOverviewComponent } from './pages/manager-overview/manager-overview.component';
import { UserOverviewComponent } from './pages/user-overview/user-overview.component';

@NgModule({
  declarations: [AppComponent, XssComponent, AuthButtonComponent, VulnerabilityButtonComponent, UserProfileComponent, HomepageComponent, AdminOverviewComponent, UnauthorizedComponent, ManagerOverviewComponent, UserOverviewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-0o15xqyhb5vt8cs0.us.auth0.com',
      clientId: 'ayTCNxSGPl5z0p7AY6yKj9D4oYb3yiep',
      cacheLocation: 'localstorage'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
