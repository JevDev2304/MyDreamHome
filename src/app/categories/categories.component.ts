import { Component, EventEmitter, Output, inject } from '@angular/core';
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

  categories: { [id: number]: Category; } = this.categoriesService.categories

  getAlbumId(e:any, category:number)
  {
    if(e.target.checked)
    {
        console.log(category + 'checked');
        this.categoriesChecked.push(category);
    }
    else
    {
        console.log(category + 'Unchecked');
        this.categoriesChecked = this.categoriesChecked.filter(m=>m!=category);
    }
    this.categoriesEvent.emit(this.categoriesChecked);
  }
}
