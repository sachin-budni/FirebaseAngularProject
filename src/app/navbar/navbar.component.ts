import { Component, OnInit, HostListener } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  flag :boolean = false;

  user : Observable<any>;
  email : string;
  lastSignin : string;
  createTime:string;
  date = new Date();
  photoUrl : any;
  loginlogout:boolean;
  constructor(private employeeService:EmployeeService,private route:Router) { }

  ngOnInit() {
    this.user = this.employeeService.getUser();
    this.user.subscribe(ref=>{
      if(!ref){
        this.loginlogout = false;
        //this.route.navigate(['/login']);
        this.photoUrl = './../../assets/img.png';
      }else{
        this.loginlogout = true;
        this.email = ref.email;
        this.photoUrl = ref.photoURL;
        if(this.photoUrl == undefined){
          this.photoUrl = './../../assets/img.png';
        }
        this.lastSignin = ref.metadata.lastSignInTime;
        this.createTime = ref.metadata.creationTime;
        this.date = new Date(this.lastSignin);
      }
    });
  }


  emailSigOut(){
    this.employeeService.singOut();
  }
  
  OpenLogin(){
    this.flag = !this.flag;
  }
  logIn(){
    this.flag = !this.flag;
    this.route.navigate(['/login']);
  }
  logInLogout(){
    this.flag = !this.flag;
    this.employeeService.singOut();
  }
  @HostListener('click',['$event'])
  ClosingLogout(event){
    if(event.target.className == "mainclick"){
      this.flag = false;
    }
  }
}
