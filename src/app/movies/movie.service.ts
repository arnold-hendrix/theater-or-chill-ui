import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IMovie } from './movie';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  // access backend url through environment object.
  private baseUrl = environment.baseUrl;

  private _nowPlaying!: IMovie[];
  private _upcoming!: IMovie[];

  public get nowPlaying(): IMovie[] {
    // use getter to access Now Playing movies.
    return this._nowPlaying;
  }
  public set nowPlaying(value: IMovie[]) {
    // use setter to save Now Playing movies to reduce the number of server calls.
    this._nowPlaying = value;
  }

  public get upcoming(): IMovie[] {
    // use getter to access Upcoming movies.
    return this._upcoming;
  }
  public set upcoming(value: IMovie[]) {
    // use setter to save Upcoming movies to reduce the number of server calls.
    this._upcoming = value;
  }

  constructor(private http: HttpClient) {
    console.log('New instance of MovieService created.');
  }

  public getNowPlayingMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(`${this.baseUrl}/nowPlaying`).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  public getUpcomingMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(`${this.baseUrl}/upcoming`).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // check if error is originating from the client side.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }
    console.error(errorMessage); // display error message to the console.
    return throwError(errorMessage); // throw an error to the calling code.
  }
}
