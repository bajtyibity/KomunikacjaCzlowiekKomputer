import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { NgModule } from '@angular/core';
import { Strona2Component } from './strona2.component';
//import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

describe('Strona2Component', () => {
  let component: Strona2Component;
  let fixture: ComponentFixture<Strona2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Strona2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Strona2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
