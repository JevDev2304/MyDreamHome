import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  categories: { [id: number]: Category; } = {
    0 : {name:"⚽  Sport", url:"https://cdn-icons-png.flaticon.com/128/3661/3661230.png"},
    1 : {name:"👜 Shopping", url:"https://cdn-icons-png.flaticon.com/128/11792/11792501.png"},
    2 : {name:"📖  Libraries", url:"https://cdn-icons-png.flaticon.com/128/1245/1245339.png"},
    3 : {name:"🏋️  Gym", url:"https://cdn-icons-png.flaticon.com/128/12138/12138684.png"},
    4 : {name:"🌳  Parks", url:"https://cdn-icons-png.flaticon.com/128/8325/8325733.png"},
    5 : {name:"🏛️ Museums", url:"https://cdn-icons-png.flaticon.com/128/4615/4615742.png"}
 };
}
