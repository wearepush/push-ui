import {
  Accordion,
  AccordionItem,
  Dropdown,
} from '../index';

describe('index', () => {
  it('should export Accordion', () => {
    expect(typeof Accordion).toBe('function');
  });

  it('should export AccordionItem', () => {
    expect(typeof AccordionItem).toBe('function');
  });

  it('should export Dropdown', () => {
    expect(typeof Dropdown).toBe('function');
  });
});
