import { Component } from '@angular/core';
import { Trainer } from '../../models/Trainer/trainer.model'
import { WorkingStatus } from '../../models/Trainer/trainer.working-status.model';

@Component({
  selector: 'app-demo4',
  imports: [],
  templateUrl: './demo4.component.html',
  styleUrl: './demo4.component.scss'
})

export class Demo4Component {
  public trainers : Trainer[] = [
    { id: 1
    , firstname: 'Aude'
    , lastname: 'Beurive'
    , avatar: 'aude.png'
    , birthdate: new Date('1989-10-16')
    , status: WorkingStatus.Available
    }
  ,
    { id: 2
    , firstname: 'Gavin'
    , lastname: 'Chaineux'
    , avatar: 'gavin.png'
    , birthdate: new Date('1992-10-18')
    , status: WorkingStatus.Unavailable
    }
  ,
    { id: 3
    , firstname: 'Aurélien'
    , lastname: 'Strimelle'
    , avatar: 'aurelien.png'
    , birthdate: new Date('1989-11-01')
    , status: WorkingStatus.Available
    }
  ,
    { id: 4
    , firstname: 'Robin'
    , lastname: 'Pêcheur'
    , avatar: 'robin.png'
    , status: WorkingStatus.Holiday
  }
];

  public constructor() {

  }
}
