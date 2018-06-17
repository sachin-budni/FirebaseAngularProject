import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email:string;
  password:string;

  constructor(private signupService:SignupService) { }

  ngOnInit() {
  }

  createAccount(){
    this.signupService.SignUpEmail(this.email,this.password);
  }

}
