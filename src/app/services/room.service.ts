import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/Room';

const baseUrl = 'http://localhost:5002/Room';

@Injectable({
  providedIn: 'root'
})

export class RoomService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Room[]> {
    return this.http.get<Room[]>(`${baseUrl}/get-all-with-limit/${80}`);
  }

  get(id: bigint): Observable<Room> {
    return this.http.get<Room>(`${baseUrl}/get/${id}`);
  }

  create(data: any) : Observable<any> {
    return this.http.post(`${baseUrl}/add-new-range`, data);
  }

  update(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/update-range`, data);
  }

  delete(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/remove-range`, data);
  }
}
