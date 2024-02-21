import { Component, Inject, Input, OnChanges, OnInit, inject } from '@angular/core';
import { House } from '../../models/house.model';
import { DOCUMENT } from '@angular/common';
import emailjs from '@emailjs/browser';
import { AuthService } from '../../auth.service';
import { OAuthEvent, OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrl: './house-details.component.css'
})
export class HouseDetailsComponent implements OnChanges {
  @Input() houseInfo: House | undefined = undefined;
  private document = inject(DOCUMENT);
  user: any;
  sidebarDisplay: string = "none";

  constructor(
  private authService: AuthService) {

  }

  ngOnChanges(){
    this.sidebarDisplay = "block";
  }

  loadUserData(){
    this.user = this.authService.getProfile();
  }

  async send(){
    emailjs.init("QBqrpFvYApTIAWMZg");
    let response = await emailjs.send("service_g7770lr","template_hjs0khp",{
      price: this.houseInfo?.precio,
      contact: this.houseInfo?.contact,
      phone: this.houseInfo?.phone,
      link_image: this.houseInfo?.image,
      userMail: this.user.email,
      });
  }

  closeSidebar(){
    this.sidebarDisplay = "none";
  }

  like(){
    this.loadUserData();
    this.send();
    alert("The house information has been sent to your email !")
  }

  pagar(){
    alert("The payment has been successful !")
  }
}
