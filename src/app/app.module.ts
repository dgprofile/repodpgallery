import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component'; 
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core'; 

const routes: Routes = [
  {path: 'gallery', component: HeroComponent},
  {path: 'login', component: LoginComponent}
]
 @NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
