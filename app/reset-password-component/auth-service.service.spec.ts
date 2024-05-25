import { TestBed } from '@angular/core/testing';

import { AppRoutingModule } from '../app-routing.module';
import { ResetPasswordService } from './auth-service.service';

describe('ResetPasswordService', () => {
  let service: ResetPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
