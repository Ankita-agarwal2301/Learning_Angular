# AngularLogin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

- Login page is made
- which allows user to enter user name and password
- and then validates them



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
