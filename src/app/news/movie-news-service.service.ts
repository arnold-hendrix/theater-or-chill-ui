import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IMovieNews } from './movie-news';

@Injectable({
  providedIn: 'root',
})

export class MovieNewsServiceService {
  private newsUrl = environment.newsUrl;
  private _movieNewsArticles!: IMovieNews[];

  public get movieNewsArticles(): IMovieNews[] {
    return this._movieNewsArticles;
  }

  public set movieNewsArticles(value: IMovieNews[]) {
    this._movieNewsArticles = value;
  }

  constructor(private http: HttpClient) {}

  public getMovieNews(): Observable<IMovieNews[]> {
    return this.http.get<IMovieNews[]>(`${this.newsUrl}/latest`).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
