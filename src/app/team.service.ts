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


  private teamsUrl = 'api/teams';

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl)
  }


private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {


    this.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  updateTeam(team: Team): Observable<any> {
    return this.http.put(this.teamsUrl, team, this.httpOptions).pipe(
      tap(_ => this.log(`updated team id=${team.id}`)),
      catchError(this.handleError<any>('updateTeam'))
    );
  }

  /** POST: add a new hero to the server */
  addTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(this.teamsUrl, team, this.httpOptions).pipe(
      tap((newTeam: Team) => this.log(`added team w/ id=${newTeam.id}`)),
      catchError(this.handleError<Team>('addTeam'))
    );
  }

  getTeam(id: number): Observable<Team> {
    const team = TEAMS.find(h => h.id === id)!;
    return of(team);
  }

  private log(message: string) {
  this.messageService.add(`TeamService: ${message}`);
  }





  constructor(private http: HttpClient, private messageService: MessageService) { }
}
