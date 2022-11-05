import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/models/user-profile';
import { DbContextMockService } from 'src/app/services/db-context-mock.service';

@Component({
  selector: 'app-manager-overview',
  templateUrl: './manager-overview.component.html',
  styleUrls: ['./manager-overview.component.scss'],
})
export class ManagerOverviewComponent implements OnInit {
  users: UserProfile[] = this.dbContext.regularUsers;

  constructor(private dbContext: DbContextMockService) {}

  ngOnInit(): void {}
}
