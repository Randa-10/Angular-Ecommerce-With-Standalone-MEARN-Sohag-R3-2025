import { Component, inject } from '@angular/core';
import { UserService } from '../../service/user-service';
import { Iuser } from '../../Models/iuser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-form-signup',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form-signup.html',
  styleUrl: './template-driven-form-signup.css'
})
export class TemplateDrivenFormSignup {


  userService=inject(UserService)
  userProp:Iuser={ } as Iuser
  constructor(     ){

  }
  addUser(){
    // let u:Iuser={
    //   fname:'ali',
    //   email:"ali@gmail",
    //   password:'55555'
    // }
this.userService.addNewUser(this.userProp).subscribe((data)=>{
  console.log(data);
  
})
  }
}
