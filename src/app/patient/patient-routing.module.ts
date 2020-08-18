import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { VacantBedComponent } from './vacant-bed/vacant-bed.component';
import { MyBedComponent } from './my-bed/my-bed.component';
import { AllTestComponent } from './all-test/all-test.component';
import { DiagCenterComponent } from './diag-center/diag-center.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { ViewAllAppointmentComponent } from './view-all-appointment/view-all-appointment.component';
import { ViewMyAppointmentComponent } from './view-my-appointment/view-my-appointment.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'appointments', component: AppointmentsComponent },
      {path:'diagCenter',component:DiagCenterComponent , children:[{path:'vacantbeds',component:VacantBedComponent}]
      },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'makeappoitnment', component: MakeAppointmentComponent },
      { path: 'viewallappointments', component: ViewAllAppointmentComponent },
      { path: 'viewmyappointment', component: ViewMyAppointmentComponent },
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
