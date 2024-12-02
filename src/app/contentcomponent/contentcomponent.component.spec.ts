import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentcomponentComponent } from './contentcomponent.component';

describe('ContentcomponentComponent', () => {
  let component: ContentcomponentComponent;
  let fixture: ComponentFixture<ContentcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
