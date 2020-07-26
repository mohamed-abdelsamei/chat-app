import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpParams
} from '@angular/common/http';
import { Network } from '@ionic-native/network/ngx';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'http://localhost:3000/api';
  lang: any;
  constructor(
    public http: HttpClient,
    private network: Network,

  ) {
    console.log('Hello ApiService Provider');
  }
  private services = {
    login: {
      url: '/user/login',
      type: 'POST'
    },
    register: {
      url: '/user/register',
      type: 'POST'
    },

  };
  async send(serviceName: any, options: any): Promise<any> {
    const networkState = this.network.type;
    if (networkState === 'NONE') {

      console.log('no connection');
      return;
    } else {
      console.log('networkState', networkState);
      let service = Object.assign({}, this.services[serviceName]);
      let option: string, afterReplace: string, v: any;
      afterReplace = '';
      // tslint:disable-next-line: forin
      for (option in options) {
        v = options[option];
        afterReplace = service.url.replace(
          new RegExp('{' + option + '}', 'm'),
          v
        );
        if (service.url !== afterReplace) {
          delete options[option];
          service.url = afterReplace;
        }
      }
      let ss = this.get(service);
      const headers = {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json'
      };
      const lang = localStorage.getItem('language') || 'en';
      const token = localStorage.getItem('token');
      if (lang) {
        headers['accept-language'] = lang;
      }
      if (token) {
        // tslint:disable-next-line: no-string-literal
        headers['authorization'] = `Bearer ${token}`;
      }
      if (ss) {
        return this.http
          .request(
            new HttpRequest(ss.type, ss.url, ss.type !== 'GET' ? options : {}, {
              headers: new HttpHeaders({
                ...headers
              }),
              params: new HttpParams({ fromObject: ss.type === 'GET' ? { ...options, lang } : { lang } })
            })
          )
          .pipe(map((res: any) => {
            ss = null;
            service = null;
            options = null;
            return res.body;
          }))
          .toPromise();
      }
    }
  }

  private get(service: { url: string; type: any; }) {
    return { url: this.url + service.url, type: service.type };
  }
}
