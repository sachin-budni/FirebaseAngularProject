import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private afAuth:AngularFireAuth) {}

  SignUpEmail(email,password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password).
    then(ref=>{console.log(ref)}).catch(err=>console.log(err));
  }

}
