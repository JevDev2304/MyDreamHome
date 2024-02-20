import { Component, Input} from '@angular/core';
import { PlacesService } from '../../services';
import { House } from '../../../models/house.model';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrl: './map-screen.component.css'
})
export class MapScreenComponent{
  @Input() checkedCategories: number[] = [];
  houseSelected: House | undefined = undefined;
  showDetails: boolean = false;

  constructor(private placesService : PlacesService){}
  get isUserLocationReady(){
    return this.placesService.isUserLocationReady;
  }

  clickOnHouse(houseInfo: House){
    this.houseSelected = houseInfo;
    this.showDetails = true;
  }
}
