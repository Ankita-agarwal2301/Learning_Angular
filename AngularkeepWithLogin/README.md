## Angularkeep

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.
Here we have developed an Angular Keep App similar to https://keep.google.com/u/0/
it allow us to enter note title and note text , 
and consecutively it shows them as a note card on UI if user submit that note.

`Angular Keep`
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

`Angular Login`

- Login page is made
- which allows user to enter user name and password
- and then validates them
- Login successfull --> dashboard.html

- used authentication server to check is username is admin and paasword is password , , then allows user to login
- used routing guard to check if only authenticated users are allowed to login and see dashboard page.

--------------------
## NEW SESSION
(`Merged` Keep App and Login app)

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

app-component
    -- header
    -- router-outlet
            --login
            --dashboard (guarded)
                    --note-taker
                    --note-view (default)
                    --list-view
                    --edit-view.........(in next session)

.................................................................................
## NEW SESSION

1. Now what is happening is that if we add new note , then we have to refresh the browser to get it displayed on UI

`Observable`:
drawback - everytime the changes to data happen , its not subsribed to subscriber .

### Behavior subject
[Behaviour subject refernece 1](https://medium.com/@luukgruijs/understanding-rxjs-behaviorsubject-replaysubject-and-asyncsubject-8cc061f1cfc0)

[Behaviour subject refernece 2](https://alligator.io/rxjs/subjects/)

[Behaviour subject refernece 3](http://reactivex.io/rxjs/manual/overview.html)

The BehaviorSubject has the characteristic that it stores the “current” value. This means that you can always directly get the last emitted value from the BehaviorSubject.

- updated getAllNote() and pushNote() in noteService.ts to use Behaviour subject now.
now if we add new noe , it will refresh in the browser.



2. `Edit` each note

`To Do`
 - Make note clickable
 - Record id of note clicked
 - Open dialog that reads the id of note clicked
 - Fetch note by id
 - Update UI of Dialog with note data fetched by id
 - Add component for Edit ng g c editopener
 - Edit component should open over the existing view

`solution`
- Configure route for EditOpener
        : provided the named outlet for component to load (load in specific router outlet)
- In dashboard we added a named router outlet
- In routing service we 
        :  method for routing to edit was defined with noteId parameter
        : routes to path with named outlet
- Dialog
        : Popups and modals - Dialog - MatDialogModule
        : ng g c edit-view

- To add a component 3 ways -
 : making use of selector
 : routing
 : entryComponents: [EditViewComponent]


 ----------------------------------------------------
 ## NEW SESSION Unit Testing 

`jasmine-core`. Jasmine is the framework we are going to use to create our tests. It has a bunch of functionalities to allow us the write different kinds of tests.
`karma`. Karma is a task runner for our tests. It uses a configuration file in order to set the startup file, the reporters, the testing framework, the browser among other things. (provides environment)

- Create an Angular project with jasmine and karma
As the angular team recommends we are going to user angular-cli to create our app. By doing this the configuration of jasmine and karma comes resolved for us.

[Reference for karma](https://karma-runner.github.io/latest/index.html)
[Reference for karma - how it works](http://karma-runner.github.io/4.0/intro/how-it-works.html)
[Reference for Jasmine](https://jasmine.github.io/2.0/introduction.html)

Karma.conf.js
- configuration 

path to find all the test files location is mentioned in
- test.ts 
const context = require.context('../test/', true, /\.spec\.ts$/);
// it will search in test folder
- Karma is speedy , it is able to generate report for terminal and browser also , also it is watching .

- `Stub`
used to mock dependency 
as we dont want to testing of other class in a particular class
Stub is a class created  , and we tell dont use actual class but use our stub

 providers: [{
        provide: NoteService,
        useClass: NoteServiceStub
      }],       


 ----------------------------------------------------
 ## NEW SESSION End to end Testing 

 - check complete flow
 - `npm run e2e` or `ng e2e`
 - code in folder e2e 
 - protractor : helps to perform e2e and configuration in protractor.conf.js
 - app needs to ineract with server . so auth server should be running
 - 
 




  



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
