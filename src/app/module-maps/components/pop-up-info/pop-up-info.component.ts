import { Component, Input } from '@angular/core';
import { House } from '../../../models/house.model';

@Component({
  selector: 'app-pop-up-info',
  templateUrl: './pop-up-info.component.html'
})
export class PopUpInfoComponent {
  @Input() houseInfo: House | undefined = undefined
}
