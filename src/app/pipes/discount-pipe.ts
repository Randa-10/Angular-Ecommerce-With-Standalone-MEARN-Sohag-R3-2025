import { Pipe, PipeTransform } from '@angular/core';
 //class decorator
@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {
  transform(value:number,disc:number):number {
    let discValue=disc/100   //0.2
    let valMul=value*discValue   //==>

    let final_value=value-valMul
    
   return final_value
  }



}
