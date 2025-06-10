import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuth {
  //1
  propSub: BehaviorSubject<boolean>;
  constructor() {
    //2
    this.propSub = new BehaviorSubject<boolean>(false);
  }

  login(username: string, password: string) {
    //1-call api
    let token = '123345655555555';

    localStorage.setItem('userToken', token);
    //3
    this.propSub.next(true);
  }
  logout() {
    localStorage.removeItem('userToken');
    this.propSub.next(false);
  }

  // set ,get
  get isUserLogged(): boolean {
    return localStorage.getItem('userToken') ? true : false;
  }

  userLoggedMethod() {
    return this.propSub;
  }
}
