import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.css'],
})
export class NowPlayingMoviesComponent implements OnInit {
  nowPlayingMovies!: IMovie[];
  errorMessage = '';
  posterPathBaseUrl: string = 'https://image.tmdb.org/t/p/original/';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
     this.nowPlayingMovies = this.movieService.nowPlaying;
  }
}
