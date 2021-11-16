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

  teams: Team[] = [];

  constructor(
    private teamService: TeamService,
  ) { }

  toggleNav() {
    let x = document.getElementById("nav-principal")!;
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
  }



  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams()
        .subscribe((teams: Team[]) => this.teams = teams);
  }



}


