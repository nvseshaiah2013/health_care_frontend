import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacantBedsServiceService {

  constructor(private http:HttpClient) { }

  public getVacantBedsList(){
    return this.http.get("localhost:8090/api/admin/vacantbeds");
  }
}
