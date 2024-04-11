import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.scss']
})
export class DetallePokemonComponent {

  pokemon: any = '';
  pokemonType = [];
  pokemonImg = '';

  constructor(private pokemonService: PokemonService, private activatedRouter: ActivatedRoute){
      this.activatedRouter.params.subscribe(
        params => {
          this.getPokemon(params['id']);
        }
      );
   }

   getPokemon(id){
    this.pokemonService.getpokemons(id).subscribe(
      res => {
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
      },
      err =>{
        console.log(err);
      }
    )
   }

}


