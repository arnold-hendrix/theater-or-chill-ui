import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css'],
})
export class UpcomingMoviesComponent implements OnInit, OnDestroy {
  upcomingMovies: IMovie[] = [];
  Sub!: Subscription;
  errorMessage = '';
  posterPathBaseUrl: string = 'https://image.tmdb.org/t/p/original/';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.Sub = this.movieService.getUpcomingMovies().subscribe({
      next: (movies) => (this.upcomingMovies = movies),
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.Sub.unsubscribe();
  }
}
