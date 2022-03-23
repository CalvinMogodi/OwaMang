import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApprovedLiveStockPagePage } from './approved-live-stock-page.page';

describe('ApprovedLiveStockPagePage', () => {
  let component: ApprovedLiveStockPagePage;
  let fixture: ComponentFixture<ApprovedLiveStockPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedLiveStockPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApprovedLiveStockPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
