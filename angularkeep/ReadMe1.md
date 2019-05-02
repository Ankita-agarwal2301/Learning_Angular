#AppComponent:
entry point

#module
#Any .ts file will be a class which has decorator mark over the class.
NgModule  : is a decorator that mark it as a module , with following metadata - 
1.declarations - component (allow to use in other part of application)
2import - module (allow to use in other part of application)
3.providers - injectable , services

#AppComponent
selector 
templateUrl
styleUrls

#Angular Material
Material Design components for Angular 
(they are themselves angular modules which contain design constructs)
https://material.angular.io/

*Follow the steps mentioned in getting started
Step 1 and step 2
install packages and import the BrowserAnimationsModule ,
then based upon component  import respective module (list in declaration) and use selector /markup of the component in desired .html file

add components accourding to your need
Components :
https://material.angular.io/components/categories
1.navigation-toolbar 

Step 4:
INclude a theme :
import the package in style.css
use : <mat-toolbar color='primary'>hello</mat-toolbar>
OR  <mat-toolbar color='accent'>hello</mat-toolbar>


Add ur css in style.css


As application is SPA . so we write different components 
e.g Header component
1. ng g c header
2. USE SELCTOR mentioned in metadata <app-header> in app.component.html
3. write your code in header.component.html file
e.g
<mat-toolbar color="primary">
<p >My Keep App</p>
</mat-toolbar>

#DAtaBinding
<ngModel>

#storing data in json
create db.json in server folder(notes record)
json-server server/db.json

#REST API

http://localhost:3000/notes :: GET
http://localhost:3000/notes :: POST + data (note)


#OBSERVABLE :
Asynchronous programming : publish /subscribe

REACTIVE PROGRAMMING - works with data and propogates the state changes : RxJS library
let b=20;
let c=10;
let a = b+c;
b=200;

a----> 210(not 30)
 (In Imperative programming it would be 30 only)

OBSERVABLES provide support for passing messages between publishers and subscribers in your application. 
In angular.io
Docs- FUNDAMENTALS > Observables & RxJS https://angular.io/guide/observables

RxJS LIBRARY 
RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code 

#Observables in Angular
Angular makes use of observables as an interface to handle a variety of common asynchronous operations. For example:

1. The EventEmitter class extends Observable.
2. The HTTP module uses observables to handle AJAX requests and responses.
3. The Router and Forms modules use observables to listen for and respond to user-input events.

#HTTP
Angular’s HttpClient returns observables from HTTP method calls. For instance, http.get(‘/api’) returns an observable
The HTTP module uses observables to handle AJAX requests and responses.

#Lifecyclehook:
invoke as and when app loads

code to read notes  as app loads , we write in ngOnInit

import {HttpClientModule} from '@angular/common/hhtp'

 then 
 import {HttpClient} from '@angular/common/http' in component.ts

#Dependency Injection
HttpClient is injectable class , so instance is not created , it is injected


#Service (injectable class)
building blocks in angular application
- any CRUD code
- any authentication
- routing

ng g s name
ng generate service name

only 2 files created

- supports unit tesing feature also











