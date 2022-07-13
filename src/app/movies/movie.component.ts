import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovie } from './movie';
import { MovieService } from './movie.service';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { MovieNewsServiceService } from '../news/movie-news-service.service';
import { IMovieNews } from '../news/movie-news';

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
  newsArticles!: IMovieNews[];
  articlesWithContent!: IMovieNews[];
  featuredArticleOne!: IMovieNews;
  featuredArticleTwo!: IMovieNews;
  featuredArticleThree!: IMovieNews;
  errorMessage = '';
  nowPlayingMoviesSub!: Subscription;
  upcomingMoviesSub!: Subscription;
  movieNewsSub!: Subscription;

  posterPathBaseUrl: string = 'https://image.tmdb.org/t/p/original/';

  constructor(private movieService: MovieService,
              private movieNewsService: MovieNewsServiceService) {}

  ngOnInit(): void {
    this.getMovies(this.nowPlayingMoviesSub);  
    this.getMovies(this.upcomingMoviesSub);  
    this.getMovies(this.movieNewsSub);
  }

  getMovies(sub: Subscription): void {
    if (sub == this.nowPlayingMoviesSub) {
      this.nowPlayingMoviesSub = this.movieService
        .getNowPlayingMovies()
        .subscribe({
          next: (movies) => {
            this.nowPlayingMovies = movies;  
            this.movieService.nowPlaying = movies; 
          },
          error: (err) => (this.errorMessage = err),
        });
    } else if (sub == this.upcomingMoviesSub) {
      this.upcomingMoviesSub = this.movieService.getUpcomingMovies().subscribe({
        next: (movies) => {
          this.upcomingMovies = movies;  
          this.movieService.upcoming = movies; 
        },
        error: (err) => (this.errorMessage = err),
      });
    } else {
      this.movieNewsSub = this.movieNewsService.getMovieNews().subscribe({
        next: (articles) => {
          this.newsArticles = articles;
          this.getFeaturedArticles(articles);
          this.movieNewsService.movieNewsArticles = articles;
        },
        error: (err) => (this.errorMessage = err),
      });
    }
  }

  getFeaturedArticles(articles: IMovieNews[]) {
    var results: IMovieNews[] = [];
    for(var article of articles) {
      if (article.content && article.urlToImage && article.description) {
        results.push(article);
      }
    }
    this.articlesWithContent = results;
    this.featuredArticleOne = results[0];
    this.featuredArticleTwo = results[1];
    this.featuredArticleThree = results[2];
  }

  ngOnDestroy(): void {
    this.nowPlayingMoviesSub.unsubscribe(); 
    this.upcomingMoviesSub.unsubscribe();
    this.movieNewsSub.unsubscribe();
  }
}
