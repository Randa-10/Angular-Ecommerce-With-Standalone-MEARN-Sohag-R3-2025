import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { Products } from './components/products/products';
//meta data
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer ,Home,Navbar,Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'MEARN-Ecommerce-standAlone';
}
