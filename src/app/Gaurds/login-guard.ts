import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuth } from '../service/user-auth';

//v17 func     class==>v2 v16
export const loginGuard: CanActivateFn = (route, state) => {
  let userAuth=inject(UserAuth)
  let router=inject(Router)
   if(userAuth.isUserLogged){
    return true;  
   }else{
    // alert('login!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    router.navigate(['/signup'])
    return false
   }

};
