import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation: [number, number] | undefined;
  get isUserLocationReady(): boolean{
    return !!this.userLocation;
  }
  constructor(private http: HttpClient) { 
    this.getUserLocation();
  }
  public async getUserLocation():Promise<[number,number]>{
    return new Promise((resolve,reject) =>{
      navigator.geolocation.getCurrentPosition(
        ({coords})=>{
          this.userLocation=[coords.longitude,coords.latitude];
        resolve(this.userLocation);
        },
        (err) =>{
          alert("No se pudo obtener la geolocalización");
          console.log(err);
          reject();
        }
        );
     
    });
  }
  getPlacesByQuery(query: string = ''){
    //todo :evaluar cuando el query es nulo
    this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${ query }.json?country=co&proximity=-75.5934099659757%2C6.234590514434231&language=es&access_token=pk.eyJ1IjoiamV2ZGV2MjMwNCIsImEiOiJjbHNmcnNqY2swaDlvMmxwMXdzZ3EzaXdmIn0._vptDCJ_3jSS68ru_V7x1A`)
    .subscribe(console.log);
  }
}
