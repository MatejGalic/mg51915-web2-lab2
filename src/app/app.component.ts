import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoleEnum } from './enums/role-enum';
import { UserProfile } from './models/user-profile';
import { UserStoreService } from './services/user-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mg51915-web2-lab2';

  constructor(
    private authService: AuthService,
    private userStore: UserStoreService
  ) {}

  ngOnInit(): void {
    const admins = environment.adminEmails;
    const managers = environment.managerEmails;
    this.authService.user$.pipe(filter((u) => !!u)).subscribe((user) => {
      const model: UserProfile = {
        fullName: user.name,
        firstName: user.given_name,
        lastName: user.family_name,
        email: user.email,
        role: admins.includes(user.email)
          ? RoleEnum.Admin
          : managers.includes(user.email)
          ? RoleEnum.Manager
          : RoleEnum.Regular,
      };
      this.userStore.user = model;
    });
  }
}
