import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  // apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  // Http
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   }),
  // };

  // getusers() {
  //   return this.http.get(this.apiUrl);
  // }

  // sendData(text: any) {
  //   return this.http.post<any>(this.apiUrl, text);
  // }
}
