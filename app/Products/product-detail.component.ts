import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from './IProduct';

@Component({
    templateUrl: 'app/Products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{

    
    product:IProduct;

    constructor(private _route : ActivatedRoute){}

    // productId:int = 
   pageTitle:string = 'producy Detail page';

   ngOnInit():void{
     let id = +this._route.snapshot.params['id'];
     this.pageTitle += `:${id}`;
   }

}