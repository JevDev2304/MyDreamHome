import { Injectable } from '@angular/core';
import { Mall } from '../models/mall';
import { Sport } from '../models/sport.model';

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {

  constructor() { }

  malls:Mall[]=[
  {name: "Centro Comercial Santa Fe",
  direction: [-75.57431881707478,6.19687332608269],
  image: ''},
  {name: "Centro Comercial Oviedo",
  direction: [-75.57435830912374,6.198864458212508],
  image: ''},
  {name: "Centro Comercial El Tesoro ",
  direction: [-75.55838312510024,6.197883070007339, ],
  image: ''},
  {name: "Centro Comercial Los Molinos ",
  direction: [ -75.60371434775757,6.229871541417444,],
  image: ''},
  {name: "Centro Comercial Los Molinos ",
  direction: [ -75.60371434775757,6.229871541417444,],
  image: ''},
  {name: "Centro Comercial Premium Plaza",
  direction:[-75.57038650598865,6.228882000780776, ],
  image: ''},
  {name: "Centro Comercial San Diego",
  direction:[ -75.56889943851935,6.235351262588942],
  image: ''},
  {name: " Centro Comercial Mayorca",
  direction:[-75.60571378360602,6.161934535362502],
  image: ''},
  {name: "Centro Comercial Viva Envigado",
  direction:[ -75.59187770358099,6.176196696361756,],
  image: ''},
  {name: "Centro Comercial Arkadia",
  direction: [-75.59462793056852,6.212766348590184, ],
  image: ''},
  {name: "Centro Comercial Monterrey",
  direction:[-75.5767680612515,6.214129198998973, ],
  image: ''}
  ]
  
  sports: Sport[]=[
    {name: "Unidad deportiva Atanasio Girardot",
  direction: [  -75.59014071823948 , 6.256852313158851,],
  image: ''},
  {name: "Unidad deportiva Maria Luisa Calle",
  direction: [-75.59338787775582,6.214955035986686 ],
  image: ''},
  {name: "Unidad deportiva de Belen",
  direction:[ -75.58846806056944, 6.235428213317163],
  image: ''},
  {name: "Cancha de futbol,complejo deportivo Barrio Cristobal",
  direction: [ -75.60757310548468,6.247507219980744,],
  image: ''},
  {name: "Unidad Deportiva Santa Lucia-El Danubio",
  direction:[-75.60910504280874,6.25547932280759, ],
  image: ''},
  {name: "Cancha Belen Las violetas",
  direction:[ -75.61445672029075,6.235281596545394,],
  image: ''},
  {name: "Unidad deportiva Belen Rincon",
  direction:[ -75.60016930442232,6.214073908710852,],
  image: ''},
  {name:"Unidad deportiva Robledo",
  direction:[ -75.59647858487122,6.27533467281445,],
  image: ''},
  
  ]
}
