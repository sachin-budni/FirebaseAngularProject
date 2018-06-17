import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  GoogleSign(){
    this.loginService.signInWithGoogle();
  }

  EmailSign(){
    this.loginService.signInWithEmail(this.email,this.password);
  }

}