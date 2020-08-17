import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTestComponent } from './add-test/add-test.component';
import { DiagnosticCenterComponent } from './diagnostic-center/diagnostic-center.component';
import { VacantBedsComponent } from './vacant-beds/vacant-beds.component';


const routes: Routes = [
  { path : '', component : DashboardComponent ,children : [
      { path : 'add-test', component : AddTestComponent },
      { path : 'diagnostic-centers', component : DiagnosticCenterComponent },
      { path : '**', component : AddTestComponent },
      { path : 'vacantbedsall',component : VacantBedsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
