import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:"productFilter"
})
export class ProductFilterPipe implements PipeTransform{
 
    transform(value:string[], filterString:string):any{
        return value.filter(x => x.productName.toLocaleLowerCase().indexOf(filterString) >= 0);

    }
}