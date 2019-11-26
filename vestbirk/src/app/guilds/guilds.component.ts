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
    console.log("guilds", this.guilds);
  }

  getGuilds(): void {
    console.log('subscribing to guilds observable...');
    this.guildService.getGuilds()
      .subscribe(guilds => this.guilds = guilds);
  }
}
