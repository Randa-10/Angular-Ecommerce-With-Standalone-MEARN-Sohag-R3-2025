import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

//class decorator
@Directive({
  selector: '[appImgStyle]',
})
export class ImgStyle implements OnInit, OnChanges {
  // document.getElement
  //prop decorator
  @Input() color1: string = 'red';
  //life cycle components
  constructor(public elemRef: ElementRef) {
    //1
    // console.log('constructor');

    // this.elemRef.nativeElement.style.border = `2px solid ${this.color1}`;
  }
  ngOnChanges(): void {
    //1
    // console.log('ngOnChanges');
    this.elemRef.nativeElement.style.border = `2px solid ${this.color1}`;
  }
  ngOnInit() {

    // console.log('ngOnInit');

    //2
    // this.elemRef.nativeElement.style.border = `2px solid ${this.color1}`;
  }

  // method decorator
  @HostListener('mouseover') mouseOver() {
    this.elemRef.nativeElement.style.border = `1px green dashed`;
  }

  @HostListener('mouseout') mouseout() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.color1}`;
  }
}
