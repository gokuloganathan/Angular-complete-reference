import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Role } from '../roles';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(private router:Router,private loginService:LoginService){
    /* console.log(Role.ADMIN); */
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [Validators.required]);

  onLogin() {
    if(this.loginService.validateUser(this.emailFormControl.status, this.passwordFormControl.status , true/* if authorized only */)){
      this.router.navigate(['/home']);
    };
   //his.loginService.validateUser(this.emailFormControl.status, this.passwordFormControl.status)
   
  }
}
