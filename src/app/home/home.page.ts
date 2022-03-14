import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  urlImg = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

  listaPokemon = [
    {numero: 1, nome: 'bulbasaur', tipos: ['grass', 'poison'], foto: '001.png' },
    {numero: 4, nome: 'charmander', tipos: ['fire'], foto: '004.png' },
    {numero: 7, nome: 'squirtle', tipos: ['water'], foto: '007.png' },
    {numero: 25, nome: 'pikachu', tipos: ['eletric'], foto: '025.png' },
    {numero: 149, nome: 'dragonite', tipos: ['dragon', 'flying'], foto: '149.png' }

  ];

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.buscarListaPokemon(this.apiService.urlApi);

  }

}
