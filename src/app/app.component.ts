import { Component, OnDestroy, OnInit } from '@angular/core';
import { faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import { IMovie } from './movies/movie';
import { MovieService } from './movies/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faShoppingBag = faShoppingBag;
  faUser = faUser;
  currentYear: number = new Date().getFullYear();
  movies!: IMovie[];

  constructor(private movieService: MovieService) {}

  // function for search functionality.
  public searchMovies(title: string): void {
    const results: IMovie[] = [];
    const allMovies: IMovie[] = this.movieService.nowPlaying.concat(this.movieService.upcoming);
    for(var movie of allMovies) {
      // check if the entered string matches any of the movie titles
      if(movie.title.toLowerCase().indexOf(title.toLowerCase()) !== -1) {
        results.push(movie);
      }
    }
    this.movies = results;
    if(results.length === 0 || !title) {
      this.movies = results;
    }
  }
}
