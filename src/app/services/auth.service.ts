import { Injectable, NgZone } from '@angular/core';
import { Auth, FacebookAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from "../services/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  provider: any;
  userData: any; // Save logged in user data
  constructor(public afAuth: AngularFireAuth,
    public afs: AngularFirestore,   // Inject Firestore service // Inject Firebase auth service
    public ngZone: NgZone,  // NgZone service to remove outside scope warning
    public router: Router
  ) {
  }
  // Sign in with Facebook
  FacebookAuth() {
    return this.AuthLogin(new FacebookAuthProvider());
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log("user" + user)
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['gallery']);
      }).catch((error) => {
        window.alert(error)
        //route to sign in page
        this.router.navigate(['login']);
      })
  }
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    console.log("userData" + userData.uid);
    return userRef.set(userData, {
      merge: true
    })
  }

  getLoginStatus(): boolean {
    let valueUser: boolean = true;
    this.afAuth.authState.subscribe(user => {
      if (user) {
        console.log('getLoginStatus: user in online');
        valueUser = true;
      }
      else {
        console.log('getLoginStatus: user in offline');
        valueUser = false;
      }
    });
    return valueUser;
  }

  SignOut() {
    console.log(this.afAuth.currentUser);
    this.afAuth.authState.subscribe(aState => {
      aState?.delete()
        .then(res => console.log('dleted->' + res))
        .catch(e => console.log('error'));
    });
    console.log(this.afAuth.authState);
    this.router.navigate(['login']);
  }
}

