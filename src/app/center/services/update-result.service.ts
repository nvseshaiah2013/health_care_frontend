import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UpdateResultService {

  private baseurl: string = 'http://localhost:8090/api/center/'
  constructor(private http:HttpClient) { }

  public addTestResult(appointmentId : any, condition : any, testReading : any){
    return this.http.post(`${this.baseurl}updateTestResult`,{ appointmentId, condition, testReading});
  }

}
