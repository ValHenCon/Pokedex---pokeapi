import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = enviroment.baseUrl;

  constructor(private http: HttpClient) { }

  getpokemons(index: number){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
}
