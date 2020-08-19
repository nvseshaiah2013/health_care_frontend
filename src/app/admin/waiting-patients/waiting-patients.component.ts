import { Component, OnInit } from '@angular/core';
import { WaitingPatientService } from '../services/waiting-patient.service';
import { WaitingPatient } from '../models/waiting-patient.model';

@Component({
  selector: 'app-waiting-patients',
  templateUrl: './waiting-patients.component.html',
  styleUrls: ['./waiting-patients.component.css']
})
export class WaitingPatientsComponent implements OnInit {

  constructor(private service : WaitingPatientService) { }
  waitingPatients : WaitingPatient[] = [];
  ngOnInit(): void {
    this.service.getWaitingPatients()
      .subscribe(data => {
            this.waitingPatients = data;
      });
  }

}
