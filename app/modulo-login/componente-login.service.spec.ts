import { TestBed } from '@angular/core/testing';

import { ComponenteLoginService } from './componente-login.service';

describe('ComponenteLoginService', () => {
  let service: ComponenteLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponenteLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
