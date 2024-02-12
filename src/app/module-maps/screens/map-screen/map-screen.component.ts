import { Component, Input} from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrl: './map-screen.component.css'
})
export class MapScreenComponent{
  @Input() checkedCategories: number[] = [];

  constructor(private placesService : PlacesService){}
  get isUserLocationReady(){
    return this.placesService.isUserLocationReady;
  }
}
