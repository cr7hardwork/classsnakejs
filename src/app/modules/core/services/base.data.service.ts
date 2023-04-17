import { inject, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpContext,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { HttpRequestType } from '../../../constants/http-request-type';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

interface IRequestOptions {
  body?: any;
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  context?: HttpContext;
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType: 'arraybuffer' | 'json';
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BaseDataService {
  protected client: HttpClient;
  protected configService: ConfigService;

  constructor() {
    this.client = inject(HttpClient);
    this.configService = inject(ConfigService);
  }

  protected request(
    method: HttpRequestType,
    url: string,
    queryParams?: {
      [param: string]: string | number | boolean;
    },
    data?: object,
    httpOptions?: any
  ): Observable<any> {
    let options: IRequestOptions = {
      responseType: 'json',
    };
    if (queryParams) {
      options.params = queryParams;
    }
    if (data) {
      options.body = data;
    }
    if (httpOptions) {
      options = {
        ...options,
        ...httpOptions,
      };
    }
    return this.client.request(method, url, options);
  }

  protected get(url: string, queryParams?: any, endpoint?: string) {
    const requestUrl = this.formRequestUrl(url, endpoint);
    return this.request(HttpRequestType.GET, requestUrl, queryParams);
  }

  protected post(
    url: string,
    payload: any,
    params?: any,
    options?: any,
    endpoint?: string
  ): Observable<any> {
    const requestUrl = this.formRequestUrl(url, endpoint);
    if (params) {
      options = options ? { ...options, params } : { params };
    }
    return this.client.post(requestUrl, payload, options);
  }

  protected update(
    url: string,
    payload: any,
    options: any,
    endpoint?: string
  ): Observable<any> {
    const requestUrl = this.formRequestUrl(url, endpoint);
    return this.client.put(requestUrl, payload, options);
  }

  protected delete(
    url: string,
    options?: any,
    endpoint?: string
  ): Observable<any> {
    const requestUrl = this.formRequestUrl(url, endpoint);
    return this.client.delete(requestUrl, options);
  }

  private formRequestUrl(url: string, endpoint?: string): string {
    return endpoint ? endpoint + url : this.configService.baseUrl + url;
  }
}
