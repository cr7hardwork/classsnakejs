import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  get baseUrl(): string {
    return environment.BASE_API_URL;
  }

  get appBaseUrl(): string {
    return environment.BASE_API_URL || window.location.host;
  }
}
