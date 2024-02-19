import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { OAuthEvent, OAuthService } from 'angular-oauth2-oidc';
import { Category } from '../models/category.model';
import { MapService, PlacesService ,DistanceService} from '../module-maps/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: any;
  checkedCategories: number[] = []
  currentCheckedCategories: number[] = []

  constructor(
    private authService: AuthService,
    private router: Router,
    private oauthService: OAuthService,
    private distanceService: DistanceService,
    private mapService: MapService,
  ) {
    this.oauthService.events.subscribe((event: OAuthEvent) => {
      if (event.type === 'token_received') {
        this.loadUserData();
      } else if (event.type === 'session_terminated' || event.type === 'session_error') {
        this.user = null; // Reset user data on logout or session error
      }
    });
  }
  map :boolean = false;
  selected: Category[]=[]

  updateCheckedCategories(newCheckedCategories: number[]){
    this.checkedCategories = newCheckedCategories;
  }

  ngOnInit() {
    this.loadUserData(); // Load user data on component initialization
    
    console.log(this.user);
  }

  loadUserData() {
    this.user = this.authService.getProfile();
  }

  showData() {
    this.loadUserData(); // Refresh user data before showing
    const data = JSON.stringify(this.user);
    console.log(data);
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
  mapIsReady(){
    this.map=true;
    this.currentCheckedCategories = this.checkedCategories;
    console.log(this.currentCheckedCategories);
  }

  restart(){
    window.location.reload()
  }
}
