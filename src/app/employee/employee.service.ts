import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  user:Observable<any>;
  constructor(private afAuth:AngularFireAuth,private route:Router) {
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
