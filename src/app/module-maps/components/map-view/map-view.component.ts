import { Component, AfterViewInit, ViewChild,ElementRef, inject, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { MapService, PlacesService ,DistanceService} from '../../services';
import { Map , Popup, Marker, LngLatLike} from 'mapbox-gl';
import { MainComponent } from '../../../main/main.component';
import { HousesService } from '../../../services/houses.service';
import { HobbiesService } from '../../../services/hobbies.service';
import { CategoriesService } from '../../../services/categories.service';
import Swal from 'sweetalert2';
import { House } from '../../../models/house.model';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements AfterViewInit, OnChanges{
  map!: Map;

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor(private placesService:PlacesService,
    private mapService : MapService,
    private distanceService: DistanceService,
    private mainComponent : MainComponent,
  ){}

  // TO DO's: 
  // botón nueva búsqueda
  // cuadrar checkboxes
  // cambiar icono marcador

  @Input() checkedCategories: number[] = [];
  @Output() clickOnHouseEvent = new EventEmitter<House>();

  housingService: HousesService = inject(HousesService)
  hobbiesService: HobbiesService = inject(HobbiesService)
  categoriesService: CategoriesService = inject(CategoriesService)

  ngAfterViewInit(): void {  if(!this.placesService.userLocation) throw Error("No hay placesService.userLocation")
  this.map = new Map({
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
    .addTo(this.map)

  this.mapService.setMap(this.map);
  }

  ngOnChanges(changes: SimpleChanges): void {
    var categoryList = this.categoriesService.categories

    console.log(this.checkedCategories);
    if(!this.placesService.userLocation) throw Error("No hay placesService.userLocation")

    let i: number;
    const userPosition = this.placesService.userLocation;
    for (i = 0; i < this.housingService.houses.length; i++) {
      if (this.distanceService.calcularDistancia(userPosition, this.housingService.houses[i].direction) <= 1) {
        for (let categoryId of this.checkedCategories) {
          var categoryInfo = this.hobbiesService.getCategoryLocations(categoryId);
  
          for (let infoLocation of categoryInfo){
            let popup = new Popup()
                .setHTML(`
                          <img style="max-width: 100%; border-radius: 50 px" src="${infoLocation.image}">
                          <h4>${infoLocation.name}</h4>`);
            new Marker({ element: this.createCustomMarkerElement(categoryList[categoryId].url) })
                .setLngLat(infoLocation.direction)
                .setPopup(popup)
                .addTo(this.map);

            if (this.distanceService.calcularDistancia(this.housingService.houses[i].direction, infoLocation.direction) <= 1) {

              const getHouseInfo = (id: string) =>{
                this.clickOnHouseEvent.emit(this.housingService.houses[parseInt(id)]);
              }

              var marker = new Marker({ color: 'blue' })
                .setLngLat(this.housingService.houses[i].direction)
                .addTo(this.map);
              marker.getElement().id = String(i);
              marker.getElement().addEventListener('click', function () {
                getHouseInfo(this.id);
              });
            }
          }
        }
      } 
    }
    this.mapService.setMap(this.map);
  }

  createCustomMarkerElement(iconUrl: string): HTMLElement {
    const element = document.createElement('div');
    element.className = 'custom-marker';
    element.style.backgroundImage = `url(${iconUrl})`;
    element.style.backgroundSize = '40px';
    element.style.width = '40px';
    element.style.height = '40px';
    return element;
  }

  clickOnHouse(houseInfo: House){
    this.clickOnHouseEvent.emit(houseInfo);
  }



}
