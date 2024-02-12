import { Component, EventEmitter, Output, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categoriesService: CategoriesService = inject(CategoriesService)
  @Output() categoriesEvent = new EventEmitter<number[]>();
  categoriesChecked: number[] = []
  categories: { [id: number]: Category; } = {};


  constructor(){
    this.categories = this.categoriesService.categories;
    console.log(this.categories);
  }

  getAlbumId(e:any, category:string)
  {
    if(e.target.checked)
    {
        this.categoriesChecked.push(parseInt(category));
    }
    else
    {
        this.categoriesChecked = this.categoriesChecked.filter(m=>m!=parseInt(category));
    }
    this.categoriesEvent.emit(this.categoriesChecked); 
  }
}
