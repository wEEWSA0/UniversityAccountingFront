import { Component, OnInit } from '@angular/core';
import { BuildingService } from '../../../services/building.service';
import { ActivatedRoute } from '@angular/router';
import { Building } from '../../../models/Building';

@Component({
  selector: 'app-building-details',
  templateUrl: './building-details.component.html',
  styleUrl: './building-details.component.css'
})
export class BuildingDetailsComponent implements OnInit {

  id: bigint;
  building: Building | undefined;

  constructor(
    private buildingService: BuildingService,
    private ActivateRoute: ActivatedRoute) {
    let idParam = ActivateRoute.snapshot.params["id"];
    this.id = BigInt(idParam) // todo как обрабатывать параметры другого типа (ошибки, сообщения или еще что-то)
  }

  ngOnInit(): void {
    this.reciveBuilding();
  }

  reciveBuilding(): void {
    this.buildingService.get(this.id)
      .subscribe({
        next: (data) => {
          this.building = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  
}
