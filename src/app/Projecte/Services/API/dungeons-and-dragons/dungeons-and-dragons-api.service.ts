import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DungeonsAndDragonsApiService {

  constructor(private http: HttpClient) { }

  getDungeonsAndDragonsMonsters(): Observable<any> {
    return this.http.get('https://www.dnd5eapi.co/api/monsters/');
  }

  getDungeonsAndDragonsLegendaryActions(): Observable<any> {
    return this.http.get('https://www.dnd5eapi.co/api/monsters/legendary-actions/');
  }
  
  getImatgeMonstre(index: string): Observable<any> {
    return this.http.get('https://www.dnd5eapi.co/api/monsters/' + index);
  }
}
