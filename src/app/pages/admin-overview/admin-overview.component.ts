import { Component, OnInit } from '@angular/core';
import { RoleEnum } from 'src/app/enums/role-enum';
import { UserProfile } from 'src/app/models/user-profile';
import { DbContextMockService } from 'src/app/services/db-context-mock.service';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.scss'],
})
export class AdminOverviewComponent implements OnInit {
  users: UserProfile[] = this.dbContext.allUsers;
  roleEnum = RoleEnum;
  constructor(private dbContext: DbContextMockService) {}

  ngOnInit(): void {}
}
