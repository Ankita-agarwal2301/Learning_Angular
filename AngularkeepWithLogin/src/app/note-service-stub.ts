import { advanceActivatedRoute } from '@angular/router/src/router_state';
import { Note } from './note';
import { Observable, observable } from 'rxjs';

// import { advanceActivatedRoute } from '@angular/router/src/router_state';

export class NoteServiceStub {
    fetchNotes() {

    }
    pushNote(note: Note) {
        //simulation to return observable
        if(note.title==='' || note.text==='')
        return Observable.throw({message:'text and title cannot be blank'});
        return Observable.create();
    }
}