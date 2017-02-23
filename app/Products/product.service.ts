import {IProduct} from './IProduct';
import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService{

     private _url:string = 'api/products/products.json';

     constructor(private _http:Http){


     } 
    GetProducts():Observable<IProduct[]>{
      return this._http.get(this._url)
                    .map((response:Response) => <IProduct[]>response.json())
                    .do(data => console.log('All: ' + JSON.stringify(data)))
                    .catch(this.HandleError);

    }

    private HandleError(error:Response){

        console.error(error);
        return Observable.throw(error.json() || 'server error');
        
    }
}