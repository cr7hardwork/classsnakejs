import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '@schemas/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userData$: BehaviorSubject<IUser | null> =
    new BehaviorSubject<IUser | null>(null);
  private userLoggedInData$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  get user$(): BehaviorSubject<IUser | null> {
    return this.userData$;
  }

  get userLoggedIn$(): BehaviorSubject<boolean> {
    return this.userLoggedInData$;
  }

  public setUser(user: IUser): void {
    this.userData$?.next(user);
    this.userLoggedInData$.next(true);
  }

  public clearUserData(): void {
    this.userLoggedInData$.next(false);
    this.userData$.next(null);
  }
}
