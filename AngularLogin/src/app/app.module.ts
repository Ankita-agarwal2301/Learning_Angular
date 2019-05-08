import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//import 
import { ReactiveFormsModule } from '@angular/forms';

import {FormsModule} from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutingService } from './services/routing.service';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './can-activate.guard';
import { HttpClientModule} from '@angular/common/http';

const routes: Routes=[
  {
    //http://localhost:4200/login
    path:'login',
    component:LoginComponent,
  },
  {
    //http://localhost:4200/dashboard
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[CanActivateGuard]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationService,RoutingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
