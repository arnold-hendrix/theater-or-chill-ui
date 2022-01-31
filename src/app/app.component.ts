import { Component, OnDestroy, OnInit } from '@angular/core';
import { faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faShoppingBag = faShoppingBag;
  faUser = faUser;
  currentYear: number = new Date().getFullYear();
  // title = 'theater-or-chill';
  constructor() {}
}
