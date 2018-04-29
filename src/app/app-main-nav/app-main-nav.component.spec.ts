
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainNavComponent } from './app-main-nav.component';

describe('AppMainNavComponent', () => {
  let component: AppMainNavComponent;
  let fixture: ComponentFixture<AppMainNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
