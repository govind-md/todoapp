import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoinputComponent } from './todoinput.component';

describe('TodoinputComponent', () => {
  let component: TodoinputComponent;
  let fixture: ComponentFixture<TodoinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoinputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
