import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { VulnerabilityButtonComponent } from './components/vulnerability-button/vulnerability-button.component';
import { XssComponent } from './components/xss/xss.component';
import { AdminOverviewComponent } from './pages/admin-overview/admin-overview.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ManagerOverviewComponent } from './pages/manager-overview/manager-overview.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { UserOverviewComponent } from './pages/user-overview/user-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    XssComponent,
    AuthButtonComponent,
    VulnerabilityButtonComponent,
    UserProfileComponent,
    HomepageComponent,
    AdminOverviewComponent,
    UnauthorizedComponent,
    ManagerOverviewComponent,
    UserOverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule.forRoot({
      domain: environment.domain,
      clientId: environment.clientId,
      cacheLocation: 'localstorage',
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
