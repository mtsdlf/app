import { InvoiceDTO } from './invoice.dto';

describe('InvoiceDto', () => {
  it('should be defined', () => {
    expect(new InvoiceDTO()).toBeDefined();
  });
});
