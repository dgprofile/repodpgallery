import { Component, OnInit } from '@angular/core';
import { getAuth, getRedirectResult, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  provider: any;
  user: any;
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
     
  }

}
