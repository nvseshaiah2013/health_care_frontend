import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiagnosticTest } from '../models/DiagnosticTest';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseurl : string = "http://localhost:8090/api/admin/"
  constructor(private http:HttpClient) { }

  getAllTests(){
    return this.http.get<DiagnosticTest[]>(this.baseurl+"getAllTests");
  }
}
