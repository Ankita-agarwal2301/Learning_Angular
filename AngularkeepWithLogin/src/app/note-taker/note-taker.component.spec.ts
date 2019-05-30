import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTakerComponent } from './note-taker.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteService } from '../note.service';
import { NoteServiceStub } from '../note-service-stub';
import { By } from '@angular/platform-browser';
import { Note } from '../note';


fdescribe('NoteTakerComponent', () => {
  let component: NoteTakerComponent;
  let fixture: ComponentFixture<NoteTakerComponent>;
  let service: NoteService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoteTakerComponent],
      providers: [{
        provide: NoteService,
        useClass: NoteServiceStub
      }],
      imports: [MatExpansionModule, MatFormFieldModule, MatInputModule, FormsModule, BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteTakerComponent);
    component = fixture.componentInstance;
    //service = TestBed.get(NoteService);
    service = fixture.debugElement.injector.get(NoteService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain input element for note title and value should be blank', () => {
    let de = fixture.debugElement.query(By.css('input'));
    expect(de).toBeTruthy();
    expect(de.nativeElement.value).toBe('');
  });

  it('should contain input element for note text and value should be blank', () => {
    let de = fixture.debugElement.query(By.css('textarea'));
    expect(de).toBeTruthy();
    expect(de.nativeElement.value).toBe('');
  });

  it('should contain button element and value should be Save', () => {
    let de = fixture.debugElement.query(By.css('button'));
    expect(de).toBeTruthy();
    expect(de.nativeElement.value).toBe('Save');
  });

  it('should be able to take note ans pushNote be called with right parameter', () => {
    spyOn(service, 'pushNote').and.callThrough();
    let note: Note = new Note();
    note.title = 'Dummy title';
    note.text = 'Dummt text';
    component.note = note;
    let de = fixture.debugElement.query(By.css('button'))
    fixture.detectChanges();
    expect(de).toBeTruthy();
    de.nativeElement.click();
    fixture.detectChanges();

    //method is clled or not , set up a spy on that method
    expect(service.pushNote).toHaveBeenCalledWith(note);
    //parameter
    expect(component.note.title).toBe('');
    expect(component.note.text).toBe('');

  })

  
  it('should be able to take note ans pushNote be called with right parameter', () => {
    spyOn(service, 'pushNote').and.callThrough();
    let note: Note = new Note();
    note.title = 'Dummy title';
    note.text = 'Dummt text';
    component.note = note;
    let de = fixture.debugElement.query(By.css('button'))
    fixture.detectChanges();
    expect(de).toBeTruthy();
    de.nativeElement.click();
    fixture.detectChanges();

    //method is clled or not , set up a spy on that method
    expect(service.pushNote).toHaveBeenCalledWith(note);
    //parameter
    expect(component.note.title).toBe('');
    expect(component.note.text).toBe('');

  })

  it('should be able to take note with blank title error is handled', () => {
    spyOn(service, 'pushNote').and.callThrough();
    let note: Note = new Note();
    note.title = '';
    note.text = 'Dummt text';
    component.note = note;
    let de = fixture.debugElement.query(By.css('button'))
    fixture.detectChanges();
    expect(de).toBeTruthy();
    de.nativeElement.click();
    fixture.detectChanges();

    //method is clled or not , set up a spy on that method
    expect(service.pushNote).toHaveBeenCalledWith(note);
    //parameter
    expect(component.note.title).toBe(note.title);
    expect(component.note.text).toBe(note.text);

  })


  it('should have mat expansion module,collapsed by default ', () => {
    let de = fixture.debugElement.query(By.css('mat-expansion-panel .x'))
    expect(de).toBeFalsy();

  })


  it('should have mat expansion module expanded when clicked ',()=>{
    let de1 = fixture.debugElement.query(By.css('mat-expansion-panel-header'))
    de1.nativeElement.click();
    fixture.detectChanges();
    let de2 = fixture.debugElement.query(By.css('mat-expansion-panel.mat-expanded'))
    expect(de2).toBeTruthy();

  })

  it('should have mat expansion module collapsed when clicked again',()=>{
    let de1 = fixture.debugElement.query(By.css('mat-expansion-panel-header'))
    de1.nativeElement.click();
    fixture.detectChanges();
    de1.nativeElement.click();
    fixture.detectChanges();
     let de2 = fixture.debugElement.query(By.css('mat-expansion-panel .x'))
    expect(de2).toBeFalsy();

  })
});
