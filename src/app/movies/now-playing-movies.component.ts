import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.css'],
})
export class NowPlayingMoviesComponent implements OnInit, OnDestroy {
  nowPlayingMovies: IMovie[] = [];
  Sub!: Subscription;
  errorMessage = '';
  posterPathBaseUrl: string = 'https://image.tmdb.org/t/p/original/';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.Sub = this.movieService
      .getNowPlayingMovies()
      .subscribe({
        next: (movies) => (this.nowPlayingMovies = movies),
        error: (err) => (this.errorMessage = err),
      });
  }

  ngOnDestroy(): void {
    this.Sub.unsubscribe();
  }
}
