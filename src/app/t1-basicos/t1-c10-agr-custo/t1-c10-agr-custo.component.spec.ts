import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C10AgrCustoComponent } from './t1-c10-agr-custo.component';

describe('T1C10AgrCustoComponent', () => {
  let component: T1C10AgrCustoComponent;
  let fixture: ComponentFixture<T1C10AgrCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C10AgrCustoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C10AgrCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
