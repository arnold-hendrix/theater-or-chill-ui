import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MovieModule } from './movies/movie.module';
import { MovieComponent } from './movies/movie.component';
import { AboutComponent } from './about.component';
import { ContactUsComponent } from './contact-us.component';
import { PurchaseModule } from './purchases/purchase.module';
import { UserModule } from './users/user.module';

@NgModule({
  declarations: [AppComponent, AboutComponent, ContactUsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MovieComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact-us', component: ContactUsComponent},
    ]
    ),
    BrowserAnimationsModule,
    FontAwesomeModule,
    MovieModule,
    PurchaseModule,
    UserModule
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}