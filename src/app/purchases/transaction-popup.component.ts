import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-popup',
  templateUrl: './transaction-popup.component.html',
  styleUrls: ['./transaction-popup.component.css']
})
export class TransactionPopupComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const movieTitle = this.route.snapshot.paramMap.get('title');
    const purchaseType = this.route.snapshot.paramMap.get('purchaseType');
  }

}
