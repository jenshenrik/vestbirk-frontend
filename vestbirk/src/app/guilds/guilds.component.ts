import { Component, OnInit } from '@angular/core';
import { Guild } from '../guild';
import { GuildService } from '../guild.service';

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.css']
})
export class GuildsComponent implements OnInit {

  guilds: Guild[];

  constructor(private guildService: GuildService) { }

  ngOnInit() {
    this.getGuilds();
  }

  getGuilds(): void {
    this.guildService.getGuilds()
      .subscribe(guilds => this.guilds = guilds);
  }
}
