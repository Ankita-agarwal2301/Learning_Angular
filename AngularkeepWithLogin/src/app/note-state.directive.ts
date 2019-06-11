import { Directive , ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appNoteState]'
})
export class NoteStateDirective {

@Input()
appNoteState : string;

  constructor(private element: ElementRef) { }
ngOnInit(){
  if(this.appNoteState==='not-started')
  {
    this.element.nativeElement.style.backgroundColor = 'lightpink';
    this.element.nativeElement.style.color = 'navy';

  }if(this.appNoteState==='started')
  {
    this.element.nativeElement.style.backgroundColor = 'lightblue';
  }if(this.appNoteState==='completed')
  {
    this.element.nativeElement.style.backgroundColor = 'lightgreen';
  }
}
}
