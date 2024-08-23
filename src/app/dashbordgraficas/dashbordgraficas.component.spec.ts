import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordgraficasComponent } from './dashbordgraficas.component';

describe('DashbordgraficasComponent', () => {
  let component: DashbordgraficasComponent;
  let fixture: ComponentFixture<DashbordgraficasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordgraficasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbordgraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
