import { Component, AfterViewInit, ViewChild,ElementRef} from '@angular/core';
import { MapService, PlacesService ,DistanceService} from '../../services';
import { Map , Popup, Marker, LngLatLike} from 'mapbox-gl';
import { House } from '../../../models/house.model';
import { Mall } from '../../../models/mall';
import { Sport } from '../../../models/sport.model';
import { MainComponent } from '../../../main/main.component';
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
  malls:Mall[]=[
    {name: "Centro Comercial Santa Fe",
  direction: [-75.57431881707478,6.19687332608269]},
  {name: "Centro Comercial Oviedo",
  direction: [-75.57435830912374,6.198864458212508 ]},
  {name: "Centro Comercial El Tesoro ",
  direction: [-75.55838312510024,6.197883070007339, ]},
  {name: "Centro Comercial Los Molinos ",
  direction: [ -75.60371434775757,6.229871541417444,]},
  {name: "Centro Comercial Los Molinos ",
  direction: [ -75.60371434775757,6.229871541417444,]},
  {name: "Centro Comercial Premium Plaza",
  direction:[-75.57038650598865,6.228882000780776, ]},
  {name: "Centro Comercial San Diego",
  direction:[ -75.56889943851935,6.235351262588942]},
  {name: " Centro Comercial Mayorca",
  direction:[-75.60571378360602,6.161934535362502]},
  {name: "Centro Comercial Viva Envigado",
  direction:[ -75.59187770358099,6.176196696361756,]},
  {name: "Centro Comercial Arkadia",
  direction: [-75.59462793056852,6.212766348590184, ]},
  {name: "Centro Comercial Monterrey",
  direction:[-75.5767680612515,6.214129198998973, ]}
  
  
  
  ]
  sports: Sport[]=[
    {name: "Unidad deportiva Atanasio Girardot",
  direction: [  -75.59014071823948 , 6.256852313158851,]},
  {name: "Unidad deportiva Maria Luisa Calle",
  direction: [-75.59338787775582,6.214955035986686 ]},
  {name: "Unidad deportiva de Belen",
  direction:[ -75.58846806056944, 6.235428213317163]},
  {name: "Cancha de futbol,complejo deportivo Barrio Cristobal",
  direction: [ -75.60757310548468,6.247507219980744,]},
  {name: "Unidad Deportiva Santa Lucia-El Danubio",
  direction:[-75.60910504280874,6.25547932280759, ]},
  {name: "Cancha Belen Las violetas",
  direction:[ -75.61445672029075,6.235281596545394,]},
  {name: "Unidad deportiva Belen Rincon",
  direction:[ -75.60016930442232,6.214073908710852,]},
  {name:"Unidad deportiva Robledo",
  direction:[ -75.59647858487122,6.27533467281445,]},
  
  ]
  houses: House[] = [
    {
      contact: "Pedro Jimenez",
      phone: '3007865786',
      direction: [-75.59874302355642, 6.212294937878664],
    },
    {
      contact: "Juan Valdés",
      phone: '3008792309',
      direction: [-75.59382193823679, 6.218216156626633],
    },
    {
      contact: "Wilson Carvajal",
      phone: '3008792307',
      direction: [-75.6089462582197, 6.232044630968907],
    },
    {
      contact: "Liliana Giraldo",
      phone: '3008799307',
      direction: [-75.60641425294384, 6.23163934436887],
    },
    {
      contact: "Luis Galvis",
      phone: '3008799307',
      direction: [-75.59915248893098, 6.231620070678426],
    },
    {
      contact: "Matilde Garcia",
      phone: '3008799807',
      direction: [-75.61050442158133, 6.237923638375033],
    },
    // 14 Casas adicionales
    {
      contact: "Catalina Rojas",
      phone: '3008100011',
      direction: [-75.590123, 6.230987],
    },
    {
      contact: "Javier Mendoza",
      phone: '3008100012',
      direction: [-75.592345, 6.235678],
    },
    {
      contact: "Maria Gonzalez",
      phone: '3008100013',
      direction: [-75.605432, 6.239876],
    },
    {
      contact: "Carlos Soto",
      phone: '3008100014',
      direction: [-75.603219, 6.225678],
    },
    {
      contact: "Diana Rios",
      phone: '3008100015',
      direction: [-75.612345, 6.220987],
    },
    {
      contact: "Andres Perez",
      phone: '3008100016',
      direction: [-75.598765, 6.215432],
    },
    {
      contact: "Laura Montoya",
      phone: '3008100017',
      direction: [-75.596543, 6.229876],
    },
    {
      contact: "Camilo Restrepo",
      phone: '3008100018',
      direction: [-75.590876, 6.235432],
    },
    {
      contact: "Isabel Gomez",
      phone: '3008100019',
      direction: [-75.607654, 6.242345],
    },
    {
      contact: "Sergio Medina",
      phone: '3008100020',
      direction: [-75.612987, 6.228765],
    },
    // 10 Casas más
    {
      contact: "Ana Ramirez",
      phone: '3008100021',
      direction: [-75.596789, 6.221345],
    },
    {
      contact: "Alejandro Herrera",
      phone: '3008100022',
      direction: [-75.601234, 6.236789],
    },
    {
      contact: "Valentina Cardona",
      phone: '3008100023',
      direction: [-75.605678, 6.217890],
    },
    {
      contact: "Hector Suarez",
      phone: '3008100024',
      direction: [-75.611234, 6.223456],
    },
    {
      contact: "Adriana Lopez",
      phone: '3008100025',
      direction: [-75.599876, 6.219012],
    },
    {
      contact: "Ricardo Gutiérrez",
      phone: '3008100026',
      direction: [-75.593456, 6.233456],
    },
    {
      contact: "Isabella Fernandez",
      phone: '3008100027',
      direction: [-75.602345, 6.227890],
    },
    {
      contact: "Miguel Torres",
      phone: '3008100028',
      direction: [-75.596789, 6.240123],
    },
    {
      contact: "Elena Morales",
      phone: '3008100029',
      direction: [-75.600123, 6.231234],
    },
    {
      contact: "Diego Castro",
      phone: '3008100030',
      direction: [-75.608901, 6.226789],
    },
    {contact:"Luis Alfredo Vélez",
  phone:'3008100015',
direction:[-75.60844516782458,6.257036900474013]}
  ];
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
for (i = 0; i < this.houses.length; i++) {
for (k = 0; k< this.sports.length; k++){
  if (this.distanceService.calcularDistancia(userPosition, this.houses[i].direction) <= 1) {
    for (let category of this.mainComponent.datos) {
      if (category.checked && category.id === 0) {
        if (this.distanceService.calcularDistancia(this.houses[i].direction, this.sports[k].direction) <= 1) {
          let popup = new Popup()
            .setHTML(`<h6>Casa de ${this.houses[i].contact}</h6>
                      <p>Contacto: ${this.houses[i].phone} </p>`);
          new Marker({ color: 'blue' })
            .setLngLat(this.houses[i].direction)
            .setPopup(popup)
            .addTo(map);
        }
      }
    }
  }
  
}
for (j = 0; j < this.malls.length; j++) {
  if (this.distanceService.calcularDistancia(userPosition, this.houses[i].direction) <= 1) {
    for (let category of this.mainComponent.datos) {
      if (category.checked && category.id === 1) {
        if (this.distanceService.calcularDistancia(this.houses[i].direction, this.malls[j].direction) <= 1) {
          let popup = new Popup()
            .setHTML(`<h6>Casa de ${this.houses[i].contact}</h6>
                      <p>Contacto: ${this.houses[i].phone} </p>`);
          new Marker({ color: 'blue' })
            .setLngLat(this.houses[i].direction)
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

