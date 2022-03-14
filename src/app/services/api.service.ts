import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApi = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  buscarListaPokemon(url: string) {
    const listaPokemon = [];

    this.http.get(url).subscribe(dadosRetorno => {
      dadosRetorno['results'].forEach(cadaPokemon => {

        const dadosPokemon = this.buscarDadosPokemon(cadaPokemon['url']);

        listaPokemon.push(dadosPokemon);
      });
    });
    console.log(listaPokemon):
  }

  buscarDadosPokemon(url: string){
    return this.http.get(url).subscribe(dadosPokemon => {
      return dadosPokemon;
    });
  }
}
