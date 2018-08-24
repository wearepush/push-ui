import React from 'react';
import { shallow, mount } from 'enzyme';
import Flatpickr from 'react-flatpickr';
import DatePicker from '../DatePicker.js';

describe('DatePicker', () => {
  describe('default props', () => {
    it('should render with default prop', () => {
      const datepicker = shallow(
        <DatePicker />
      );
      const props = datepicker.props();
      const instance = datepicker.instance();
      expect(props.options).toEqual({
        allowInput: false,
        altFormat: 'F j, Y',
        dateFormat: 'y-m-d',
      });
      expect(instance.isControlled).toBe(false);
      expect(props.mode).toBe(undefined);
    });

    it('should render with active prop', () => {
      const datepicker = shallow(
        <DatePicker
          active
        />
      );
      const instance = datepicker.instance();
      const state = instance.state;
      expect(state.active).toBe(true);
      expect(datepicker.hasClass('is-active')).toBe(true);
    });

    it('should render with invalid prop', () => {
      const datepicker = shallow(
        <DatePicker
          invalid
        />
      );
      expect(datepicker.hasClass('is-invalid')).toBe(true);
    });

    it('should render with valid prop', () => {
      const datepicker = shallow(
        <DatePicker
          valid
        />
      );
      expect(datepicker.hasClass('is-valid')).toBe(true);
    });

    it('should render with disabled prop', () => {
      const onBlurSpy = jest.fn();
      const onChangeSpy = jest.fn();
      const onFocusSpy = jest.fn();
      const datepicker = shallow(
        <DatePicker
          disabled
          onBlur={onBlurSpy}
          onChange={onChangeSpy}
          onFocus={onFocusSpy}
        />
      );
      expect(datepicker.hasClass('is-disabled')).toBe(true);
    });

    it('should render with className prop', () => {
      const datepicker = shallow(
        <DatePicker
          className="DatePicker__test"
        />
      );
      expect(datepicker.hasClass('DatePicker__test')).toBe(true);
    });

    it('should render with flatpickr options', () => {
      const minDate = new Date();
      const datepicker = shallow(
        <DatePicker
          options={{
            minDate
          }}
        />
      );
      const flatpickr = datepicker.find(Flatpickr);
      expect(flatpickr.props().options).toEqual(
        expect.objectContaining({
          minDate
        })
      );
    });

    it('should render with flatpickr with mode', () => {
      const mode = 'single';
      const datepicker = shallow(
        <DatePicker
          mode="single"
        />
      );
      const flatpickr = datepicker.find(Flatpickr);
      expect(flatpickr.props().options).toEqual(
        expect.objectContaining({
          mode
        })
      );
    });
  });

  describe('uncontrolled', () => {
    it('should render with initial state', () => {
      const datepicker = shallow(
        <DatePicker
          defaultValue="18-08-15"
        />
      );
      const instance = datepicker.instance();
      const state = instance.state;
      const props = datepicker.props();

      expect(props.value).toBe('18-08-15');
      expect(instance.isControlled).toBe(false);
      expect(state.active).toBe(false);
    });

    it('should handle onFocus, onChange, onBlur', () => {
      const onBlurSpy = jest.fn();
      const onChangeSpy = jest.fn();
      const onFocusSpy = jest.fn();
      const console = global.console;
      global.console = { error: jest.fn(), log: global.console.log };
      const datepicker = mount(
        <DatePicker
          className="flatpickr-input"
          defaultValue="18-08-15"
          onBlur={onBlurSpy}
          onChange={onChangeSpy}
          onFocus={onFocusSpy}
        />, {
          attachTo: document.body
        }
      );
      let calendar = null;

      const flatpickr = document.querySelector(".flatpickr-input")._flatpickr;
      flatpickr.input.focus();
      calendar = document.querySelector('.flatpickr-calendar');
      expect(calendar.classList.contains('open')).toBe(true);

      expect(onFocusSpy).toHaveBeenCalledTimes(1);
      expect(datepicker.instance().state).toEqual({ value: "18-08-15", active: true });

      flatpickr.setDate("18-08-16", true);
      expect(onChangeSpy).toHaveBeenCalledTimes(1);

      flatpickr.close();

      calendar = document.querySelector('.flatpickr-calendar');
      expect(calendar.classList.contains('open')).toBe(false);

      datepicker.unmount();
      global.console = console;
    });
  });

  describe('controlled', () => {
    it('should render with initial state', () => {
      const datepicker = shallow(
        <DatePicker
          value="18-08-15"
        />
      );
      const instance = datepicker.instance();
      const state = instance.state;

      expect(instance.isControlled).toBe(true);
      expect(state.value).toBe(undefined);
      expect(state.active).toBe(undefined);
    });

    it('should handle onFocus, onChange, onBlur', () => {
      const onBlurSpy = jest.fn();
      const onChangeSpy = jest.fn();
      const onFocusSpy = jest.fn();
      const console = global.console;
      global.console = { error: jest.fn(), log: global.console.log };
      const datepicker = mount(
        <DatePicker
          onBlur={onBlurSpy}
          onChange={onChangeSpy}
          onFocus={onFocusSpy}
          value="18-08-15"
        />, {
          attachTo: document.body
        }
      );

      const flatpickr = document.querySelector(".flatpickr-input")._flatpickr;
      flatpickr.input.focus();
      expect(onFocusSpy).toHaveBeenCalledTimes(1);
      expect(datepicker.instance().state).toEqual({});

      flatpickr.setDate("18-08-16", true);
      expect(onChangeSpy).toHaveBeenCalledTimes(1);
      expect(datepicker.instance().state).toEqual({});

      flatpickr.close();

      datepicker.unmount();
      global.console = console;
    });
  });
});
