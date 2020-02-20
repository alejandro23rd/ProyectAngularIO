import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITareasService } from './ITareas.service';
import { Tarea } from '../model/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService implements ITareasService {

  constructor( private http: HttpClient ) {
    console.trace('TareasService constructor');

  }// constructor

  listar(): Observable<any> {

    const url = 'http://localhost:3000/tareas';
    console.debug(`GET ${url}`);

    return this.http.get(url);

  }
  
  crear(tarea: Tarea): Observable<Tarea> {
    const url = `http://localhost:3000/tareas/`;
    console.debug('POST %s tarea %o', url, tarea);
    return this.http.post<Tarea> (url, tarea);

  }

}// TareasService