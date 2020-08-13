import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CenterRoutingModule } from './center-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllTestsComponent } from './all-tests/all-tests.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './services/loading.service';


@NgModule({
  declarations: [
    DashboardComponent,
    AllTestsComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    CenterRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers : [
    LoadingService
  ]
})
export class CenterModule { }
