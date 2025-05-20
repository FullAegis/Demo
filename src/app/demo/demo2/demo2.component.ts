import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TemperatureConvPipe } from '../../core/pipes/TemperatureConvPipe/temperature-conv.pipe';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo2',
  imports: [CommonModule, TemperatureConvPipe, FormsModule],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.scss'
})
export class Demo2Component {
  bonjour : string = "Bonjour les dev !";

  prix : number = 12.6548576;

  ajd : Date = new Date();

  //Attention utilisation du joker any : à ne pas reproduire par la suite
  aude : any = {
    prenom : 'Aude',
    nom : 'Beurive',
    dateNaissance : new Date('1989-10-16')
  };

  temp: number = NaN;
  unitFrom: string = '';
  unitTo: string = '';

}
