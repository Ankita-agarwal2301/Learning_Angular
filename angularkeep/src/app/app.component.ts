import { Component } from '@angular/core';
import { log } from 'util';

class Note
{
  title:string;
  text:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
note: Note = new Note();
noteArray : Array<Note> =[];

takeNote()
{
  this.noteArray.push(this.note);
  this.note=new Note();
  
  console.log(this.noteArray);
}

}
