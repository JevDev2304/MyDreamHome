import { Injectable } from '@angular/core';
import { House } from '../models/house.model';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor() { }

  houses: House[] = [
    {
      contact: "Pedro Jimenez",
      phone: '3007865786',
      direction: [-75.59874302355642, 6.212294937878664],
      image: ''
    },
    {
      contact: "Juan Valdés",
      phone: '3008792309',
      direction: [-75.59382193823679, 6.218216156626633],
      image: ''
    },
    {
      contact: "Wilson Carvajal",
      phone: '3008792307',
      direction: [-75.6089462582197, 6.232044630968907],
      image: ''
    },
    {
      contact: "Liliana Giraldo",
      phone: '3008799307',
      direction: [-75.60641425294384, 6.23163934436887],
      image: ''
    },
    {
      contact: "Luis Galvis",
      phone: '3008799307',
      direction: [-75.59915248893098, 6.231620070678426],
      image: ''
    },
    {
      contact: "Matilde Garcia",
      phone: '3008799807',
      direction: [-75.61050442158133, 6.237923638375033],
      image: ''
    },
    // 14 Casas adicionales
    {
      contact: "Catalina Rojas",
      phone: '3008100011',
      direction: [-75.590123, 6.230987],
      image: ''
    },
    {
      contact: "Javier Mendoza",
      phone: '3008100012',
      direction: [-75.592345, 6.235678],
      image: ''
    },
    {
      contact: "Maria Gonzalez",
      phone: '3008100013',
      direction: [-75.605432, 6.239876],
      image: ''
    },
    {
      contact: "Carlos Soto",
      phone: '3008100014',
      direction: [-75.603219, 6.225678],
      image: ''
    },
    {
      contact: "Diana Rios",
      phone: '3008100015',
      direction: [-75.612345, 6.220987],
      image: ''
    },
    {
      contact: "Andres Perez",
      phone: '3008100016',
      direction: [-75.598765, 6.215432],
      image: ''
    },
    {
      contact: "Laura Montoya",
      phone: '3008100017',
      direction: [-75.596543, 6.229876],
      image: ''
    },
    {
      contact: "Camilo Restrepo",
      phone: '3008100018',
      direction: [-75.590876, 6.235432],
      image: ''
    },
    {
      contact: "Isabel Gomez",
      phone: '3008100019',
      direction: [-75.607654, 6.242345],
      image: ''
    },
    {
      contact: "Sergio Medina",
      phone: '3008100020',
      direction: [-75.612987, 6.228765],
      image: ''
    },
    // 10 Casas más
    {
      contact: "Ana Ramirez",
      phone: '3008100021',
      direction: [-75.596789, 6.221345],
      image: ''
    },
    {
      contact: "Alejandro Herrera",
      phone: '3008100022',
      direction: [-75.601234, 6.236789],
      image: ''
    },
    {
      contact: "Valentina Cardona",
      phone: '3008100023',
      direction: [-75.605678, 6.217890],
      image: ''
    },
    {
      contact: "Hector Suarez",
      phone: '3008100024',
      direction: [-75.611234, 6.223456],
      image: ''
    },
    {
      contact: "Adriana Lopez",
      phone: '3008100025',
      direction: [-75.599876, 6.219012],
      image: ''
    },
    {
      contact: "Ricardo Gutiérrez",
      phone: '3008100026',
      direction: [-75.593456, 6.233456],
      image: ''
    },
    {
      contact: "Isabella Fernandez",
      phone: '3008100027',
      direction: [-75.602345, 6.227890],
      image: ''
    },
    {
      contact: "Miguel Torres",
      phone: '3008100028',
      direction: [-75.596789, 6.240123],
      image: ''
    },
    {
      contact: "Elena Morales",
      phone: '3008100029',
      direction: [-75.600123, 6.231234],
      image: ''
    },
    {
      contact: "Diego Castro",
      phone: '3008100030',
      direction: [-75.608901, 6.226789],
      image: ''
    },
    {
      contact:"Luis Alfredo Vélez",
      phone:'3008100015',
      direction:[-75.60844516782458,6.257036900474013],
      image: ''
    }
  ];
}
