import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) {}
  obtenerPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(tap(console.log));
  }
}
