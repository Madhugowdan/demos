import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'
const api = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(api + 'users').pipe(
      map((res:any) => { return res}));
  }

  getposts() {
    return this.http.get(api + 'posts').pipe(
      map((res:any) => { return res}));
  }


  


}
