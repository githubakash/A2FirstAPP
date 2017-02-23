import {Component} from '@angular/core';
import {IProduct} from './IProduct';

@Component({
    templateUrl: 'app/Products/product-detail.component.html'
})
export class ProductDetailComponent{

    pageTitle:string = 'producy Detail page';
    product:IProduct;

}