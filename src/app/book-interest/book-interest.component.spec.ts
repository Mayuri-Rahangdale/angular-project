import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInterestComponent } from './book-interest.component';

describe('BookInterestComponent', () => {
  let component: BookInterestComponent;
  let fixture: ComponentFixture<BookInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookInterestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
