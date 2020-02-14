import { createComponentTheme } from '../themeHelpers';

describe('themeHelpers', () => {
  describe('createComponentTheme', () => {
    it('should return default input classnames', () => {
      const theme = createComponentTheme();
      expect(theme).not.toEqual({});
    });

    it('should return default theme if theme is empty', () => {
      const theme = createComponentTheme({});
      expect(theme).not.toEqual({});
    });

    it('should return default theme if theme is not empty', () => {
      const theme = createComponentTheme({
        theme: {
          test: true,
        },
      });
      expect(theme).toEqual({
        test: true,
      });
    });
  });
});
