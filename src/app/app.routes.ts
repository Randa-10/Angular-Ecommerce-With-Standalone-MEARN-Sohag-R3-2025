import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProductParent } from './components/product-parent/product-parent';
import { Notfound } from './components/notfound/notfound';
import { MainComp } from './components/main-comp/main-comp';
import { Login } from './components/login/login';
import { ProductDetials } from './components/product-detials/product-detials';
import { TemplateDrivenFormSignup } from './components/template-driven-form-signup/template-driven-form-signup';
import { loginGuard } from './Gaurds/login-guard';
import { ReactivFormLogin } from './components/reactiv-form-login/reactiv-form-login';

export const routes: Routes = [
  //first match wins
  // {path:'',redirectTo:'/home',pathMatch:'full'} //default routes
  // ,
  // {path:'home',component:Home,title:'page home'},
  // {path:'products_parent',component:ProductParent,title:'page product'},
  {
    path: '',
    component: MainComp,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' }, //default routes
      { path: 'home', component: Home, title: 'page home' },
      {
        path: 'products_parent',
        component: ProductParent,
        title: 'page product',
        canActivate:[loginGuard]
      },
      //1-dynamic routes path/:idFromdB
      {path:'products_parent/:idFromdB',component:ProductDetials},
      {path:'signup',component:TemplateDrivenFormSignup},
      {path:'login',component:ReactivFormLogin}

    ],
  },
  { path: 'login', component: Login },
  //wild card routes

  { path: '**', component: Notfound }, //not found page
];
