import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL: string ='';

  constructor(private http: HttpClient) {
    this.URL = 'https://restcountries.eu/rest/v2/all';
  }

  getData(){
    return this.http.get(`${this.URL}`);
  }
}