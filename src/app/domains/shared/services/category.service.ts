import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient);//enviar un request y obtener y procesar la peticion
  getAll(){
    return this.http.get<Category[]>('https://api.escuelajs.co/api/v1/categories')
  }
  constructor() { }
}
