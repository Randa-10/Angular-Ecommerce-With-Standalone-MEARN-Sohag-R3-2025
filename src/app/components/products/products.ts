import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  output,
} from '@angular/core';
import { Iproducts } from '../../Models/iproducts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImgStyle } from '../../directives/img-style';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { ProductsStatic } from '../../service/products-static';
import { RouterModule } from '@angular/router';
import { ProductsWitApi } from '../../service/products-wit-api';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule, ImgStyle, DiscountPipe, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  productList!: Iproducts[];
  toggleImg: boolean = true;
  clientName: string = 'ahmed';
  TotalOrderPrice: number = 0;
  userName: string = 'Ali';
  date: Date = new Date();
  // FilterByName:string=''/
  constructor(
    private productStaticService: ProductsStatic,
    private productApiService: ProductsWitApi,
    private cdr:ChangeDetectorRef
    

  ) {
    // initialize data
    // this.productList={
    //   productId:1,
    //   productName:'er 25 W Super Fast Charger Anker Ace',
    //   productImgUrl:"https://f.nooncdn.com/p/pnsku/N70004190V/45/_/1697035033/e100f912-2fac-4cb8-bfc2-31922ecd8804.jpg?width=800"
    // ,
    // productPrice:100,
    // productQuantity:1000,
    // categoryId:1
    // }
    // this.productList = [
    //   {
    //     productId: 1,
    //     productName: 'Apple iPhone 15',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 0,
    //     productPrice: 200,
    //     categoryId: 1,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 2,
    //     productName: 'Samsung Galaxy frontend ',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70030440V/45/_/1702699238/6ae73ece-d29e-4a81-ba41-850055d0937f.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryId: 2,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 3,
    //     productName: 'Apple iPhone 13',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/v1686205682/N50838986A_1.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 0,
    //     productPrice: 200,
    //     categoryId: 1,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 4,
    //     productName: 'Samsung Galaxy ',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 1,
    //     productPrice: 200,
    //     categoryId: 2,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 5,
    //     productName: 'OPPO Reno 12F 5G ',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70093960V/45/_/1721457134/54d5b998-81c6-4fdd-9b0e-eca01f6979b7.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryId: 2,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 6,
    //     productName: 'iphone',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryId: 2,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 7,
    //     productName: 'iphone',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70085224V/45/_/1721894952/91270228-e30b-484e-ae2a-3e746b194bb2.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryId: 3,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 8,
    //     productName: 'Reno 11F',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70063654V/45/_/1713704986/b06f55f9-03d1-4021-8b06-da23bc27e60d.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryId: 1,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 9,
    //     productName: 'iphone',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryId: 1,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    // ];
    // this.productsAfterSearch =this.productStaticService.getAllProducts()
    // this.productApiService.getAllProducts().subscribe({
    //   next:()=>{
    //   },complete:()=>{
    //   },
    //   error:()=>{
    //   }
    // })
  }

  ngOnInit(): void {
    this.productApiService.getAllProducts().subscribe({
      next:(data) => {
        this.productsAfterSearch = data;
        console.log(this.productsAfterSearch);
        this.cdr.detectChanges()
      },
      error: (err) => {
        console.log(err);
      },
    });
      // console.log(this.productsAfterSearch);
    //  this.productsAfterSearch=this.productsAfterSearch2
    //  this.productsAfterSearch=this.productList
  }

  toggle() {
    this.toggleImg = !this.toggleImg;
  }

  // day3
  totalPrice(qty: string, price: number) {
    this.TotalOrderPrice += +qty * price;
  }

  //set , get

  productsAfterSearch: Iproducts[] | undefined;
  @Input() set FilterByNameInChild(setValue: string) {
    //as func

    // console.log(setValue);

    // console.log( this.doSearch(setValue));
    // this.productsAfterSearch = this.doSearch(setValue);
    // Day5
    // this.productsAfterSearch = this.productStaticService.doSearch(setValue);
    //Day6
    this.productApiService.getAllProducts().subscribe((data) => {
      let arrOfData = data.filter((prd) => 
        prd.productName.toLowerCase().includes(setValue)
      );
      this.productsAfterSearch = arrOfData;
    
     });
  }

  // doSearch(value: string): Iproducts[] {
  //   value = value.toLowerCase();
  //   return this.productList.filter((prd: Iproducts) =>
  //     prd.productName.toLowerCase().includes(value)
  //   );
  // }

  //day4
  //create event ts
  @Output() prdProperty: EventEmitter<Iproducts> =
    new EventEmitter<Iproducts>();
  addToCartInChild(prd: Iproducts) {
    // console.log(prd);

    this.prdProperty.emit(prd); //fire event
  }
}
