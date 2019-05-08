import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private noteService : NoteService) { }
 
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
  ngOnInit() {
    
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
