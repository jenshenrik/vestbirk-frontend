import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../environments/environment';
import { Guild } from './guild';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GuildService {

    private guildsUrl = environment.apiUrl + '/guilds';
    
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getGuilds(): Observable<Guild[]> {
        return this.http.get<Guild[]>(this.guildsUrl)
          .pipe(
            tap(_ => this.log('fetched guilds')),
            catchError(this.handleError<Guild[]>('getGuilds', []))
          );
  }

  getGuildNo404<Data>(id: number): Observable<Guild> {
        const url=`${this.guildsUrl}/?id=${id}`;
        return this.http.get<Guild[]>(url)
          .pipe(
            map(guilds => guilds[0]),
            tap(g => {
              const outcome = g ? `fetched`: `did not find`;
              this.log(`${outcome} guild id=${id}`);
            }),
            catchError(this.handleError<Guild>(`getGuild id=${id}`))
          );
  }

  getGuild(id: number): Observable<Guild> {
        const url=`${this.guildsUrl}/${id}`;
        return this.http.get<Guild>(url).pipe(
          tap(_ => this.log(`fetched guild id=${id}`)),
          catchError(this.handleError<Guild>(`getGuild id=${id}`))
        );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`GuildService: ${message}`);
  }
}
