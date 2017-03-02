import { Injectable } from '@angular/core';
import {
    Http, Headers, Request,
    RequestOptions, RequestOptionsArgs,
    RequestMethod, Response
} from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

import { environment } from '../../../environments/environment';
import { EnvironmentsEnum } from '../enums/EnvironmentsEnum';

@Injectable()
export class ApiService {
    httpError: Subject<Error> = new Subject();

    private url;

    constructor(private http: Http) {
        const deployEnvironment: EnvironmentsEnum = EnvironmentsEnum[ environment.appSettings.environment ].toLowerCase();

        let urlEnvironmentVariable;
        switch (deployEnvironment) {
            case EnvironmentsEnum.Test:
                urlEnvironmentVariable = 'test';
                break;
            case EnvironmentsEnum.Stage:
                urlEnvironmentVariable = 'stage';
                break;
            case EnvironmentsEnum.Production:
                urlEnvironmentVariable = 'prod';
                break;
            default:
                urlEnvironmentVariable = 'dev';
        }

        //this.url = `https://api${urlEnvironmentVariable}.uhcnv.com/icm/api/v1/`;
         this.url = `http://localhost:62800/api/v1/`;
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.requestHelper({ url: url, method: RequestMethod.Get }, options);
    }

    post(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.requestHelper({ url: url, method: RequestMethod.Post }, options);
    }

    put(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.requestHelper({ url: url, method: RequestMethod.Put }, options);
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.requestHelper({ url: url, method: RequestMethod.Delete }, options);
    }

    private request(apiRequest: Request): Observable<Response> {
        let contentType: string;

        apiRequest.headers = new Headers(apiRequest.headers);
        contentType = apiRequest.headers.get('Content-Type');
        apiRequest.url = this.url + apiRequest.url;
        apiRequest.headers.set('Content-Type', contentType);
        // apiRequest.headers.set('Authorization', `Bearer ${this.config.getToken()}`);

        return this.http.request(apiRequest);
    }

    private requestHelper(requestArgs: RequestOptionsArgs, additionalOptions: RequestOptionsArgs): Observable<any> {
        let options: RequestOptions = new RequestOptions(requestArgs);

        if (additionalOptions) {
            options = options.merge(additionalOptions);
        }

        return this.request(new Request(options))
            .map((res: Response) => res.json())
            .catch(this.onHttpError.bind(this));
    }

    private onHttpError(error: any): Observable<Response> {
        if (error.status === 500 || error.status === 400) {
            this.httpError.next(error);
        }

        return Observable.throw(error);
    }
}