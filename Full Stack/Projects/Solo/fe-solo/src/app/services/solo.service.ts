import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SoloModel } from '../models/solo.model';
import { environment } from '../env/env';

@Injectable({
  providedIn: 'root',
})
export class SoloService {
  private beUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSolos(): Observable<SoloModel[]> {
    return this.http.get<SoloModel[]>(this.beUrl);
  }

  getSoloById(id: number): Observable<SoloModel> {
    return this.http.get<SoloModel>(`${this.beUrl}/${id}`);
  }

  addSolo(solo: SoloModel): Observable<SoloModel> {
    return this.http.post<SoloModel>(this.beUrl, solo);
  }

  updateSolo(id: number, solo: SoloModel): Observable<void> {
    return this.http.put<void>(`${this.beUrl}/${id}`, solo);
  }

  deleteSolo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.beUrl}/${id}`);
  }
}
