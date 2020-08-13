import { Injectable } from '@angular/core';
import { UserModule } from '../user.module';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  baseurl : string  = 'http://localhost:8090/api/public/';
  constructor(private http : HttpClient) { }

  login( username : string, password : string ) {
    return this.http.post(this.baseurl + 'authenticate', { username , password });
  }

  registerPatient() {

  }

}
