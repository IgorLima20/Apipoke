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

  max_pag_b: number = 0;
  max_pag: number = 0;
  cur_pag: number = 1;

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.buscarPokemon(this.apiService.urlApi);
  }

  buscarPokemon(url: string){
    this.listaPokemon = [];
    this.apiService.buscarListaPokemon(url).subscribe(retorno => {
      this.count = retorno['count'];
      this.max_pag_b = this.count/20+1;
      this.max_pag = Number(this.max_pag_b.toFixed(0));
      this.next = retorno['next'];
      this.previous = retorno['previous'];
      console.log(this.previous,this.next);

      retorno['results'].forEach(pokemon => {
        this.apiService.buscarDadosPokemon(pokemon['url']).subscribe(dadosPokemon => {
          this.listaPokemon.push(dadosPokemon);
        })
      })
    });
  }

  page(pg: string) {
    if (pg = 'mais') {
      this.cur_pag += 1;
    } else {
      this.cur_pag -= 1;
    }
  }
}
