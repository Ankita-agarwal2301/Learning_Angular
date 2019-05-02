import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { log } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
 
  loginForm : FormGroup = new FormGroup({
  usernameValue :  new FormControl('', [Validators.required]),
  passwordValue : new FormControl('', [Validators.required, Validators.minLength(6)])
})

  ngOnInit() {  }

  login()
  {
    console.log("login");
    console.log(this.loginForm.value);      
  }
getUserNameError()
{
  return this.loginForm.get('usernameValue').hasError('required')?'User Name cannot be left blank':'';
}
  get usernameMethod()
  {
    return this.loginForm.get('usernameValue');
  }

  get passwordMethod()
  {
    return this.loginForm.get('passwordValue');
  }
}
