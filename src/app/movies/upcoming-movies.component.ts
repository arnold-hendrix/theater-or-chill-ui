import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css'],
})
export class UpcomingMoviesComponent implements OnInit {
  upcomingMovies!: IMovie[];
  errorMessage = '';
  posterPathBaseUrl: string = 'https://image.tmdb.org/t/p/original/';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
     this.upcomingMovies = this.movieService.upcoming;
  }
}
