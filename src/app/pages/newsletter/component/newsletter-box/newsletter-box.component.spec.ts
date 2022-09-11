import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterBoxComponent } from './newsletter-box.component';

describe('NewsletterBoxComponent', () => {
  let component: NewsletterBoxComponent;
  let fixture: ComponentFixture<NewsletterBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
