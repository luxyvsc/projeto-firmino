import { Component, OnInit } from '@angular/core';

import { Team } from '../team';
import { TEAMS } from '../firmino-teams';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  teams = TEAMS;

  selectedTeam?: Team;
  onSelect(team: Team): void {
    this.selectedTeam = team;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
