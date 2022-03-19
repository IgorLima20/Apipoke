import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  urlImg = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

  listaPokemon = [];

  count: number = 0;
  next: string = '';
  previous: string = '';

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.buscarPokemon(this.apiService.urlApi);
  }

  buscarPokemon(url: string){
    this.listaPokemon = [];
    this.apiService.buscarListaPokemon(url).subscribe(retorno => {
      this.count = retorno['count'];
      this.next = retorno['next'];
      this.previous = retorno['previous'];

      retorno['results'].forEach(pokemon => {
        this.apiService.buscarDadosPokemon(pokemon['url']).subscribe(dadosPokemon => {
          this.listaPokemon.push(dadosPokemon);
        })
      })
    });
  }
}
