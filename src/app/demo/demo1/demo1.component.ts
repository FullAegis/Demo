import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo1',
  imports: [FormsModule],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss'
})

export class Demo1Component {
  name: string = 'Angular Demo1';
  num: number = 0;
  resultEven: string = '';

  checkEven(): void {
    if (this.num % 2 === 0) 
      this.resultEven = 'Even'
    else
      this.resultEven = 'Odd'
  }

  imgSrc: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  imgAlt: string = 'Angular Logo';
  imgWidth: number = 100;
}
