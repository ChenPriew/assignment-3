import { Component } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import actors from '../../../assets/actors.json';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.scss'
})
export class ActorComponent {

  name = '';
  actors = actors;
  actor = new Array();

  constructor(
    private activeatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private location: Location
  ) {}

  ngOnInit() {
    this.name = this.activeatedRoute.snapshot.queryParamMap.get('name') || '';
    console.log(this.name);
    for (const item of actors) {
      if (item.name+' '+item.surname == this.name) {
        this.actor.push(item);
      }
    }
    console.log(this.actor);
  }

  backClicked() {
    this.location.back();
  }

  getSafeVideoUrl(): SafeResourceUrl {
    let src;
    for (const item of this.actor) {
      src = item.videolink;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(src || '');
  }
}
