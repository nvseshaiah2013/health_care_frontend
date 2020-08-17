import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDiagnosticCenterComponent } from './add-diagnostic-center/add-diagnostic-center.component';
import { ViewDiagnosticCenterComponent } from './view-diagnostic-center/view-diagnostic-center.component';
import { TestDetailsComponent } from './test-details/test-details.component';


const routes: Routes = [
  { path : '', component : DashboardComponent ,children : [
      { path : 'addDiagnosticCenter', component : AddDiagnosticCenterComponent },
      { path : 'viewDiagnosticCenter', component : ViewDiagnosticCenterComponent },
      {path:"testDetails",component : TestDetailsComponent},
      { path : '**', component : AddDiagnosticCenterComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
