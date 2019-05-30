import { Injectable } from '@angular/core';
import { Note } from './note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { log } from 'util';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }  
  //as we dont want it to be available across app
)
export class NoteService {
  notes: Array<Note>;
  //object o0f behaviour subject
  noteSubject = new BehaviorSubject<Array<Note>>(this.notes);
  constructor(private httpclient: HttpClient, private authService: AuthenticationService) {
    this.notes=[];
    this.fetchNotes();
  }

  fetchNotes() {
    return this.httpclient.get<Array<Note>>('http://localhost:3000/api/v1/notes', {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`)
    }).subscribe(data => {
      this.notes = data;
      this.noteSubject.next(this.notes);
    })
  }
  getAllNote() {
    // return this.httpclient.get<Array<Note>>('http://localhost:3000/api/v1/notes',{
    //   headers : new HttpHeaders().set('Authorization',`Bearer ${this.authService.getToken()}`)
    return this.noteSubject;
    //});
  }
  pushNote(note: Note) {
    return this.httpclient.post<Note>('http://localhost:3000/api/v1/notes', note, {

      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`)
    }).pipe(tap(newNote => {
      this.notes.push(newNote);
      this.noteSubject.next(this.notes);
    }))
  }
  editNote(note) {
    return this.httpclient.put<Note>(`http://localhost:3000/api/v1/notes/${note.id}`, note, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`)
    })
      .pipe(tap(updatedNote => {
        let notedata = this.notes.find(noteitem => noteitem.id === updatedNote.id)
        Object.assign(notedata, updatedNote);
        this.noteSubject.next(this.notes);
      }))
  }

  deleteNote(noteId) {
    return this.httpclient.delete(`http://localhost:3000/api/v1/notes/${noteId}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`)
    })
      .pipe(tap(() => {
        let noteIndex = this.notes.findIndex(noteitem => noteitem.id === noteId)
        this.notes.splice(noteIndex, 1);
        // Object.assign(notedata,updatedNote);
        this.noteSubject.next(this.notes);
      }))
  }

  getNoteById(noteId) {
    let notedata = this.notes.find(noteitem => noteitem.id === noteId);
    return Object.assign({}, notedata);
  }
}
