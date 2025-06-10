import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { ProductParent } from '../product-parent/product-parent';
import { Home } from '../home/home';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-comp',
  imports: [Navbar,Footer,RouterOutlet],
  templateUrl: './main-comp.html',
  styleUrl: './main-comp.css'
})
export class MainComp {

}
