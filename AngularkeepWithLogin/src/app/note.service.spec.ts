import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { NoteService } from './note.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthServiceStub } from './auth-service-stub';

fdescribe('NoteService', () => {

  let service: NoteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NoteService,
        {
          provide: AuthenticationService,
          useClass: AuthServiceStub
        }]
    })
    service = TestBed.get(NoteService);
    httpMock = TestBed.get(HttpTestingController);
    let req = httpMock.expectOne({
      url: 'http://localhost:3000/api/v1/notes',
      method: 'GET'
    })
  });

  it('should be created', () => {
    expect(service).toBeTruthy();

  });

  it('should call fetchNote for fetching notes from Server which makes the right API call and update notes subject', () => {

    let testNote = {
      id: 111,
      title: 'aa',
      text: 'qq'
    }
    service.fetchNotes();

    const request = httpMock.expectOne({
      url: 'http://localhost:3000/api/v1/notes',
      method: 'GET'
    })
    request.flush([testNote]);
    service.getAllNote().subscribe(notes => {
      expect(notes).toEqual([testNote])
    })
  })

  it('should call addNote with right API', () => {
    let testNote1 = {
      id: 111,
      title: 'aa',
      text: 'qq'
    }
    service.pushNote(testNote1).subscribe(note=>{
      expect(note).toEqual(testNote1);
      
    })
    let req = httpMock.expectOne({
      url: 'http://localhost:3000/api/v1/notes',
      method: 'POST'
    })
    req.flush(testNote1);
    service.getAllNote().subscribe(notes => {
      expect(notes).toEqual([testNote1])
    })
  })

});
