import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";

import { Navbar } from './components/navbar/navbar';
import { ProductParent } from "./components/product-parent/product-parent";
import { Home } from './components/home/home';
//meta data
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'MEARN-Ecommerce-standAlone';
}
