import { Component } from '@angular/core';
import { TimeFormatPipe } from '../../core/pipes/TimeFormatPipe/time-format.pipe';

@Component({
  selector: 'app-exo2',
  imports: [TimeFormatPipe],
  templateUrl: './exo2.component.html',
  styleUrl: './exo2.component.scss'
})
export class Exo2Component {
  time: Date = new Date();
  ms: number = 0;
  isRunning: boolean = false;
  #interval: any = null;

  private getTime() : number { return this.time.getTime();  }
  private setTime() : void { this.ms = new Date().getTime() - this.getTime(); }
  startTimer(): void {
    if (!this.isRunning) {
      this.time = new Date();
      this.isRunning = true;
      this.#interval = setInterval(() => this.setTime(), 1);
    }
  }
  
  pauseTimer(): void {
    if (this.isRunning) {
      clearInterval(this.#interval);
      this.setTime();
      this.isRunning = false;
    }
  }

  resetTimer(): void {
    clearInterval(this.#interval);
    
    this.time = new Date();
    this.ms = 0;
    this.isRunning = false;
  }
}
