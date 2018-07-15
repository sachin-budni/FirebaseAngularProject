import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  user : Observable<any>;
  email : string;
  lastSignin : string;
  createTime:string;
  date = new Date();
  userList : AngularFireList<any>;
  constructor(private employeeService:EmployeeService,private route:Router,private afData:AngularFireDatabase) { }

  ngOnInit() {
    this.user = this.employeeService.getUser();
    this.user.subscribe(ref=>{
      if(!ref){
        this.route.navigate(['/login']);
      }else{
        console.log(ref);
        this.email = ref.email;
        this.lastSignin = ref.metadata.lastSignInTime;
        this.createTime = ref.metadata.creationTime;
        this.date = new Date(this.lastSignin);
      }
    });
  }
  
  emailSigOut(){
    this.employeeService.singOut();
  }
  
}
