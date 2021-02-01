/* eslint-disable prefer-destructuring */
import React from 'react';
import { shallow } from 'enzyme';
import TextField from '../TextField';

describe('TextField', () => {
  describe('default props', () => {
    it('should render with type prop text', () => {
      const input = shallow(<TextField name="name" placeholder="placeholder" />);
      expect(input.prop('type')).toBe('text');
    });

    it('should render with type prop number', () => {
      const input = shallow(<TextField name="name" placeholder="placeholder" type="number" />);
      expect(input.prop('type')).toBe('number');
    });

    it('should render with type prop date', () => {
      const input = shallow(<TextField name="name" placeholder="placeholder" type="date" />);
      expect(input.prop('type')).toBe('date');
    });

    it('should render with type prop email', () => {
      const input = shallow(<TextField name="name" placeholder="placeholder" type="email" />);
      expect(input.prop('type')).toBe('email');
    });

    it('should render with type prop password', () => {
      const input = shallow(<TextField name="name" placeholder="placeholder" type="password" />);
      expect(input.prop('type')).toBe('password');
    });

    it('should render with active prop', () => {
      const input = shallow(<TextField active name="name" placeholder="placeholder" />);
      expect(input.prop('tabIndex')).toBe(-1);
    });

    it('should render with invalid prop', () => {
      const input = shallow(<TextField invalid name="name" placeholder="placeholder" />);
      expect(input.hasClass('is-invalid')).toBe(true);
    });

    it('should render with valid prop', () => {
      const input = shallow(<TextField valid name="name" placeholder="placeholder" />);
      expect(input.hasClass('is-valid')).toBe(true);
    });

    it('should render with disabled prop', () => {
      const input = shallow(<TextField disabled name="name" placeholder="placeholder" />);
      expect(input.prop('disabled')).toBe(true);
    });

    it('should render with defaultValue prop', () => {
      const input = shallow(<TextField defaultValue="0" name="name" placeholder="placeholder" />);
      expect(input.prop('defaultValue')).toBe('0');
      expect(input.prop('value')).toBe(undefined);
    });

    it('should render with className prop', () => {
      const input = shallow(<TextField className="TextField__test" name="name" placeholder="placeholder" />);
      expect(input.hasClass('TextField__test')).toBe(true);
    });

    it('should render with tabIndex prop', () => {
      const input = shallow(<TextField name="name" placeholder="placeholder" tabIndex="-10" />);
      expect(input.prop('tabIndex')).toBe('-10');
    });
  });

  describe('default input', () => {
    describe('init state and props', () => {
      it('should render with value type number', () => {
        const input = shallow(<TextField name="name" placeholder="placeholder" value={1} />);
        expect(input.prop('value')).toEqual(1);
      });

      it('should render with initial state', () => {
        const input = shallow(<TextField name="name" placeholder="placeholder" />);
        expect(input.prop('name')).toBe('name');
        expect(input.prop('id')).toBe('name');
        expect(input.prop('value')).toBe(undefined);
        expect(input.prop('type')).toBe('text');
      });

      it('should render with value type string', () => {
        const input = shallow(<TextField name="name" placeholder="placeholder" value="test" />);
        expect(input.prop('value')).toBe('test');
      });

      it('should render with initial state', () => {
        const input = shallow(<TextField name="name" placeholder="placeholder" value="test" />);
        expect(input.prop('value')).toBe('test');
      });
    });
  });
});
