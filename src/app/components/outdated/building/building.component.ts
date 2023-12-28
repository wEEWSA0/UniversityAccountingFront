import { Component, Input } from '@angular/core';
import { Building } from '../../../models/Building';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrl: './building.component.css'
})
export class BuildingComponent {

  @Input({required: true})
  building!: Building;
}
