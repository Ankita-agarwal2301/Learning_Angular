import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { log } from 'util';
import { AuthenticationService } from '../services/authentication.service';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   constructor(private authService:AuthenticationService,private router:RoutingService) { }
  //constructor(private router:RoutingService) { }
  loginForm : FormGroup = new FormGroup({
  username :  new FormControl('', [Validators.required]),
  password : new FormControl('', [Validators.required, Validators.minLength(6)])
})

  ngOnInit() {  }

  login()
  {
    console.log("login");
    console.log(this.loginForm.value);
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password); 
    // if(this.loginForm.value.usernameValue=='admin')
    // {
    //   console.log("ok");
    //   this.router.toDasboard();      
    // }
   // calling method to authentictae user
   
      this.authService.validateUser(this.loginForm.value).subscribe(data=>{
    this.authService.setToken(data["token"]);
      this.router.toDasboard();
      console.log(data);
      
    },
    error=>{
      console.log(error);      
    })
  }
getUserNameError()
{
  return this.loginForm.get('usernameValue').hasError('required')?'User Name cannot be left blank':'';
}
  get usernameMethod()
  {
    return this.loginForm.get('username');
  }

  get passwordMethod()
  {
    return this.loginForm.get('password');
  }
}
