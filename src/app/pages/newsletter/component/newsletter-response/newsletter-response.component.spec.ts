import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterResponseComponent } from './newsletter-response.component';

describe('NewsletterResponseComponent', () => {
  let component: NewsletterResponseComponent;
  let fixture: ComponentFixture<NewsletterResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
