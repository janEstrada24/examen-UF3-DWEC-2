import { Component, OnInit } from '@angular/core';
import { catchError, take, throwError } from 'rxjs';
import { DungeonsAndDragonsApiService } from 'src/app/Projecte/Services/API/dungeons-and-dragons/dungeons-and-dragons-api.service';
import { AccionsLlegendaries } from '../../Model/Entities/Implementation/accionsLlegendaries';

@Component({
  selector: 'app-llista-monstres',
  templateUrl: './llista-monstres.component.html',
  styleUrls: ['./llista-monstres.component.css']
})
export class LlistaMonstresComponent implements OnInit {

  monstres!: Array<any>;

  urlImatge!: string;

  monstresSeleccionats!: Array<AccionsLlegendaries>;

  constructor(private httpClient: DungeonsAndDragonsApiService) { }

  ngOnInit(): void {
    this.getMonstres();
  }

  getMonstres() {
    this.httpClient
    .getDungeonsAndDragonsMonsters()
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

  veureImatge(index: string) {
    //this.urlImatge = this.httpClient.getImatgeMonstre(index);
    this.httpClient
    .getImatgeMonstre(index)
    .pipe(
      take(1),
      catchError((err: any) => {
        return throwError(() => new Error("No s'ha pogut obtenir la imatge."));
      })
    )
    .subscribe(
      response => {
        this.urlImatge = "https://www.dnd5eapi.co" + response.image;
        console.log(this.urlImatge);
      }
    );
  }

  afegirMonstre(monstre: any) {
    this.monstresSeleccionats.push(monstre);
    console.log(this.monstresSeleccionats);
  }

  treureMonstre(monstre: any) {
    this.monstresSeleccionats.splice(this.monstresSeleccionats.indexOf(monstre), 1);
    console.log(this.monstresSeleccionats);
  }

  getLegendaryActions() {
    this.httpClient
    .getDungeonsAndDragonsLegendaryActions()
    .pipe(
      take(1),
      catchError((err: any) => {
        return throwError(() => new Error("No s'ha pogut obtenir la informació."));
      })
    )
    .subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
