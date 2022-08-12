import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './Products';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Products[], filterText?:string): Products[]{
    
    filterText=filterText?filterText!.toLocaleLowerCase():null

    return filterText?value.filter((p:Products)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
    
  }

}
