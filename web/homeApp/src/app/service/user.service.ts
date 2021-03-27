import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
let url =environment.url;
@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }
  public getUser(id:string) {
    return this.http.get(`${url}user/userprofile/?id=${id}`);
  }
  public getAllUser() {
    return this.http.get(`${url}user/`);
  }
}
