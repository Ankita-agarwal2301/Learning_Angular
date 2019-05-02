import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Configure animations  into your application to enable animations support from Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//API reference for Angular Material toolbar (Navigation Toolbar)
import {MatToolbarModule} from '@angular/material/toolbar';
//API reference for Angular Material expansion(Layout -> Expansion Panel)
import {MatExpansionModule} from '@angular/material/expansion';
//automatically added after ng g c header
import { HeaderComponent } from './header/header.component';
//API reference for Angular Material form-field(Form Control --> Form Field)
import {MatFormFieldModule} from '@angular/material/form-field';
//MatInputModule to resolve error of MatFormFieldModule
import {MatInputModule} from '@angular/material/input';

//For ng model
import {FormsModule} from '@angular/forms';

//API reference for Angular Material card (Layout --> Card)
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
