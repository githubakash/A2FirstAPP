import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  
import {HttpModule} from '@angular/http';  // for http service
import {RouterModule} from '@angular/router';  // for routing

import { AppComponent }  from './app.component';
//import {ProductListComponent} from './Products/product-list.component';
//import {ProductDetailComponent} from './Products/product-detail.component';
import {WelcomeComponent} from './Home/welcome.component';
//import { ProductFilterPipe } from './shared/pipes/product-filter.pipe';
//import {StarComponent} from './shared/star.component';
import {ProductModule} from './Products/product.module';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
   
        {path:'welcome',component:WelcomeComponent},
        {path:'', redirectTo:'welcome',pathMatch:'full'},
        {path:'**', redirectTo:'welcome',pathMatch:'full'},

    ]),
     //{useHash:true}
     ProductModule
     ],
  declarations: [ 
    AppComponent,
 // ProductListComponent,
 // StarComponent,
 // ProductFilterPipe,
  //ProductDetailComponent,
  WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
