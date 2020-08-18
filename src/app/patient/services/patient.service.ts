import { Injectable } from '@angular/core';
import { DiagnosticCenter } from 'src/app/patient/models/center.model';
import { HttpClient } from '@angular/common/http';
import { BedsList } from 'src/app/center/models/beds-list.model';
import { Appointment } from '../models/appointment.model';
import { Bed } from '../models/bed.model';

@Injectable()
export class PatientService {

  baseurl : string ='http://localhost:8090/api/patient/'  
  diagCenterId:number;
  constructor(private http:HttpClient) { }
  
  getAllDiagnosticCenters() {
    return this.http.get<DiagnosticCenter>(`${this.baseurl}getAllDiagnosticCenter`);
  }

  getVacantBeds(diagCenterId:number) {
    return this.http.get<BedsList>(`${this.baseurl}getBeds/${diagCenterId}`);
  }

  getAllAppointments(){
    return this.http.get<Appointment>(`${this.baseurl}getAllAppointments`);
  }

  getBedStatus(appointmentId:number){
    return this.http.get<Bed>(`${this.baseurl}bedStatus/${appointmentId}`)
  }

  setId( id:number)
  {
    this.diagCenterId=id;
  }
  getId(){
    return this.diagCenterId;
  }

}
