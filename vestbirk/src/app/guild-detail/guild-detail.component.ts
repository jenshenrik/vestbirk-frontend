import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Guild } from '../guild';
import { GuildService } from '../guild.service';

@Component({
  selector: 'app-guild-detail',
  templateUrl: './guild-detail.component.html',
  styleUrls: ['./guild-detail.component.css']
})
export class GuildDetailComponent implements OnInit {

  @Input() guild: Guild;

  constructor(
    private route: ActivatedRoute,
    private guildService: GuildService,
    private location: Location) { }

  ngOnInit() {
    this.getGuild();
  }

  getGuild(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.guildService.getGuild(id)
      .subscribe(guild => this.guild = guild);
  }

}
