import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from 'ngx-hero-detail';

@Component({
  selector: 'app-hero-detail-wrapper',
  templateUrl: './hero-detail-wrapper.component.html',
  styleUrls: ['./hero-detail-wrapper.component.css']
})
export class HeroDetailWrapperComponent implements OnInit {

  hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  save(heroModified: Hero): void {
    if(heroModified) {
      this.hero = heroModified;
      this.heroService.updateHero(this.hero).subscribe();
    }
  }

}
