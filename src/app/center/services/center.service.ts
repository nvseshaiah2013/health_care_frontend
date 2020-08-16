import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { LoadingService } from './loading.service';
import { BedsList } from '../models/beds-list.model';

@Injectable()
export class CenterService {

  baseurl : string = 'http://localhost:8090/api/center/'
  constructor( 
      private http : HttpClient, 
      private loader : LoadingService
      ) { }

  getAllBeds() {
    return this.http.get<BedsList>(`${this.baseurl}getBeds`).pipe(finalize(() => this.loader.hide()));
  }

}
