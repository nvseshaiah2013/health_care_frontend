import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiagnosticCenterComponent } from './diagnostic-center/diagnostic-center.component';
import { AddTestComponent } from './add-test/add-test.component';
import { LoadingService } from './services/loading.service';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DiagnosticCenterComponent,
    AddTestComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers : [
    LoadingService
  ]
})
export class AdminModule { }
