import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { VacantBedComponent } from './vacant-bed/vacant-bed.component';
import { MyBedComponent } from './my-bed/my-bed.component';
import { AllTestComponent } from './all-test/all-test.component';
import { DiagCenterComponent } from './diag-center/diag-center.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'appointments', component: AppointmentsComponent },
      {path:'diagCenter',component:DiagCenterComponent , children:[{path:'vacantbeds',component:VacantBedComponent}]
      },
      {path:'mybed',component:MyBedComponent},
      {path:'testResult',component:AllTestComponent},
      {path:'vacantbeds',component:VacantBedComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
