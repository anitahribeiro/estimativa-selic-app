import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfigService {

	private actionUrl: string;

  constructor(private http: HttpClient) {
  	this.actionUrl = 'http://localhost:8080/api/v1/selic';
   }

   public get<T>(year, month): Observable<T> {
        
      var endpoint = '/estimativas';
      var params = '?ano=' + year;
      if (month != 0) {
          params += '&mes=' + month;
      }
      return this.http.get<T>(this.actionUrl + endpoint + params);
    }

    public getHistory<T>(): Observable<T> {
        var endpoint = '/historico';
        return this.http.get<T>(this.actionUrl + endpoint);
    }

    public getAverage<T>(): Observable<T> {
        var endpoint = '/media';
        return this.http.get<T>(this.actionUrl + endpoint);
    }

    public getCumulative<T>(): Observable<T> {
        var endpoint = '/acumulado';
        return this.http.get<T>(this.actionUrl + endpoint);
    }

}

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req);
    }
}