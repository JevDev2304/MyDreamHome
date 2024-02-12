import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  categories: { [id: number]: Category; } = {
    0 : {name:"⚽  Sport"},
    1 : {name:"👜 Shopping"},
    2 : {name:"📽️  Cinema(NOT WORKING)"},
    3 : {name:"🏛️  Museum(NOT WORKING)"}
 };
}
