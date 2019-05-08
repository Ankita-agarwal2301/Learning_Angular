import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import { RoutingService } from './services/routing.service';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(private authService: AuthenticationService , private router : RoutingService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
      return this.authService.isUserAuthenticated(this.authService.getToken())
      .then((status)=>{
        console.log("hi");
        
        log(status);
        if(!status)
        {
this.router.toLogin();
        }
        return status;
      })
  }
  
}
