import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMovieTicketComponent } from './print-movie-ticket.component';

describe('PrintMovieTicketComponent', () => {
  let component: PrintMovieTicketComponent;
  let fixture: ComponentFixture<PrintMovieTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintMovieTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintMovieTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
