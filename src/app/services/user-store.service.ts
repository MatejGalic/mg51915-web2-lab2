import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserProfile } from '../models/user-profile';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private _user: BehaviorSubject<UserProfile> = new BehaviorSubject(null);
  public user$: Observable<UserProfile> = this._user.asObservable();

  set user(val: UserProfile) {
    this._user.next(val);
  }

  get user(): UserProfile {
    return this._user.value;
  }

  constructor() {
    console.log(this._user);
  }
}
