import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-exo3',
  imports: [FormsModule, CommonModule],
  templateUrl: './exo3.component.html',
  styleUrl: './exo3.component.scss'
})
export class Exo3Component {
  cart: string[] = [];
  prod: string = '';

  add() : void {
    if (!this.prod) return;
    const saneProd = this.prod.trim()
                                     .toLowerCase()
                                     ;
    if (!this.cart.includes(saneProd)) {
      this.cart.push(saneProd);
      this.prod = '';
    }
  }
}
