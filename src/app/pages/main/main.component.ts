import { Component, OnInit } from '@angular/core';
import movies from '../../../assets/movies.json';
import actors from '../../../assets/actors.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent{
  movies = movies;
  actors = actors;
  mainActors = new Array();

  ngOnInit() {
    for (let index = 0; index < 12; index+=2) {
      this.mainActors.push(actors[index]);
    }
  }
}
