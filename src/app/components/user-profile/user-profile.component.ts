import { Component, OnInit } from '@angular/core';
import { RoleEnum } from 'src/app/enums/role-enum';
import { UserProfile } from 'src/app/models/user-profile';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public user: UserProfile;
  public roleEnum = RoleEnum;

  constructor(private userStore: UserStoreService) {}

  ngOnInit(): void {
    this.userStore.user$.subscribe((user) => (this.user = user));
  }
}
