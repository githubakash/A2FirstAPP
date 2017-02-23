import { Injectable } from '@angular/core';
import { Response, RequestOptionsArgs } from '@angular/http';
import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class ApiServiceMock {
    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return Observable.create((observer: Observer<any>) => {
            observer.next({});
        });
    }

    post(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return Observable.create((observer: Observer<any>) => {
            observer.next({});
        });
    }

    put(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return Observable.create((observer: Observer<any>) => {
            observer.next({});
        });
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return Observable.create((observer: Observer<any>) => {
            observer.next({});
        });
    }
}