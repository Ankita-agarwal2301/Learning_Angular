import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { MatDialogModule } from '@angular/material/dialog';
import { RoutingService } from '../services/routing.service';
import { log } from 'util';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input()
  note: Note;
  constructor(private routerService: RoutingService) { }

  ngOnInit() {
  }
  editNote() {
    this.routerService.toEdit(this.note.id);
  }
}
