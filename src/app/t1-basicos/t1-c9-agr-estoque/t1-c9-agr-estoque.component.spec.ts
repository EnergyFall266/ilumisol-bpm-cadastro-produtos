import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C9AgrEstoqueComponent } from './t1-c9-agr-estoque.component';

describe('T1C9AgrEstoqueComponent', () => {
  let component: T1C9AgrEstoqueComponent;
  let fixture: ComponentFixture<T1C9AgrEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C9AgrEstoqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C9AgrEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
