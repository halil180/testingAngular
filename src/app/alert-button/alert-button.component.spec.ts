import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AlertButtonComponent } from './alert-button.component';
import { By } from '@angular/platform-browser';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;//
  let fixture: ComponentFixture<AlertButtonComponent>;  //provides access to the component itself

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertButtonComponent ]
    })
    .compileComponents(); //compiles template and css
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have a message with `warn`",() => {
    expect(component.content).toContain("warn")
  })

  it("should have severity greater than 2",() => {
    expect(component.severity).toBeGreaterThan(2)
  })

  it("should have an H1 tag of Designbees ",() => {
   //accessing "h1"
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.innerHTML).toBe('Designbees');
  })

  it("should toggle the message boolean",() => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalse();
  })

  it("should toggle the message boolean asynchronously " , fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.toggleAsync();
    tick(500)
    expect(component.hideContent).toBeFalsy();
  }))

// it('should have <p> with "banner works!"', () => {
//   const p = fixture.debugElement.nativeElement.querySelector("#hey")
//   expect(p.textContent).toEqual('banner works!');
// });



});
