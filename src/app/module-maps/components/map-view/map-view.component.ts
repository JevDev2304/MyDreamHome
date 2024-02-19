import { Component, AfterViewInit, ViewChild,ElementRef, inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import { MapService, PlacesService ,DistanceService} from '../../services';
import { Map , Popup, Marker, LngLatLike} from 'mapbox-gl';
import { MainComponent } from '../../../main/main.component';
import { HousesService } from '../../../services/houses.service';
import { HobbiesService } from '../../../services/hobbies.service';
import { CategoriesService } from '../../../services/categories.service';
import { House } from '../../../models/house.model';
import Swal from 'sweetalert2';

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

  showPopUp: boolean = false;
  houseInfoSelected: House | undefined = undefined;

  // TO DO's: 
  // botón nueva búsqueda
  // cuadrar checkboxes
  // cambiar icono marcador

  @Input() checkedCategories: number[] = [];

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
      .setHTML('<h3>Ubicación actual</h3>' );

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
                          <h2>${infoLocation.name}</h2>`);
            new Marker({ color: 'yellow'} )
                .setLngLat(infoLocation.direction)
                .setPopup(popup)
                .addTo(this.map);

            if (this.distanceService.calcularDistancia(this.housingService.houses[i].direction, infoLocation.direction) <= 1) {
              let popup = new Popup()

              var marker = new Marker({ color: 'blue' })
                .setLngLat(this.housingService.houses[i].direction)
                .setPopup(popup)
                .addTo(this.map);

                marker.getElement().addEventListener('click', () => {
                  Swal.fire({
                    title: `<strong>${this.housingService.houses[i].direction}</strong>`,
                    icon: "info",
                    html: `
                    <div id="info-window">
                    <button class="close-button" onclick="toggleInfo()">X</button>
                    <h1>Nombre del lugar</h1>
                    <p class="info-title">Información del lugar</p>
                    <p id="descripcion">Descripción del lugar.</p>
                    <p id="valor">Valor: $100</p>
                    
                     <!-- Botón para pagar -->
                    <button onclick="pagar()">Pagar</button>
                </div>
                
                    `,
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    confirmButtonText: `
                      <i class="fa fa-thumbs-up"></i> Great!
                    `,
                    confirmButtonAriaLabel: "Thumbs up, great!",
                    cancelButtonText: `
                      <i class="fa fa-thumbs-down"></i>
                    `,
                    cancelButtonAriaLabel: "Thumbs down"
                  });
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
    element.style.width = '128px';
    element.style.height = '128px';
    return element;
  }

  ver_mas(houseInfo: House){
    
  }
}
