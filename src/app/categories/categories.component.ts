import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  constructor(private categoryService: CategoriesService) {}
  categories: any;
  formcategory:any;
  formstatus:any = 'Add';

  ngOnInit(): void {
    this.getCategory();
  }

  // to save the category
  onSubmit(formData: any) {
    this.categoryService.createCategory(formData.value.category);
    formData.reset();
  }

  async getCategory() {
    this.categories = await this.categoryService.getCategory();
  }

  onEdit(edit:any){
    this.formcategory = edit;
    this.formstatus = 'Edit';
    console.log(this.formcategory);
  }
}
