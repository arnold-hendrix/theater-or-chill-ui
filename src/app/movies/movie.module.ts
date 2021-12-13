import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie.component';
import { MovieDetailComponent } from './movie-detail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [MovieComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    CarouselModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'movies', component: MovieComponent },
      { path: 'movies/:title', component: MovieDetailComponent },
    ]),
  ],
})
export class MovieModule {}
