import {Directive, ElementRef, HostListener, inject, Input} from '@angular/core';

@Directive({
  selector: '[appSound]'
})
export class SoundDirective {
  private elementRef: ElementRef = inject(ElementRef);
  audio!: HTMLAudioElement;
  /**
   ```ts
     varName!: T;
     // is identical to
     varName: T | undefined;
   ```
  **/
  @Input() appSound: string = '';

  constructor() {}
  #el() : HTMLElement { return this.elementRef.nativeElement; }
  @HostListener('click') onClick() : void {
    this.audio.src = this.appSound;
    this.audio.play();
    this.#el().style.color = 'crimson';
  }
  @HostListener('mouseleave') onMouseLeave() : void {
    this.audio.pause();
  }
}
