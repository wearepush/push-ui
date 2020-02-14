import { createInputClassName } from '../inputHelpers';

describe('inputHelpers', () => {
  describe('createInputClassName', () => {
    it('should return default input classnames', () => {
      const className = createInputClassName();
      expect(className).toBe('');
    });

    it('should return default component ClassName classname', () => {
      const className = createInputClassName({
        componentClassName: 'component',
      });
      expect(className).toBe('component');
    });

    it('should return default invalid classname', () => {
      const className = createInputClassName({
        invalid: true,
      });
      expect(className).toBe('is-invalid');
    });

    it('should return default valid classname', () => {
      const className = createInputClassName({
        valid: true,
      });
      expect(className).toBe('is-valid');
    });

    it('should return default single classname', () => {
      const className = createInputClassName({
        className: 'test',
      });
      expect(className).toBe('test');
    });

    it('should return default multiple classnames', () => {
      const className = createInputClassName({
        className: {
          test1: true,
          test2: true,
        },
      });
      expect(className).toBe('test1 test2');
    });
  });
});
