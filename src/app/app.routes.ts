import { Routes } from '@angular/router';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { Demo3Component } from './demo/demo3/demo3.component';
import { Exo1Component } from './exos/exo1/exo1.component';
import { Exo2Component } from './exos/exo2/exo2.component';
import {Exo3Component} from './exos/exo3/exo3.component';

export const routes: Routes = [
  { path: 'demo1'
  , component: Demo1Component
  },
  { path: 'exo1'
  , component: Exo1Component
  },
  { path: 'demo2'
  , component: Demo2Component
  },
  { path: 'demo3'
  , component: Demo3Component
  },
  { path: 'exo2'
  , component: Exo2Component
  },
  { path: 'exo3'
  , component: Exo3Component
  }
];
