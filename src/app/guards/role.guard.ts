import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {
  catchError,
  filter,
  map,
  Observable,
  of,
  take,
  takeUntil,
  timeout,
  timer,
} from 'rxjs';
import { RoleEnum } from '../enums/role-enum';
import { UserStoreService } from '../services/user-store.service';
import { VulnerabilityService } from '../services/vulnerability.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private userStore: UserStoreService,
    private vulnService: VulnerabilityService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.vulnService.vulnerable) {
      return true;
    }
    const allowedRoles: RoleEnum[] = route.data['roles'];

    return this.userStore.user$.pipe(
      takeUntil(timer(3000)),
      timeout({ each: 1500 }),
      filter((user) => !!user),
      take(1),
      map((user) => {
        if (allowedRoles.includes(user.role)) {
          return true;
        } else {
          this.router.navigate(['unauthorized']);
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(['unauthorized']);
        return of();
      })
    );
  }
}
