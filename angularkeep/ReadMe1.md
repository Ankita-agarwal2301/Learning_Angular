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







