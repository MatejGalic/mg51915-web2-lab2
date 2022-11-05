import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss'],
})
export class AuthButtonComponent implements OnInit {
  public isLoggedIn$ = this.authService.isAuthenticated$;
  public isNotLoggedIn$ = this.authService.isAuthenticated$.pipe(
    map((e) => !e)
  );

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  public login() {
    this.authService.loginWithRedirect();
  }
  public logout() {
    this.authService.logout({ returnTo: environment.returnUrl });
  }
}
