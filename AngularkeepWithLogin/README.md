# Angularkeep

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.
Here we have developed an Angular Keep App similar to https://keep.google.com/u/0/
it allow us to enter note title and note text , 
and consecutively it shows them as a note card on UI if user submit that note.

(Angular Keep)
1. Used Angular Material
 --> components
 --> Theme

2. Two way binding using <ng-model>
binding date 

3. Used ngFor
We can use this directive, if we want to display a dynamic list, for example, an array of elements on the screen.

4. use json for data storage
- Observables
- Dependency injection
- Services


(Angular Login)

- Login page is made
- which allows user to enter user name and password
- and then validates them
- Login successfull --> dashboard.html

- used authentication server to check is username is admin and paasword is password , , then allows user to login
- used routing guard to check if only authenticated users are allowed to login and see dashboard page.

--------------------
(Merged Keep App and Login app)

Now we will allow use to view note in list or grid view and also to edit note

1.  allow user to view notes in 
   - List View
   - Grid View

To achieve this :
- Added children in route to view list view and grid view

- Made 4 new components
 ng g c note-taker
(to enter note title and text and click submit)

 ng g c note-view
(notes array display)

 ng g c list-view
(diplay notes in list view)

 ng g c note
(make each note in mat card as a component)


Now our each note is a component which in itself contain mat-card

2. Edit eash note


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
