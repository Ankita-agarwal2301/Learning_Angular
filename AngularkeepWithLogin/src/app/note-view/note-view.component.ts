import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  noteArray : Array<Note> =[];
  
  constructor(private noteService: NoteService) { }

  ngOnInit() {
console.log("initialized");
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
