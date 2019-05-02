import { Component } from '@angular/core';
import { log } from 'util';
import {HttpClient} from '@angular/common/http'
import { NoteService } from './note.service';
import { Note } from './note';

// class Note
// {
//   title:string;
//   text:string;
// }
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
  //code to write note in json from UI
 this.noteService.pushNote(this.note).subscribe(data=>{
   console.log();   
 },error=>{
   console.log(error);   
 })
 
 // this.note=new Note();  
  console.log(this.noteArray);
}
constructor(private noteService : NoteService)
{
  console.log("constuctor");
  }
  ngOnInit()
  {
    console.log("initialozed");
    //code to read notes
    
    this.noteService.getAllNote().subscribe(data=>{
      console.log(data);
      this.noteArray = data;
      
    },
    error=>{
      console.log(error);
      
    })
  }
}
