import { Checkbox, TextArea, TextField } from '../index';

describe('index', () => {
  it('should export Checkbox', () => {
    expect(typeof Checkbox).toBe('object');
  });

  it('should export TextArea', () => {
    expect(typeof TextArea).toBe('object');
  });

  it('should export TextField', () => {
    expect(typeof TextField).toBe('object');
  });
});
