import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Team } from './team';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      {id: 1, name: 'Figueirense', champions: '', imageUrl: ''},
      {id: 2, name: 'Hoffenheim', champions: '', imageUrl: ''},
      {id: 3, name: 'Liverpool', champions: '', imageUrl: ''},
    ];
    return {teams};
  }

  genId(teams: Team[]): number {
    return teams.length > 0 ? Math.max(...teams.map(team => team.id)) + 1 : 0;
  }
}
