import { Routes } from '@angular/router';

export const routers: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./diagram/diagram.module').then((m) => m.DiagramModule),
  },
];
