import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleEnum } from 'src/app/enums/role-enum';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  links: SidebarLink[] = [];
  private userProfileRoles = [
    RoleEnum.Admin,
    RoleEnum.Manager,
    RoleEnum.Regular,
  ];
  private managerProfileRoles = [RoleEnum.Manager, RoleEnum.Admin];
  private adminProfileRoles = [RoleEnum.Admin];

  constructor(private userStore: UserStoreService, public router: Router) {
    this.userStore.user$.subscribe((u) => {
      this.links = [
        {
          path: '',
          name: 'Comments',
          display: true,
        },
        {
          path: 'user',
          name: 'User profile',
          display: this.userProfileRoles.includes(u?.role),
        },
        {
          path: 'manager',
          name: 'Manager dashboard',
          display: this.managerProfileRoles.includes(u?.role),
        },
        {
          path: 'admin',
          name: 'Admin dashboard',
          display: this.adminProfileRoles.includes(u?.role),
        },
      ];
    });
  }

  ngOnInit(): void {}
}

interface SidebarLink {
  path: string;
  name: string;
  display: boolean;
}
