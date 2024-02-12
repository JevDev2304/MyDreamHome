import { Component, AfterViewInit, ViewChild,ElementRef, inject, Input} from '@angular/core';
import { MapService, PlacesService ,DistanceService} from '../../services';
import { Map , Popup, Marker, LngLatLike} from 'mapbox-gl';
import { MainComponent } from '../../../main/main.component';
import { HousesService } from '../../../services/houses.service';
import { HobbiesService } from '../../../services/hobbies.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements AfterViewInit{

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor(private placesService:PlacesService,
    private mapService : MapService,
    private distanceService: DistanceService,
    private mainComponent : MainComponent,
  ){}

  @Input() checkedCategories: number[] = [];

  housingService: HousesService = inject(HousesService)
  hobbiesService: HobbiesService = inject(HobbiesService)

  ngAfterViewInit(): void {  if(!this.placesService.userLocation) throw Error("No hay placesService.userLocation")
  const map = new Map({
    container: this.mapDivElement.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: this.placesService.userLocation, // starting position [lng, lat]
    zoom: 14, // starting zoom
  });

  let popup = new Popup()
    .setHTML('<h6>Ubicación actual</h6>' );

  new Marker({color: 'red'})
    .setLngLat(this.placesService.userLocation)
    .setPopup(popup)
    .addTo(map)
    let i, j,k: number;

  const userPosition = this.placesService.userLocation

  for (i = 0; i < this.housingService.houses.length; i++) {
    for (k = 0; k< this.hobbiesService.sports.length; k++){
      if (this.distanceService.calcularDistancia(userPosition, this.housingService.houses[i].direction) <= 1) {
        for (let category of this.mainComponent.datos) {
          if (category.checked && category.id === 0) {
            if (this.distanceService.calcularDistancia(this.housingService.houses[i].direction, this.hobbiesService.sports[k].direction) <= 1) {
              let popup = new Popup()
                .setHTML(`<h6>Casa de ${this.housingService.houses[i].contact}</h6>
                          <p>Contacto: ${this.housingService.houses[i].phone} </p>`);
              new Marker({ color: 'blue' })
                .setLngLat(this.housingService.houses[i].direction)
                .setPopup(popup)
                .addTo(map);
            }
          }
        }
      }
    }

    for (j = 0; j < this.hobbiesService.malls.length; j++) {
      if (this.distanceService.calcularDistancia(userPosition, this.housingService.houses[i].direction) <= 1) {
        for (let category of this.mainComponent.datos) {
          if (category.checked && category.id === 1) {
            if (this.distanceService.calcularDistancia(this.housingService.houses[i].direction, this.hobbiesService.malls[j].direction) <= 1) {
              let popup = new Popup()
                .setHTML(`<h6>Casa de ${this.housingService.houses[i].contact}</h6>
                          <p>Contacto: ${this.housingService.houses[i].phone} </p>`);
              new Marker({ color: 'blue' })
                .setLngLat(this.housingService.houses[i].direction)
                .setPopup(popup)
                .addTo(map);
            }
          }
        }
      }
    }
  }

this.mapService.setMap(map);


}
}
