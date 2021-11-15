import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {

  @Input() team: Team = {} as Team;

  @Output() teamSaved: EventEmitter<void> = new EventEmitter<void>();

  @Output() goBack: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private teamservice: TeamService
  ) { }



  ngOnInit(): void {
  }

  onGoBack(): void {
    this.goBack.emit();
  }

  save(): void {
    if (this.team.id) {
      this.teamservice.updateTeam(this.team)
        .subscribe(() => this.teamSaved.emit());
    } else {
      this.teamservice.addTeam(this.team)
          .subscribe(() => this.teamSaved.emit())
    }
  }

}
