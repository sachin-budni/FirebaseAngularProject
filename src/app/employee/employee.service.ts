import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  user:any;
  constructor(private afAuth:AngularFireAuth,private route:Router) {
      this.afAuth.authState.subscribe(ref=>{
        if(!ref){
          this.route.navigate(['/login'])
        }else{
          console.log(ref);
          this.user = ref;
        }
      });
   }

  singOut(){
    return this.afAuth.auth.signOut();
  }
}
