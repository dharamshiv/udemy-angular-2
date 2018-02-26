import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';


@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';
  
  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }
  
  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.defaultColor;
  }
  
  @HostListener('mouseenter') mouseOver(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue',false,false);
    this.backgroundColor =this.highlightColor;
  }
  
   @HostListener('mouseleave') mouseLeave(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent',false,false);
    this.backgroundColor =this.defaultColor;
  }

}
