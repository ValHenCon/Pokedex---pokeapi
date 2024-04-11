import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePokemonComponent } from './components/detalle-pokemon/detalle-pokemon.component';
import { TablaComponent } from './components/tabla/tabla.component';

const routes: Routes = [
  {path: 'home', component: TablaComponent},
  {path: 'pokedetail/:id', component: DetallePokemonComponent},
  {path: '',pathMatch: 'full', redirectTo: 'home'},
  {path: '**',pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
