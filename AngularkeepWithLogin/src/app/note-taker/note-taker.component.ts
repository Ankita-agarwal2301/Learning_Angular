import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent implements OnInit {
  note: Note = new Note();
  noteArray : Array<Note> =[];
  
  constructor(private noteService:NoteService) { }
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
  ngOnInit() {
  }

}
