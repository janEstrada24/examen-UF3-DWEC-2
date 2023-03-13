import { Component, OnInit } from '@angular/core';
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
    this.getMonstres();
  }

  getMonstres() {
    this.httpClient.getDungeonsAndDragons().subscribe(
      response => {
        
        this.monstres = response;
        console.log(this.monstres);
      }
    );
  }
}
