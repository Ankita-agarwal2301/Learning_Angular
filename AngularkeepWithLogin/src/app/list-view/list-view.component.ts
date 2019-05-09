import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
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
