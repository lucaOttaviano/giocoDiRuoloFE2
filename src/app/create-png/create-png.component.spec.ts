import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePngComponent } from './create-png.component';

describe('CreatePngComponent', () => {
  let component: CreatePngComponent;
  let fixture: ComponentFixture<CreatePngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
