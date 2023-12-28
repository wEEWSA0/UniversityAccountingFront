import { Component, OnInit } from '@angular/core';
import { Building } from '../../../models/Building';
import { BuildingService } from '../../../services/building.service';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrl: './add-building.component.css'
})
export class AddBuildingComponent {
  building: Building = {
    name: '',
    address: '',
    id: BigInt(-1),
    floors: 1
  };

  constructor(
    private buildingService: BuildingService,
    private notificationService: NotificationService) { }

  addBuilding(): void {
    let data = {
      name: this.building.name,
      address: this.building.address,
      floors: this.building.floors
    };

    // todo Валидация

    console.log(data);

    this.buildingService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
    
    this.notificationService.show({
      content: "Запись успешно добавлена",
      animation: { type: "slide", duration: 100 },
      position: { horizontal: "center", vertical: "top" },
      type: { style: "success", icon: false },
      closable: false,
    })

    this.building = {
      name: '',
      address: '',
      id: BigInt(-1),
      floors: 1
    };
  }
}
