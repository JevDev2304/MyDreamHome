import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiamV2ZGV2MjMwNCIsImEiOiJjbHNmcnNqY2swaDlvMmxwMXdzZ3EzaXdmIn0._vptDCJ_3jSS68ru_V7x1A';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

if (!navigator.geolocation){
  alert('Navegador no soporta la geolocalización')
  throw new Error( 'Navegador no soporta la geolocalización')
}
