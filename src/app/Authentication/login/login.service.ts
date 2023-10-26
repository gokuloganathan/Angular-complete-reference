import { Injectable } from '@angular/core';
import { Auth } from '../auth';
import { Role } from '../roles';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  //user!:Auth
  isAuthenticated: boolean = false;
  isAuthorized: boolean = false;
  constructor() {}

  validateUser(email: string, password: string,isAuthorized:Boolean = false) {
    if (email === 'VALID' && password === 'VALID') {
      if(isAuthorized){
        this.isAuthorized = true;
        //toggle value to false to unauthorize  
        //return this.isAuthorized;
      }
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }
}
