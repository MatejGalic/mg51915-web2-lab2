import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XssComponent } from './components/xss/xss.component';

import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { VulnerabilityButtonComponent } from './components/vulnerability-button/vulnerability-button.component';

@NgModule({
  declarations: [AppComponent, XssComponent, AuthButtonComponent, VulnerabilityButtonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-0o15xqyhb5vt8cs0.us.auth0.com',
      clientId: 'ayTCNxSGPl5z0p7AY6yKj9D4oYb3yiep',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
