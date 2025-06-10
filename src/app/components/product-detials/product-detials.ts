import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  viewChild,
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { ProductsStatic } from '../../service/products-static';
import { Iproducts } from '../../Models/iproducts';
import { Subscription } from 'rxjs';
import { ProductsWitApi } from '../../service/products-wit-api';

@Component({
  selector: 'app-product-detials',
  imports: [RouterModule],
  templateUrl: './product-detials.html',
  styleUrl: './product-detials.css',
})
export class ProductDetials implements OnInit, OnDestroy {
  //1-get id from url
  currentId: number = 0;
  product: Iproducts | undefined;
  //Day6
  allIds!: number[];
  myIndex!: number;

  // @viewChild('id') prop!:ElementRef
  //elem , sub
  sub!: Subscription;
  //built in services
  constructor(
    //depenancy injection ,
    private active: ActivatedRoute,
    private prdService: ProductsStatic,
    private route: Router
    ,private prdApI:ProductsWitApi,
    private cdr:ChangeDetectorRef
  ) {
    // // this.currentId=Number(this.active.snapshot.paramMap.get('idFromdB'))
    // //observable route
    // //Day6
    // this.active.paramMap.subscribe((data) => {
    //   this.currentId = Number(data.get('idFromdB'));
    //   // console.log(data);
    //   console.log(this.currentId);
    //   //3 send id to method
    //   let obj = this.prdService.getProductById(this.currentId);
    //   console.log(obj);
    //   if (obj) {
    //     this.product = obj;
    //   } else {
    //     this.route.navigate(['**']);
    //   }
    // });
    // //Day6
    // this.allIds = this.prdService.getAllIds();
    // console.log(this.allIds);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  // ngAfterViewInit(): void {
  // this.prop.nativeElement
  // }
  ngOnInit(): void {
    // this.currentId=Number(this.active.snapshot.paramMap.get('idFromdB'))
    //observable route
    //Day6
    //  this.sub= this.active.paramMap.subscribe((data) => {
    //     this.currentId = Number(data.get('idFromdB'));
    //     // console.log(data);
    //     console.log(this.currentId);
    //     //3 send id to method
    //     let obj = this.prdService.getProductById(this.currentId);
    //     console.log(obj);
    //     if (obj) {
    //       this.product = obj;
    //     } else {
    //       this.route.navigate(['**']);
    //     }
    //   });

    this.active.paramMap.subscribe((data) => {
      this.currentId = Number(data.get('idFromdB'));
      // console.log(data);
      console.log(this.currentId);
      //3 send id to method
      // let obj = this.prdService.getProductById(this.currentId);
      // let obj = this.prdService.getProductById(this.currentId);
this.prdApI.getPrdById(this.currentId).subscribe((data)=>{
  console.log(data);
      if (data) {
        this.product = data;
     this.cdr.detectChanges()
      } else {
        this.route.navigate(['**']);
      }
})

    
    });
    //Day6
    // this.allIds = this.prdService.getAllIds(); //[id1,]
    //Day7
    this.prdApI.getAllIds().subscribe((data)=>{
      console.log(data);
      this.allIds=data.map((id)=>Number(id))
      console.log(this.allIds);
      
    })
    // console.log(this.allIds);
  }
  //Day6
  prevFunc() {
    //[4]
    //current index
    this.myIndex = this.allIds.indexOf(this.currentId);
    console.log(this.myIndex);
    if (this.myIndex > 0) {
    //arr[--index]
    this.route.navigate(['products_parent/', this.allIds[this.myIndex-1]]);
    }
  }
  nextFunc() {
    //current index
    this.myIndex = this.allIds.indexOf(this.currentId);
    console.log(this.myIndex);
    //arr[--index]
    if (this.myIndex < this.allIds.length - 1) {
    this.route.navigate(['products_parent/', this.allIds[this.myIndex+1]]);
  }
}
}
