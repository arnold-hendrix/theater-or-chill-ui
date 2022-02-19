import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionPopupComponent } from './transaction-popup.component';
import { CheckoutComponent } from './checkout.component';
import { PurchaseConfirmationComponent } from './purchase-confirmation.component';
import { PrintMovieTicketComponent } from './print-movie-ticket.component';
import { WatchMovieComponent } from './watch-movie.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TransactionPopupComponent,
    CheckoutComponent,
    PurchaseConfirmationComponent,
    PrintMovieTicketComponent,
    WatchMovieComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'transaction-popup/:title/:purchaseType',
        component: TransactionPopupComponent,
        outlet: 'transcation-popup',
      },
      { path: 'checkout', component: CheckoutComponent },
      {
        path: 'purchase-confirmation',
        component: PurchaseConfirmationComponent,
      },
      { path: 'print-movie-ticket', component: PrintMovieTicketComponent },
      { path: 'watch-movie/:title', component: WatchMovieComponent },
    ]),
  ],
})
export class PurchaseModule {}
