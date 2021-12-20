import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IMovie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private serverUrlMovie = 'http://localhost:8080/movies';

  constructor(private http: HttpClient) {}

  public getNowPlayingMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(`${this.serverUrlMovie}/nowPlaying`).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  public getNowPlayingMovieByTitle(title: any): Observable<IMovie> {
    return this.http
      .get<IMovie>(`${this.serverUrlMovie}/nowPlaying`, {
        params: title,
      })
      .pipe(
        tap((data) => console.log('All', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  public getUpcomingMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(`${this.serverUrlMovie}/upcoming`).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  public getUpcomingMovieByTitle(title: any): Observable<IMovie> {
    return this.http
      .get<IMovie>(`${this.serverUrlMovie}/upcoming`, {
        params: title,
      })
      .pipe(
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
