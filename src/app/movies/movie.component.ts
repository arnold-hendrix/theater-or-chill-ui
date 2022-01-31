import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
  nowPlayingMovies: IMovie[] = [];
  upcomingMovies: IMovie[] = [];
  comingNextWeekMovies: IMovie[] = [];
  comingSoonMovies: IMovie[] = [];
  errorMessage = '';
  nowPlayingMoviesSub!: Subscription;
  upcomingMoviesSub!: Subscription;

  posterPathBaseUrl: string = 'https://image.tmdb.org/t/p/original/';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
    nav: true,
  };
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies(this.nowPlayingMoviesSub);
    this.getMovies(this.upcomingMoviesSub);
    this.upcomingMovies.forEach((movie) => {
      let now = new Date();
      now.setDate(now.getDate() + 7);
      var nextWeeksDate = new Date(now);
      var releaseDate = Date.parse(movie.releaseDate);
      if (releaseDate > nextWeeksDate.getTime())
        this.comingSoonMovies.push(movie);
      else this.comingNextWeekMovies.push(movie);
    });
  }

  ngOnDestroy(): void {
    // method to execute just before the component is destroyed.
    this.nowPlayingMoviesSub.unsubscribe();
    this.upcomingMoviesSub.unsubscribe();
  }

  getMovies(sub: Subscription): void {
    if (sub == this.nowPlayingMoviesSub) {
      this.nowPlayingMoviesSub = this.movieService
        .getNowPlayingMovies()
        .subscribe({
          next: (movies) => (this.nowPlayingMovies = movies),
          error: (err) => (this.errorMessage = err),
        });
    } else {
      this.upcomingMoviesSub = this.movieService.getUpcomingMovies().subscribe({
        next: (movies) => (this.upcomingMovies = movies),
        error: (err) => (this.errorMessage = err),
      });
    }
  }
}
