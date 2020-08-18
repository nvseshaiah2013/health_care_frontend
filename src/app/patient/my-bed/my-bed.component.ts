import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment.model';
import { PatientService } from '../services/patient.service';
import { data } from 'jquery';
import { Bed } from '../models/bed.model';

@Component({
  selector: 'app-my-bed',
  templateUrl: './my-bed.component.html',
  styleUrls: ['./my-bed.component.css']
})
export class MyBedComponent implements OnInit {

  appointments:Appointment;
  bed:Bed;
  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
    this.patientService.getAllAppointments().subscribe(data=>{
    this.appointments=data;
    console.log(this.appointments);
  },err=>{
  console.log(err.stack);}
    )
  }

  viewBedStatus(appointmetnId:number){
    this.patientService.getBedStatus(appointmetnId).subscribe(data=>{
      this.bed=data;
      console.log(this.bed);
    },err=>{
      console.log(err.stack);
    })

  }

}
