import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../../service/user-service';
import { Iuser } from '../../Models/iuser';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiv-form-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactiv-form-login.html',
  styleUrl: './reactiv-form-login.css',
})
export class ReactivFormLogin {
  userService = inject(UserService);
  userProp: Iuser = {} as Iuser;

  userForm: FormGroup;
  constructor(private fbr: FormBuilder) {
    // this.userForm=new FormGroup({
    //   fname:new FormControl('',[Validators.required,Validators.minLength(3)]),
    //   email:new FormControl('',[Validators.required]),
    //   password:new FormControl('',[Validators.required])
    // })
    this.userForm = this.fbr.group({
      fname: ['', Validators.required],
      // add:this.fbr.array
    });
  }

  get fnameMethod() {
    return this.userForm.get('fname');
  }
  get emailMethod() {
    return this.userForm.get('email');
  }
  addUser() {
    // let u:Iuser={
    //   fname:'ali',
    //   email:"ali@gmail",
    //   password:'55555'
    // }
    this.userService.addNewUser(this.userForm.value).subscribe((data) => {
      console.log(data);
    });
  }
}
