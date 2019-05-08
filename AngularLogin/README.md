# AngularLogin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

- Login page is made
- which allows user to enter user name and password
- and then validates them
- Login successfull --> dashboard.html

- used authentication server to check is username is admin and paasword is password , , then allows user to login
- used routing guard to check if only authenticated users are allowed to login and see dashboard page.

Notes:

# Approaches with Form: (https://angular.io/guide/forms-overview)
1. Template Driven Form  : control lies with template (directives)
        used when very simple form exist

2. Reactive Form: form model controls (model design is used)
        used when we want to control the form and its field to dept  , for complex form structures
        we have used this approach in our project
Steps:
 1. Registering the reactive forms module
 import { ReactiveFormsModule } from '@angular/forms';
 formsmodule

 2.import { FormGroup, FormControl, Validators } from '@angular/forms';
 
 create instance of FormGroup  (defines form model,you get immediate access to listen for, update, and                                  validate the state of the form input.)
it has property type of   FormControl - which defines form field

3. create mapping on template (html form)

4. implement validations

5. Configuring Routing
Login successfull --> dashboard.html

-https://angular.io/guide/router
- ng g s services/routing
- import RouterModule , Routes
- const
-  in import wite RouterModule.forRoot(routes)
- provide placeholder for component to load <router-outlet></router-outlet>

now hit http://localhost:4200/login
http://localhost:4200/dashboard

- Route Gaurding
      - The router supports multiple guard interfaces:

        - CanActivate to mediate navigation to a route.
        - CanActivateChild to mediate navigation to a child route.
        - CanDeactivate to mediate navigation away from the current route.
        - Resolve to perform route data retrieval before route activation.
        - CanLoad to mediate navigation to a feature module loaded asynchronously.

ng generate guard can-activate
or
ng g g can-activate

then 
{
    //http://localhost:4200/dashboard
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[CanActivateGuard]
  }

  make canActivate function return false;
now dashboard will not load 


#References:

https://blog.angular.io/


#Already written
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
