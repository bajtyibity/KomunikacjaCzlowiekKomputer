import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { Strona3Component } from './strona3.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

describe('Strona2Component', () => {
  let component: Strona3Component;
  let fixture: ComponentFixture<Strona3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Strona3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Strona3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
