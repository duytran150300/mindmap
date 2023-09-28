import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { diagramRoutingRoutes } from './diagram-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockComponent } from './component/block/block.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(diagramRoutingRoutes),
    NgxGraphModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ListComponent, BlockComponent],
})
export class DiagramModule {}
