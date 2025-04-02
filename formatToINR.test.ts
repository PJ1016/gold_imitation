import { formatToINR } from './path/to/your/formatToINR';

describe('formatToINR', () => {
  test('formats 1000 as ₹1,000', () => {
    expect(formatToINR(1000)).toBe('₹1,000');
  });

  test('formats 1000000 as ₹10,00,000', () => {
    expect(formatToINR(1000000)).toBe('₹10,00,000');
  });

  test('formats 0 as ₹0', () => {
    expect(formatToINR(0)).toBe('₹0');
  });

  test('formats negative numbers correctly', () => {
    expect(formatToINR(-1000)).toBe('-₹1,000');
  });

  test('formats large numbers correctly', () => {
    expect(formatToINR(1234567890)).toBe('₹1,23,45,67,890');
  });
});
