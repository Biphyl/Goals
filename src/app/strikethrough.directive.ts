import { Directive,ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {
    // this.elm.nativeElement.style.textDecoration='line-through';
   }

  @HostListener("click") onClick(){
   this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClick(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }

}
