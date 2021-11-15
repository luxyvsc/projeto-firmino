import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss']
})
export class NewTeamComponent implements OnInit {

  team: Team = {} as Team;
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  onGoBack(){
    this.location.back();
  }
  onSaved() {
    this.location.back();
  }

}
