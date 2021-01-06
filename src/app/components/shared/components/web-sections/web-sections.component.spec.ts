import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSectionsComponent } from './web-sections.component';

describe('WebSectionsComponent', () => {
  let component: WebSectionsComponent;
  let fixture: ComponentFixture<WebSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
