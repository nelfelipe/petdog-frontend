import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComprasService } from './compras';

describe('ComprasService', () => {
  let service: ComprasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ComprasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
