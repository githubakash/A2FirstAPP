import {NgModule} from '@angular/core';
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import { ProductFilterPipe } from '../shared/pipes/product-filter.pipe';

import {SharedModule} from './../shared/shared.module'
import {HttpModule} from '@angular/http';  // for http service
import {RouterModule} from '@angular/router';  // for routing

import {ProductService} from './product.service';

@NgModule({
 declarations:[
      ProductListComponent,
    ProductFilterPipe,
  ProductDetailComponent,
 ],
 imports:[
  SharedModule,
    HttpModule,
    RouterModule.forChild([
           {path:'productList',component:ProductListComponent},
      {path:'productDetail/:id',component:ProductDetailComponent}
    ])
 ],
 providers:[
  ProductService
 ]

})
export class ProductModule{

}