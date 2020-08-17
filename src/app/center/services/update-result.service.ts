import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateResultService {

  constructor(private http:HttpClient) { }

  public addTestResult(updateResultForm){
    return this.http.post("http://localhost:8090/api/center/updatetestresult",updateResultForm);
  }

}
