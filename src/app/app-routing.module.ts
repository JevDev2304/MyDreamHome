import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MapViewComponent } from './module-maps/components/map-view/map-view.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'main', component:MainComponent},
  {path: 'mapsview', component:MapViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
