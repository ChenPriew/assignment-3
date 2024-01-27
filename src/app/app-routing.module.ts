import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MovieComponent } from './pages/movie/movie.component';
import { ActorComponent } from './pages/actor/actor.component';

const routes: Routes = [
  { path : "" , component : MainComponent},
  { path : "movie", component : MovieComponent},
  { path : "actor", component : ActorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
