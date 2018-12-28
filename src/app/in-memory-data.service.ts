import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Incredible' },
      { id: 12, name: 'Elastigirl' },
      { id: 13, name: 'Violet' },
      { id: 14, name: 'Dash' },
      { id: 15, name: 'Jack Jack' },
      { id: 16, name: 'Frozone' },
      { id: 17, name: 'Voyd' },
      { id: 18, name: 'Krushauer' },
      { id: 19, name: 'Reflux' },
      { id: 20, name: 'Brick' },
      { id: 21, name: 'He-Lectrix'},
      { id: 22, name: 'Screech'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}