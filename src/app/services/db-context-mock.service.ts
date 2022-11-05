import { Injectable } from '@angular/core';
import { RoleEnum } from '../enums/role-enum';
import { UserProfile } from '../models/user-profile';

@Injectable({
  providedIn: 'root',
})
export class DbContextMockService {
  private users: UserProfile[] = [
    {
      fullName: 'Luka Bulić',
      email: 'luka.bulic@antena.hr',
      role: RoleEnum.Regular,
    },
    {
      fullName: 'Ivan Horvat',
      email: 'ihorvat.web2@dispostable.com',
      role: RoleEnum.Regular,
    },
    {
      fullName: 'Dwayne Johnson',
      email: 'rock@hollywood.com',
      role: RoleEnum.Regular,
    },
    {
      fullName: 'Natali Dizdar',
      email: 'natali@gmail.com',
      role: RoleEnum.Regular,
    },
    {
      fullName: 'Mišo Kovač',
      email: 'mkovac@gmail.com',
      role: RoleEnum.Regular,
    },
    {
      fullName: 'Zoran Šprajc',
      email: 'sprajc@rtl.eu',
      role: RoleEnum.Manager,
    },
    {
      fullName: 'Matej Galić',
      email: 'matey.galic99@gmail.com',
      role: RoleEnum.Manager,
    },
    {
      fullName: 'Marija Jularić',
      email: 'marijaaa.jul@dispostable.com',
      role: RoleEnum.Manager,
    },
    {
      fullName: 'Admin User',
      email: 'admin-mg51915@dispostable.com',
      role: RoleEnum.Admin,
    },
    {
      fullName: 'Super Admin',
      email: 'super@admin.com',
      role: RoleEnum.Admin,
    },
  ];

  constructor() {}
}
