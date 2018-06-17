import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginService } from './login/login.service';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';

 export const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',redirectTo:'login',pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,AngularFireStorageModule,AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FormsModule,RouterModule.forRoot(routes),
    MatInputModule
  ],
  providers: [LoginService,SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
