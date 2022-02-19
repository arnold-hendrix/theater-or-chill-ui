import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  selectedMovie!: IMovie;
  allMovies!: IMovie[];
  posterPathBaseUrl: string = 'https://image.tmdb.org/t/p/original/';
  ratingNotAvailable: boolean = false;
  overviewNotAvailable: boolean = false;
  rental: string = "rental";
  ticket: string = "ticket";

  constructor(private route: ActivatedRoute, 
    private movieService: MovieService) {}

  ngOnInit(): void {
    // get the selected movie title from the route snapshot when page loads.
    const title = this.route.snapshot.paramMap.get('title');
    this.allMovies = this.movieService.nowPlaying.concat(this.movieService.upcoming);
    for (let movie of this.allMovies) {
      if (movie.title === title) {
        this.selectedMovie = movie; // retrieve movie object of the selected movie from list of movie objects.
        if(movie.voteAverage == 0 || !movie.voteAverage) {
          this.ratingNotAvailable = true;
        }
        if(!movie.overview) {
          this.overviewNotAvailable = true;
        }
      }
    }
  }
}
