import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOpenerComponent } from './edit-opener.component';

describe('EditOpenerComponent', () => {
  let component: EditOpenerComponent;
  let fixture: ComponentFixture<EditOpenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOpenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
