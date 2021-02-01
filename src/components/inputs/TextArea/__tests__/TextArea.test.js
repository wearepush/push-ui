/* eslint-disable prefer-destructuring */
import React from 'react';
import { shallow } from 'enzyme';
import TextArea from '../TextArea';

describe('TextArea', () => {
  describe('default props', () => {
    it('should render with active prop', () => {
      const input = shallow(<TextArea active name="name" placeholder="placeholder" />);
      expect(input.prop('tabIndex')).toBe(-1);
    });

    it('should render with invalid prop', () => {
      const input = shallow(<TextArea invalid name="name" placeholder="placeholder" />);
      expect(input.hasClass('is-invalid')).toBe(true);
    });

    it('should render with valid prop', () => {
      const input = shallow(<TextArea valid name="name" placeholder="placeholder" />);
      expect(input.hasClass('is-valid')).toBe(true);
    });

    it('should render with disabled prop', () => {
      const input = shallow(<TextArea disabled name="name" placeholder="placeholder" />);
      expect(input.prop('disabled')).toBe(true);
    });

    it('should render with defaultValue prop', () => {
      const input = shallow(<TextArea defaultValue="0" name="name" placeholder="placeholder" />);
      expect(input.prop('defaultValue')).toBe('0');
      expect(input.prop('value')).toBe(undefined);
    });

    it('should render with className prop', () => {
      const input = shallow(<TextArea className="TextArea__test" name="name" placeholder="placeholder" />);
      expect(input.hasClass('TextArea__test')).toBe(true);
    });

    it('should render with tabIndex prop', () => {
      const input = shallow(<TextArea name="name" placeholder="placeholder" tabIndex="-10" />);
      expect(input.prop('tabIndex')).toBe('-10');
    });
  });

  describe('default input', () => {
    describe('init state and props', () => {
      it('should render with value type number', () => {
        const input = shallow(<TextArea name="name" placeholder="placeholder" value={1} />);
        expect(input.prop('value')).toEqual(1);
      });

      it('should render with initial state', () => {
        const input = shallow(<TextArea name="name" placeholder="placeholder" />);
        expect(input.prop('name')).toBe('name');
        expect(input.prop('id')).toBe('name');
        expect(input.prop('value')).toBe(undefined);
      });

      it('should render with value type string', () => {
        const input = shallow(<TextArea name="name" placeholder="placeholder" value="test" />);
        expect(input.prop('value')).toBe('test');
      });

      it('should render with initial state', () => {
        const input = shallow(<TextArea name="name" placeholder="placeholder" value="test" />);
        expect(input.prop('value')).toBe('test');
      });
    });
  });
});
