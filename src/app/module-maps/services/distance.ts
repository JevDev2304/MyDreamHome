import { Injectable } from '@angular/core';
import { LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {
    constructor(){}
     calcularDistancia(coord1: [number,number], coord2: [number,number]): number {
        const radioTierra = 6371; // Radio de la Tierra en kilómetros
      
        const [lon1, lat1] = coord1.map((coord) => (Math.PI / 180) * coord);
        const [lon2, lat2] = coord2.map((coord) => (Math.PI / 180) * coord);
      
        const dLat = lat2 - lat1;
        const dLon = lon2 - lon1;
      
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      
        const distancia = radioTierra * c; // Distancia en kilómetros
      
        return distancia;
     }
      
      
}
