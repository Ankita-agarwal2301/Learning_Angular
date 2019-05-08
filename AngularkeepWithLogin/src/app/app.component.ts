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

constructor(private noteService : NoteService)
{
  console.log("constuctor");
  }
  ngOnInit()
  {
  }
}
