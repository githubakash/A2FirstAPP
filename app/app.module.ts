import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {productListComponent} from './Products/product-list-component';

@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,productListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
