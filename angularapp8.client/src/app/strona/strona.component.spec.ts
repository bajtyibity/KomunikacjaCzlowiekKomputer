import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StronaComponent } from './strona.component';


describe('StronaComponent', () => {
  let component: StronaComponent;
  let fixture: ComponentFixture<StronaComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StronaComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StronaComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


  /*
  //////////////////
  it('should retrieve symptoms from the server', () => {
    const mockSymptoms = [
      { id: 1, nazwa: 1 },
      { id: 2, nazwa: 2 }
    ];

    component.ngOnInit();

    const req = httpMock.expectOne('/symptoms');
    expect(req.request.method).toEqual('GET');

    req.flush(mockSymptoms);

    expect(component.symptoms).toEqual(mockSymptoms);
  });
  /////////////////////////////
  */
});
