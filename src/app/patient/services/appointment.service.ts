import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Appointment} from '../models/appointment.model';
import { Observable } from 'rxjs';
@Injectable()
export class AppointmentService {

  baseurl: string ='http://localhost:8090/api/patient/appointment'

  appointment:Appointment[]=[];

  constructor(
    private http: HttpClient,

  ) { }

  makeAppointment(appointment:Appointment):Observable<any>{
    return this.http.post(this.baseurl + "/add", appointment);
  }

  viewAllAppointments() {
    return this.http.get<Appointment[]>(`${this.baseurl}/all`);
  }

  viewMyAppointment(id:number){
    return this.http.get<Appointment>(`${this.baseurl}/${id}`);
  }
}
