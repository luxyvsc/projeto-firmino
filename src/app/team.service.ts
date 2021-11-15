import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Team } from './team';
import { TEAMS } from './firmino-teams';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {


  getTeams(): Observable<Team[]> {
    const teams = of(TEAMS);
    return teams;
  }

  getTeam(id: number): Observable<Team> {
    const team = TEAMS.find(h => h.id === id)!;
    return of(team);
  }





  constructor(private http: HttpClient, private messageService: MessageService) { }
}
