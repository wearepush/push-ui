/* eslint-disable prefer-destructuring */
import React from 'react';
import { shallow } from 'enzyme';
import { CheckboxComponent as Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  describe('default props', () => {
    it('should render with active prop', () => {
      const checkbox = shallow(<Checkbox active name="name" />);
      const input = checkbox.find('.Checkbox__input');
      expect(input.prop('tabIndex')).toBe(-1);
    });

    it('should render with invalid prop', () => {
      const input = shallow(<Checkbox invalid name="name" />);
      expect(input.hasClass('is-invalid')).toBe(true);
    });

    it('should render with valid prop', () => {
      const input = shallow(<Checkbox valid name="name" />);
      expect(input.hasClass('is-valid')).toBe(true);
    });

    it('should render with disabled prop', () => {
      const checkbox = shallow(<Checkbox disabled name="name" />);
      const input = checkbox.find('.Checkbox__input');
      expect(input.prop('disabled')).toBe(true);
    });

    it('should render with defaultChecked prop', () => {
      const checkbox = shallow(<Checkbox defaultChecked name="name" />);
      const input = checkbox.find('.Checkbox__input');
      expect(input.prop('defaultChecked')).toBe(true);
      expect(input.prop('value')).toBe(undefined);
    });

    it('should render with className prop', () => {
      const checkbox = shallow(
        <Checkbox
          className="Checkbox__test"
          checkboxClassName="Checkbox__checkbox_test"
          iconClassName="Checkbox__icon_test"
          inputClassName="Checkbox__input_test"
          labelClassName="Checkbox__label_test"
          name="name"
        >
          <span>test</span>
        </Checkbox>
      );
      const checkboxInput = checkbox.find('.Checkbox__checkbox');
      const icon = checkbox.find('.Checkbox__icon');
      const input = checkbox.find('.Checkbox__input');
      const label = checkbox.find('.Checkbox__label');

      expect(checkboxInput.hasClass('Checkbox__checkbox_test')).toBe(true);
      expect(icon.hasClass('Checkbox__icon_test')).toBe(true);
      expect(input.hasClass('Checkbox__input_test')).toBe(true);
      expect(checkbox.hasClass('Checkbox__test')).toBe(true);
      expect(label.hasClass('Checkbox__label_test')).toBe(true);
    });

    it('should render with children prop', () => {
      const checkbox = shallow(
        <Checkbox name="name">
          <span className="test">test</span>
        </Checkbox>
      );
      const children = checkbox.find('.test');
      expect(children.length).toBe(1);
    });

    it('should render with tabIndex prop', () => {
      const checkbox = shallow(<Checkbox name="name" tabIndex="-10" />);
      const input = checkbox.find('.Checkbox__input');
      expect(input.prop('tabIndex')).toBe('-10');
    });
  });

  describe('default input', () => {
    describe('init state and props', () => {
      it('should render with value type number', () => {
        const checkbox = shallow(<Checkbox name="name" value={1} />);
        const input = checkbox.find('.Checkbox__input');
        expect(input.prop('value')).toEqual(1);
      });

      it('should render with initial state', () => {
        const checkbox = shallow(<Checkbox name="name" />);
        const input = checkbox.find('.Checkbox__input');
        expect(input.prop('name')).toBe('name');
        expect(input.prop('id')).toBe('name');
        expect(input.prop('value')).toBe(undefined);
        expect(input.prop('type')).toBe('checkbox');
      });
    });
  });
});
