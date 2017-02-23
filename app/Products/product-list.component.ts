import {Component , OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {IProduct} from './IProduct';
@Component({
    selector : 'product-list',
    templateUrl: 'app/Products/product-list.component.html',
    styleUrls : ['app/Products/product-list.component.css']
})
export class ProductListComponent implements OnInit{

     title:string = "Product List sold by Akash";
     imageWidth:number = 50;
     imageMargin:number = 2;
     imageVisible = false;
     filterBy:string = 'cart';
       productlist:IProduct[];

       error:string='';
constructor(private _productService: ProductService){
   
}

   

    toggleImage():void{

        this.imageVisible = !this.imageVisible;
    }

//ngOnItit is the place to call the service and get data for component template
    ngOnInit():void{
   this._productService.GetProducts().subscribe(
         products => this.productlist = products,
         error => this.error = <any>error
         //completed => console.log('method completed')
   );
    }

    onRatingClicked(message:string):void{
        console.log('container got the payload of event from its nested component - ' + message)
    }
}