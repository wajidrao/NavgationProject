import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupServiceService {

  constructor() { }
  username:string="";
  password:string="";
  getDataFromSignup(user:any,pass:any){
     this.username=user;
     this.password=pass;
  }
  getUsername():string
  {
      return this.username;
  }
  getPassword():string
  {
    return this.password;
  }
}
