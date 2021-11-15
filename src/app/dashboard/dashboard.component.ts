import { Component, OnInit } from '@angular/core';

import { Team } from '../team';
import { TEAMS } from '../firmino-teams';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  teams = TEAMS;

  constructor(
    private teamService: TeamService,
  ) { }

  getTeams(): void {
    this.teamService.getTeams()
        .subscribe((teams: Team[]) => this.teams = teams);
  }

  ngOnInit(): void {
    this.getTeams();
  }

  getHeroes(): void {
    this.teamService.getTeams()
      .subscribe(teams => this.teams = teams.slice(1, 3));
  }

}


