import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailWrapperComponent } from './hero-detail-wrapper.component';

describe('HeroDetailWrapperComponent', () => {
  let component: HeroDetailWrapperComponent;
  let fixture: ComponentFixture<HeroDetailWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
