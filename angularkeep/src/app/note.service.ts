import { Injectable } from '@angular/core';
import { Note } from './note';
import { HttpClient } from '@angular/common/http';

@Injectable(
//   {
//   providedIn: 'root'
// }  
//as we dont want it to be available across app

)
export class NoteService {

  constructor(private httpclient : HttpClient) { }

  getAllNote()
  {
return this.httpclient.get<Array<Note>>('http://localhost:3000/notes');
  }
  pushNote(note: Note)
  {
return this.httpclient.post<Note>('http://localhost:3000/notes',note);
  }
}
