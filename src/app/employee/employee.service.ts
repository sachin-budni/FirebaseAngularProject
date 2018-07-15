import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  user:Observable<any>;
  userList:AngularFireList<any>;
  constructor(private afAuth:AngularFireAuth,private route:Router,private afData:AngularFireDatabase) {
      this.user=this.afAuth.authState;
   }
   setUser(lock){
     this.user =lock;
   }
getUser(){
  return this.user;
}
  singOut(){
    return this.afAuth.auth.signOut();
  }

  
}
