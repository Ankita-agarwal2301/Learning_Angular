import { Injectable } from '@angular/core';
import { Note } from './note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';

@Injectable(
//   {
//   providedIn: 'root'
// }  
//as we dont want it to be available across app

)
export class NoteService {

  constructor(private httpclient : HttpClient,private authService : AuthenticationService) { }

  getAllNote()
  {
return this.httpclient.get<Array<Note>>('http://localhost:3000/api/v1/notes',{
  
  headers : new HttpHeaders().set('Authorization',`Bearer ${this.authService.getToken()}`)
});
  }
  pushNote(note: Note)
  {
return this.httpclient.post<Note>('http://localhost:3000/api/v1/notes',note,{
  
  headers : new HttpHeaders().set('Authorization',`Bearer ${this.authService.getToken()}`)
});
  }
}
