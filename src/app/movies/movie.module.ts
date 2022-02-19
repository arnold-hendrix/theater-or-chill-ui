import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';
import { MovieDetailComponent } from './movie-detail.component';
import { NowPlayingMoviesComponent } from './now-playing-movies.component';
import { UpcomingMoviesComponent } from './upcoming-movies.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrevDirective } from './prev.directive';
import { NextDirective } from './next.directive';
import { PurchaseModule } from '../purchases/purchase.module';

@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailComponent,
    NowPlayingMoviesComponent,
    UpcomingMoviesComponent,
    PrevDirective,
    NextDirective,
  ],
  imports: [
    CommonModule,
    PurchaseModule,
    FontAwesomeModule,
    RouterModule.forChild([
      { path: 'movies', component: MovieComponent },
      { path: 'movies/nowPlayingMovies', component: NowPlayingMoviesComponent },
      { path: 'movies/upcomingMovies', component: UpcomingMoviesComponent },
      { path: 'movies/:title', component: MovieDetailComponent },
    ]),
  ]
})
export class MovieModule {}
