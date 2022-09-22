import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';
import { User } from '../models/User';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = "http://localhost:5001/items" //url "Items"
  private url_Users = "http://localhost:5001/users" // url users

  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]> {
    return this.http.get<Item[]>(this.url)
  }

  postItem(newValorItem:Item):Observable<Item>{
    return this.http.post<Item>(this.url, newValorItem ,httpOptions)
  }

  editItem(itemtoEdit:Item):Observable<Item> {
    const userUrl = `${this.url}/${itemtoEdit.id}`
    return this.http.put<Item>(userUrl, itemtoEdit,httpOptions)
  }

  deleteItem(itemdelete:Item):Observable<Item> {
    const itemUrl = `${this.url}/${itemdelete.id}`
    return this.http.delete<Item>(itemUrl, httpOptions)
  }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.url_Users)
  }
}
