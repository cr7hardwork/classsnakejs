import { Injectable } from '@angular/core';
import { BaseDataService } from '@core/services/base.data.service';
import { Observable } from 'rxjs';
import { IUser } from '@schemas/user';

@Injectable({ providedIn: 'root' })
export class UserDataService extends BaseDataService {
  public getUserInfo(): Observable<IUser> {
    return this.get('/authentication/user-info');
  }
}
