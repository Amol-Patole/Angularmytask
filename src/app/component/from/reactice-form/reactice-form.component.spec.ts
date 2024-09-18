import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacticeFormComponent } from './reactice-form.component';

describe('ReacticeFormComponent', () => {
  let component: ReacticeFormComponent;
  let fixture: ComponentFixture<ReacticeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReacticeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReacticeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
