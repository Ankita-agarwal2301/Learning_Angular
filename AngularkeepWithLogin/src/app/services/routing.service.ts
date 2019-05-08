import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RoutingService {

  constructor(private router: Router) { }

  toDasboard()
  {
    this.router.navigate(['dashboard']);
  }

  toLogin()
  {
    this.router.navigate(['login']);
  }
}
