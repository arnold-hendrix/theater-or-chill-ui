import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovie } from './movie';
import { MovieService } from './movie.service';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit, OnDestroy {
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  nowPlayingMovies!: IMovie[];
  upcomingMovies!: IMovie[];
  errorMessage = '';
  nowPlayingMoviesSub!: Subscription;
  upcomingMoviesSub!: Subscription;

  posterPathBaseUrl: string = 'https://image.tmdb.org/t/p/original/';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies(this.nowPlayingMoviesSub);  // get Now Playing Movies when initializing component.
    this.getMovies(this.upcomingMoviesSub);  // get Upcoming movies when initializing component.
  }

  getMovies(sub: Subscription): void {
    if (sub == this.nowPlayingMoviesSub) {
      // subscribe to movieService Observable and get Now Playing movies.
      this.nowPlayingMoviesSub = this.movieService
        .getNowPlayingMovies()
        .subscribe({
          next: (movies) => {
            this.nowPlayingMovies = movies;  // get Now Playing movies.
            this.movieService.nowPlaying = movies;  // set value in MovieService to be retrieved locally on future calls.
          },
          error: (err) => (this.errorMessage = err),
        });
    } else {
      //subscribe to movieService Observable and get Upcoming movies.
      this.upcomingMoviesSub = this.movieService.getUpcomingMovies().subscribe({
        next: (movies) => {
          this.upcomingMovies = movies;  // get Upcoming movies.
          this.movieService.upcoming = movies; // set value in MovieService to be retrieved locally on future calls.
        },
        error: (err) => (this.errorMessage = err),
      });
    }
  }

  ngOnDestroy(): void {
    this.nowPlayingMoviesSub.unsubscribe(); // gracefully end subscription to observable.
    this.upcomingMoviesSub.unsubscribe();
  }
}
