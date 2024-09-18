import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStatemntComponent } from './control-statemnt.component';

describe('ControlStatemntComponent', () => {
  let component: ControlStatemntComponent;
  let fixture: ComponentFixture<ControlStatemntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlStatemntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlStatemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
