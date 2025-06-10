import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Products } from '../products/products';
import { Iproducts } from '../../Models/iproducts';

@Component({
  selector: 'app-product-parent',
  imports: [FormsModule,Products],
  templateUrl: './product-parent.html',
  styleUrl: './product-parent.css'
})
export class ProductParent {
// FilterByName:string=''
// FilterByName:string|undefined
// FilterByName:string|null=null
FilterByNameINParent!:string   //non null assertion
prp:string="0000000000000"
productsInParent:Iproducts[]=[]
addToCartInParent(prd:Iproducts){
  console.log("parent",prd);
//  this.productsInParent.push(prd)
  // console.log(arr);
  // console.log(this.productsInParent);
  let obj=this.productsInParent.find((prdInObj)=>prdInObj.id==prd.id)
  if(obj){
obj.productQuantity++
// console.log(obj.productQuantity++);

  }else{
    this.productsInParent.push({...prd,productQuantity:1})  //reference value
  }
  console.log(this.productsInParent);
  
}


}
