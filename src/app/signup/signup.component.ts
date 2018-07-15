import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email:string;
  password:string;
  flag:boolean=false;
  error : string;
  constructor(private signupService:SignupService,private router:Router) {
    if(this.signupService.getSignStart == undefined){
      this.router.navigate(['/signup'])
    }
   }

  ngOnInit() {
  }

  createAccount(){
    if(this.email.indexOf("@") == -1){
        this.error = "email id Error";
        this.flag = true;
      }else if(this.password == undefined){
        this.error = "password is required";
        this.flag = true;
    }else{
      this.signupService.SignUpEmail(this.email,this.password).catch(err=>{
        this.flag = true;
        this.error = err.message;
      });
    }
  }

}
