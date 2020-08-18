import { Component, OnInit } from '@angular/core';
import { AppointmentsComponent } from '../appointments/appointments.component';
import {Appointment} from '../models/appointment.model';
import {AppointmentService} from '../services/appointment.service';
import {DiagnosticTest} from '../models/diagnostic-test.model';
import { TestResult } from '../models/test-result.model';
@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {

  title='makeappointment'
  appointment:Appointment=new Appointment();
  diagnosticTest:DiagnosticTest=new DiagnosticTest();
  
  
  mapp:number=0;
  vmyapp:number=0;
  vallapp:number=0;

  // for(var i=0;i<testid.length)

  constructor(private appointmentService:AppointmentService) { }

  makeapp()
  {
    this.mapp=1;
  }
  viewmyapp()
  {
    this.vmyapp=1;
  }
  viewallapp()
  {
    this.vallapp=1;
  }
  ngOnInit(): void {
  }
  makeAppointment():void{
    this.appointmentService.makeAppointment(this.appointment).subscribe(data=>
      {
        alert("Appointment Booked Successfully");
      },
      error=>
      {
        console.log("error occured",error);
      }
    );
   }
   viewByTestName(){

   }

}


