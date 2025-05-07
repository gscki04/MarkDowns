import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../enviroment/env';
import { Observable } from 'rxjs';
import { ThirdModel } from '../Models/third.model';

@Injectable({
  providedIn: 'root'
})
export class ThirdService {

  private BE_URL = enviroment.API_URL;

  constructor(private http: HttpClient) { }

  getThirds(): Observable<ThirdModel[]>{
    return this.http.get<ThirdModel[]>(this.BE_URL);
  }

  getThirdById(id: number): Observable<ThirdModel>{
    return this.http.get<ThirdModel>(`${this.BE_URL}/${id}`);
  }

  addThird(newRecord: ThirdModel): Observable<ThirdModel>{
    return this.http.post<ThirdModel>(this.BE_URL, newRecord);
  }

  updateThirdById(id: number, newRecord: ThirdModel): Observable<void>{
    return this.http.put<void>(`${this.BE_URL}/${id}`, newRecord);
  }

  deleteThirdById(id: number): Observable<void>{
    return this.http.delete<void>(`${this.BE_URL}/${id}`)
  }

}