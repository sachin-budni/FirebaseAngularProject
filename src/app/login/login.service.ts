import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authstate:any;

  constructor(private afAuth: AngularFireAuth,
    private afStorage: AngularFireAuth,
    private afData:AngularFireDatabase) {
      this.authstate = afAuth.authState.subscribe(auth=>{
        if(auth){
          console.log(auth);
        }else{
          console.log("error"); 
        }
      });
     }

     signInWithGoogle(){
       return this.afAuth.auth.signInWithPopup(
         new firebase.auth.GoogleAuthProvider()
       ).then(ref=>console.log(ref)).catch(err=>console.log(err));
     }
     
     signInWithEmail(email,password){
       return this.afAuth.auth.signInWithEmailAndPassword(email,password)
       .then(ref=>console.log(ref)).catch(err=>console.log(err));
     }
}
