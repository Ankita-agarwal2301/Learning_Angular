import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RoutingService {

  constructor(private router: Router) { }

  toDasboard()
  {
    this.router.navigate(['dashboard']);
  }

  toLogin()
  {
    this.router.navigate(['login']);
  }
  toEdit(noteId)
  {
   // this.router.navigate(['dashboard','view','editview']);
    // path :'note/:noteId/editview',
    this.router.navigate(['dashboard',
    {
      outlets :
      {
        noteEditOutlet :['note',noteId,'editview']
      }
    }])
  }
}
