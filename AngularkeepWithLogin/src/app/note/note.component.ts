import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import {MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
@Input()
note: Note;
  constructor() { }

  ngOnInit() {
  }
editNote()
{
  alert('editing note');
}
}
