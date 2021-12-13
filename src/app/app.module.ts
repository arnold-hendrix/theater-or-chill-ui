import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieModule } from './movies/movie.module';
import { MovieComponent } from './movies/movie.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MovieComponent}
    ]
    ),
    BrowserAnimationsModule,
    FontAwesomeModule,
    MovieModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}