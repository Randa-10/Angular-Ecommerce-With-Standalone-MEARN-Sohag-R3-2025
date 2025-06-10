import { Component } from '@angular/core';
import { ImgStyle } from '../../directives/img-style';
import { RouterLink, RouterModule } from '@angular/router';
import { UserAuth } from '../../service/user-auth';

@Component({
  selector: 'app-navbar',
  imports: [ImgStyle,RouterLink,RouterModule], // RouterLink or RouterModule
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  userLoggedInNav:boolean=false
  constructor(private userAuth:UserAuth){
// this.userLoggedInNav=this.userAuth.isUserLogged
this.userAuth.userLoggedMethod().subscribe((data)=>{
  this.userLoggedInNav=data
})
  }
}
