import { Injectable } from '@angular/core';
import { enviroment } from 'src/Enviroment/env';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { TwothModel } from '../model/TwothModel';

@Injectable({
  providedIn: 'root'
})
export class TwothService {

  private BE_URL = enviroment.APIURL;

  constructor(private http: HttpClient) {}

  getTwoths(): Observable<TwothModel[]>{
    return this.http.get<TwothModel[]>(this.BE_URL);
  }

  getTwothById(id: number): Observable<TwothModel>{
    return this.http.get<TwothModel>(`${this.BE_URL}/${id}`);
  }

  addTwoth(twoth: TwothModel): Observable<TwothModel>{
    return this.http.post<TwothModel>(this.BE_URL, twoth);
  }

  updateTwoth(id: number, twoth: TwothModel): Observable<void>{
    return this.http.put<void>(`${this.BE_URL}/${id}`, twoth);
  }

  deleteTwoth(id: number): Observable<void>{
    return this.http.delete<void>(`${this.BE_URL}/${id}`);
  }

}
