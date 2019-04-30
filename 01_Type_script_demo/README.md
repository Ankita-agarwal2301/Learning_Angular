https://angular.io/

we will work with latest version angular 7

we will make a page like https://keep.google.com/u/0/

first version : Angular Js 
After that it was replced by typescript and so it was named Angular only and JS was removed from its name
Angular 2/3/4/5/6/7   to improve performance , some file folder changes also

Also it asked developer some questions while installing it, prompts are asked now ijn 7

#TYPESCRIPT :
https://www.typescriptlang.org/

superset of JS that compiles(manually or using angular) to plain javascript 

let n=100;
n ="ankita"

..so JS is loosely typed , its bothering issue as invalid data can be passed and no check
  so , we use typescript
..here we specify the type while declaring variable
..So typescript code once it is compiled , javascript code is there.So we have benefit of working with  strictly typed lang , and internally we have JS
#Transfiling : 
we need a transfiler(if we manually work with typescript) to compile typescript and generate java script code

#Command:
	npm install typescript -g
	tsc --version

#Steps : 
1.create index.ts
2.index.html and link above ts file
3.RUN , above code will not work as browser will not understand ts file , we need to transfile it 
4.tsc index.ts , it will create index.js
5.link index.js in index.html , now it will work

..var is not used , let const used for local variables

..as angular version is released , type script is also updating

#Single Page Application : 

one html which will be updated with the changes


#Prerequisite For ANGULAR:
 Angular CLI : help to get angular app with ease , complete structure of files , folder will be crated easily , new component can be added easily build , run , test application,
 its a tool to intialize , develop , maintain Angular application (use cmd or angular console)
 we will use cmd.

#Installing Angular CLI
npm install -g @angular/cli

check ANGULAR : 
ng --version

if installation fails , it cud be due to missing following:
1.  node.js> 8x
2.  npm


#new project
C:\Users\er_pr\Desktop\ANKITA\FSD\08_Angular_js_basic>ng new Angular-basic
? Would you like to add Angular routing? No
?which stylesheet format would you like to use? 
css
Sass
Less
Stylus ---> select css

creation of new files and dependencies are being downloaded 


#Serve app to localhot
C:\Users\er_pr\Desktop\ANKITA\FSD\08_Angular_js_basic\Angular-basic>ng serve -o
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

(- o will launch browser also)
in memory compilation takes place , compiled code is not saved its temporary

#FOLDER structure:

#e2e: end to end testing - protractor
    src:
    config files:
#node_modules : 
#src: code for testing
    app : core code
    assets : static resources - image , pdf , etc
    environmenorts : settings for prod or development
    index.html : main file
    karma.config.js : unit testing
    main.ts : entery point of execution
    polyfills.ts : backward compatibilty with browser
    style.css : global style file for entire app
    test.ts: global testing file
    json : settings for app , testing , lint
#editorconfig : helps to migrate from one visual studio to another
#gitignore : ignore compiled code , node module , settings of vs , while pushing to git
#angular.json :  details about apll and its structure

#FLOW OF EXECUTION :

1. main.ts - tell which code will be triggered next 
 a. [Module] : here root module is defined in bootstrapModule ,
             main module(AppModule) is triggered located in app/app.module
app.module.ts - contains class named AppModule which is public class so imported in main.ts

 b. [Component]:module can have multiple component , so bootstrap component is triggerfed first which        is AppComponent in same folder app.component
 app.component.ts - meta data 
                     title = 'Angular-basic'
                     selector: 'app-root': used a tag /markup  , so index,html use app-root
                    templateUrl: './app.component.html' - design of our page
                    styleUrls: ['./app.component.css']


app.component.ts - class has a title  'firstapp'
angular.json  --- main.ts ---- App module :bootstrapmodule  ------ Appcomponent : bootstrap Component ----- 


                        Angular.json
                /                       \
        main.ts                         index.html
        |                                    |
AppModule:bootstrapModule                   <app-root></app-root>
        |                                /        
AppComponent:bootstrapComponent       /          
 /        |        |       \       /            
.ts     .css    .spec.ts   html /



# Create a new component
(g c : generate component)

C:\Users\er_pr\Desktop\ANKITA\FSD\08_Angular_js_basic\Angular-basic>ng g c cadet

CREATE src/app/cadet/cadet.component.html (24 bytes)
CREATE src/app/cadet/cadet.component.spec.ts (621 bytes)
CREATE src/app/cadet/cadet.component.ts (265 bytes)
CREATE src/app/cadet/cadet.component.css (0 bytes)
UPDATE src/app/app.module.ts (392 bytes)
 
 add the tag generated in app.component.html as by default only bootstrap component loaded
 <h2>New Component Created : </h2>
  <app-cadet></app-cadet>

  O/P:
  New Component Created : 
    cadet works!   [Written in cadet.component.html]




