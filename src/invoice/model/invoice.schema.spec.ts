import { InvoiceSchema } from './invoice.schema';

describe('InvoiceSchema', () => {
  it('should be defined', () => {
    expect(new InvoiceSchema()).toBeDefined();
  });
});
