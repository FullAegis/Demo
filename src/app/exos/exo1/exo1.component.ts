import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo1',
  imports: [FormsModule],
  templateUrl: './exo1.component.html',
  styleUrl: './exo1.component.scss'
})
export class Exo1Component {
  name: string = ''; // Le nom d'un personnage (input text)
  level: number = 1;// Le niveau de votre personnage (input number)
  race: string = '';// La race du personnage (select avec Elfe/Humain/Nain/...)
  className: string = '';// La classe du personnage (select avec Mage/Guerrier/Archer/
  imgSrc: string = ''; // L'url de l'image du personnage (input text)
  
  showCharacter: boolean = false; // Pour afficher ou non le personnage
  createCharacter(): void {
    this.showCharacter = this.name !== '' && this.level > 0 
                      && this.race !== '' && this.className !== '' 
                      && this.imgSrc !== ''
                      ;
  
  }
}
