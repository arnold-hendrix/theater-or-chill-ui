import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie.component';
import { MovieDetailComponent } from './movie-detail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NowPlayingMoviesComponent } from './now-playing-movies.component';
import { UpcomingMoviesComponent } from './upcoming-movies.component';


@NgModule({
  declarations: [MovieComponent, MovieDetailComponent, NowPlayingMoviesComponent, UpcomingMoviesComponent],
  imports: [
    CommonModule,
    CarouselModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'movies', component: MovieComponent },
      { path: 'movies/nowPlayingMovies', component: NowPlayingMoviesComponent},
      { path: 'movies/upcomingMovies', component: UpcomingMoviesComponent},
      { path: 'movies/:title', component: MovieDetailComponent },
    ]),
  ],
})
export class MovieModule {}
