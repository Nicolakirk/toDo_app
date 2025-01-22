/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Post_todoComponent } from './post_todo.component';

describe('Post_todoComponent', () => {
  let component: Post_todoComponent;
  let fixture: ComponentFixture<Post_todoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post_todoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post_todoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
