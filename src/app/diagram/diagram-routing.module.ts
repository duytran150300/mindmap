import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

export const diagramRoutingRoutes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
];
