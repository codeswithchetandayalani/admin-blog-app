import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection,getDocs, query } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private afs: Firestore , private toastr:ToastrService) {}

  // create categories
  async createCategory(category: any) {
    try {
      const docRef = await addDoc(collection(this.afs, 'categories'), {
        category: category
      });
      // console.log('Document written with ID: ', docRef.id);
      this.toastr.success("Document created successfully");
    } catch (error) {
      // console.error('Error adding document: ', error);
      this.toastr.error('Something went wrong!');
    }
  }

  // get categories
  async getCategory() {
    return (
     await getDocs(query(collection(this.afs, 'categories')))
    ).docs.map((categories) => categories.data());
   }

   //update category
   async updateCategory( id:any,data:any){

   }
}
