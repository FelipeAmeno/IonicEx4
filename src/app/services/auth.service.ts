import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angular: AngularFireAuth) { }

  login(user: User) {
    return this.angular.signInWithEmailAndPassword(user.email, user.password);

  }

  register(user: User) {
    return this.angular.createUserWithEmailAndPassword(user.email, user.password);
  }
}
