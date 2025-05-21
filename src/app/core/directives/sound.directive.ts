import {Directive, ElementRef, HostListener, inject} from '@angular/core';

@Directive({
  selector: '[appSound]'
})
export class SoundDirective {
  elementRef: ElementRef = inject(ElementRef);
  audio: HTMLAudioElement = new Audio('/audio/dog.wav');

  constructor() { }

  @HostListener('mouseclick') onMouseClick() : void {
    this.audio.play();
  }
  @HostListener('mouseleave') onMouseLeave() : void {
    this.audio.pause();
  }
}
