import { Component, OnInit } from '@angular/core';
import {FormBuilder ,FormGroup,FormControl }  from '@angular/forms';
import { LoginSignupServiceService } from '../services/login-signup-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fBuilder:FormBuilder , private serviceLogin:LoginSignupServiceService) { }
  status:boolean=false;
  ngOnInit(): void {
    
  }
  signupForm =this.fBuilder.group(
    {
      fName:[""],
      lName: [""],
      email:[""],
      phoneNumber: [""],
      dob: [""],
      password: [""],
      cPassword:[""]

    }
  );
  firstEmail:string="";
  secondEmail:string="";
  password1:string="";
  password2:string="";
  errorP:boolean=false;
  

  checkSame(event:any){
       
    if(this.password1==this.password2)
    {
      
      this.errorP=false;
      
    }
    else
    {
      
      this.errorP=true;
      
    }
  }
  // getData()
  // {
  //   console.log(this.signupForm.value);
  //   console.log(this.signupForm.get('email'));
  //   console.log(this.signupForm.controls['email'].value);
  //   console.log(this.signupForm.controls['email'].value.name);
  //   console.log(this.signupForm.controls['password'].value);
  // }

  submitting()
  {
    this.status=true;
    this.serviceLogin.getDataFromSignup(this.signupForm.controls['email'].value,this.signupForm.controls['password'].value);
  }
}
