import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { GoogleAuthProvider } from '@firebase/auth-types';
import * as firebase from 'firebase';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  userList : AngularFireList<any>;

  signUpAuth:any;
  constructor(private afAuth:AngularFireAuth,private afData : AngularFireDatabase) {
        this.signUpAuth = this.afAuth.authState;
        // this.userList = this.afData.list('user');
  }
 
  getSignStart()
  {
    return this.signUpAuth;
  }

  SignUpEmail(email,password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password).
    then(ref=>{
      // this.userList.push({
        
      // })
      console.log(ref.user.email)
    });
  }

}
