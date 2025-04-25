```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SoloModel } from '../models/solo.model';

@Injectable({
  providedIn: 'root',
})
export class SoloService {
  private apiUrl = 'https://localhost:5001/api/solo';  // Update the API endpoint

  constructor(private http: HttpClient) {}

  getSolos(): Observable<SoloModel[]> {
    return this.http.get<SoloModel[]>(this.apiUrl);
  }

  getSoloById(id: number): Observable<SoloModel> {
    return this.http.get<SoloModel>(`${this.apiUrl}/${id}`);
  }

  addSolo(solo: SoloModel): Observable<SoloModel> {
    return this.http.post<SoloModel>(this.apiUrl, solo);
  }

  updateSolo(id: number, solo: SoloModel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, solo);
  }

  deleteSolo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
```  