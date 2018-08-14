import {
  Checkbox,
  Radio,
  Tags,
  TagsWithOutContext,
  TextArea,
  TextField,
} from '../index';

describe('index', () => {
  it('should export Checkbox', () => {
    expect(typeof Checkbox).toBe('function');
  });

  it('should export Radio', () => {
    expect(typeof Radio).toBe('function');
  });

  it('should export Tags', () => {
    expect(typeof Tags).toBe('function');
  });

  it('should export TagsWithOutContext', () => {
    expect(typeof TagsWithOutContext).toBe('function');
  });

  it('should export TextArea', () => {
    expect(typeof TextArea).toBe('function');
  });

  it('should export TextField', () => {
    expect(typeof TextField).toBe('function');
  });
});
