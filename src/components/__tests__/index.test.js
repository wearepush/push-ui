import * as components from '../index';

describe('index', () => {
  it('should export all components', () => {
    expect(typeof components).toBe('object');
  });
});
