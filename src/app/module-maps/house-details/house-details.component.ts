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
export class HouseDetailsComponent implements OnChanges, OnInit{
  @Input() houseInfo: House | undefined = undefined;
  private document = inject(DOCUMENT);
  user: any;

  constructor(
  private authService: AuthService,
  private oauthService: OAuthService) {
    this.oauthService.events.subscribe((event: OAuthEvent) => {
      if (event.type === 'token_received') {
        this.loadUserData();
      } else if (event.type === 'session_terminated' || event.type === 'session_error') {
        this.user = null; // Reset user data on logout or session error
      }
    })
  }

  ngOnInit(){
    this.user = this.loadUserData()
  }

  ngOnChanges(){
    this.user = this.loadUserData()
    this.send()
  }

  loadUserData(){
    this.user = this.authService.getProfile();
  }

  async send(){
    console.log(this.user)
    emailjs.init("QBqrpFvYApTIAWMZg");
    let response = await emailjs.send("service_g7770lr","template_hjs0khp",{
      price: this.houseInfo?.precio,
      contact: this.houseInfo?.contact,
      phone: this.houseInfo?.phone,
      link_image: this.houseInfo?.image,
      userMail: "wilson.santiago.car@gmail.com",
      });

      alert("enviado");
  }
}
