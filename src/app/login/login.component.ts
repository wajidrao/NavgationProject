import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginSignupServiceService } from '../services/login-signup-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user:LoginSignupServiceService , private fb:FormBuilder) { }

  ngOnInit(): void {
  }
   loginForm=this.fb.group({
     username:[""],
     password:[""]
   });
   loginS:boolean=false;
   loginF:boolean=false;
   validating(){
  
//     console.log(this.loginForm.controls['username'].value);

        if(this.loginForm.controls['username'].value == this.user.getUsername() && this.loginForm.controls['password'].value == this.user.getPassword()  )

        {
          this.loginS=true;
          this.loginF=false;
        }
        else{
          this.loginF=true;
          this.loginS=false;
        }
   }

}
