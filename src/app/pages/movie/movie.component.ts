import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Location } from '@angular/common';
import movies from '../../../assets/movies.json';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  name = '';
  movies: Movie[] = movies; // Use the Movie interface to define the structure
  movie: Movie[] = [];
  //Object Injection
  constructor(
    private activeatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private location: Location
  ) {}

  ngOnInit() {
    this.name = this.activeatedRoute.snapshot.queryParamMap.get('name') || '';
    for (const item of movies) {
      if (item.name == this.name) {
        this.movie.push(item);
      }
    }
    console.log(this.movie);
  }

  getSafeVideoUrl(): SafeResourceUrl {
    let src;
    for (const item of this.movie) {
      src = item.videoexamplelink;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(src || '');
  }

  backClicked() {
    this.location.back();
  }
}

export interface Movie {
  idx: number;
  name: any;
  year: any;
  time: any;
  image: any;
  score: any;
  plot: any;
  categories: any[];
  videoexamplelink: any;
  actors: any[];
  director: any[];
  writer: any[];
}
