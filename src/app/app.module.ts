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
import { EmployeeService } from './employee/employee.service';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';

 export const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',redirectTo:'home',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,AngularFireStorageModule,AngularFireDatabaseModule,
    BrowserAnimationsModule,MatToolbarModule,MatIconModule,MatButtonModule,
    FormsModule,RouterModule.forRoot(routes),
    MatInputModule
  ],
  providers: [LoginService,SignupService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
