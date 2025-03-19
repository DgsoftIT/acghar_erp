import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPofileComponent } from './view-pofile.component';

describe('ViewPofileComponent', () => {
  let component: ViewPofileComponent;
  let fixture: ComponentFixture<ViewPofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
