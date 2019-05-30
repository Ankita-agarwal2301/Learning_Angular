import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})

export class NoteTakerComponent implements OnInit {
  note : Note = new Note();
  notes : Array<Note> = [];
  constructor(private noteService : NoteService) { }
    ngOnInit() {
  }
  takeNote(){
    // pushing note to notesarray following optimistic load
    this.notes.push(this.note);
    // code to write note
    this.noteService.pushNote(this.note).subscribe((data)=>{
      console.log(data);
    },
    error=>{
      console.log(error);
      // in event of error removing the added note from notesarray
      let noteIndex = this.notes.findIndex(notedata=>notedata.title==this.note.title);
      this.notes.splice(noteIndex,1);
    }
    )    
    this.note = new Note();
 }
}
