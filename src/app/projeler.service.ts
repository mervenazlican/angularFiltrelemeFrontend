import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projeler } from './projeler';

@Injectable({
  providedIn: 'root'
})
export class ProjelerService {

  constructor(private httpClient: HttpClient) { }
  baseURL = "http://localhost:8080/sorgulama";

  getProjelerList(): Observable<Projeler[]>{
    return this.httpClient.get<Projeler[]>(this.baseURL);
    
  }
}
