import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  @Input() team: Team = {} as Team;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTeam()
  }

  goBack(): void {
    this.location.back();
  }

  getTeam(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.teamService.getTeam(id)
        .subscribe(team => this.team = team);
  }

  save(): void {
  if (this.team) {
    this.teamService.updateTeam(this.team)
      .subscribe(() => this.goBack());
  }
  }

}
