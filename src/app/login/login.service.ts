import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Routes, Router } from '@angular/router';
import { Email } from './email';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authstate:any;
  GoogleSignin : string;
  lists : AngularFireList<any>;
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
         // this.userAdding(ref.email);
        //  this.lists.push({
        //    user:ref.email
        //  })
        console.log(ref);
         if(ref){

         }else{

         }
       }).catch(err=>console.log(err));
     }
     flag:boolean;
     signInWithEmail(email,password){
       this.lists= this.afData.list('messages/user');
       this.lists.snapshotChanges().subscribe(ref=>{
         ref.forEach(element=>{
          let y = element.payload.toJSON()
          let x = y as Email
          this.flag = x.email==email;
         })
       })
       let login;
       if(this.flag){
         login = this.afAuth.auth.signInWithEmailAndPassword(email,password)
         .then(ref=>
          console.log(ref)
        );//.catch(err=>console.log(err));
       }
        return login;
      }
      userAdding(userName){

      }
}
