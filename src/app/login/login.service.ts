import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Routes, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authstate:any;

  constructor(private afAuth: AngularFireAuth,
    private afStorage: AngularFireAuth,
    private afData:AngularFireDatabase,private route:Router) {
      this.authstate = afAuth.authState.subscribe(auth=>{
        if(auth){
          this.route.navigate(['/employee']);
        }else{
          this.route.navigate(['/login']); 
        }
      });
     }

     signInWithGoogle(){
       return this.afAuth.auth.signInWithPopup(
         new firebase.auth.GoogleAuthProvider()
       ).then(ref=>{
         if(ref){

         }else{

         }
       }).catch(err=>console.log(err));
     }
     
     signInWithEmail(email,password){
       return this.afAuth.auth.signInWithEmailAndPassword(email,password)
       .then(ref=>console.log(ref));//.catch(err=>console.log(err));
     }
}
