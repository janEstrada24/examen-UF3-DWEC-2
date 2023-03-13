import { Component, OnInit } from '@angular/core';
import { catchError, take, throwError } from 'rxjs';
import { DungeonsAndDragonsApiService } from 'src/app/Projecte/Services/API/dungeons-and-dragons/dungeons-and-dragons-api.service';

@Component({
  selector: 'app-llista-monstres',
  templateUrl: './llista-monstres.component.html',
  styleUrls: ['./llista-monstres.component.css']
})
export class LlistaMonstresComponent implements OnInit {

  monstres!: Array<any>;

  constructor(private httpClient: DungeonsAndDragonsApiService) { }

  ngOnInit(): void {
    this.getMonstres
  }

  getMonstres() {
    this.httpClient
    .getDungeonsAndDragons()
    .pipe(
      take(1),
      catchError((err: any) => {
        return throwError(() => new Error("No s'ha pogut obtenir la informació."));
      })
    )
    .subscribe(
      response => {
        this.monstres = response.results;
        console.log(this.monstres);
      }
    );
  }
}
