import { Component, OnInit, Inject } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { log } from 'util';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.css']
})
export class EditViewComponent implements OnInit {
  note: Note;

  constructor(private noteService: NoteService, @Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<EditViewComponent>, private routerService: RoutingService) {
   
  }
  ngOnInit() {
    this.note = this.noteService.getNoteById(this.data.noteId);
  }
  saveNote() {
    this.noteService.editNote(this.note).subscribe((data => {
      console.log(data);
      this.dialogRef.close();
      //this.routerService.toDasboard();
    }))
  }
}
