import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuildsComponent } from './guilds/guilds.component';
import { GuildDetailComponent } from './guild-detail/guild-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/guilds', pathMatch: 'full' },
  { path: 'guilds', component: GuildsComponent },
  { path: 'guilds/:id', component: GuildDetailComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
