/* eslint-disable prefer-destructuring */
import React from 'react';
import { shallow } from 'enzyme';
import { TextFieldComponent as TextField } from '../TextField.js';

describe('TextField', () => {
  describe('default props', () => {
    it('should render with type prop text', () => {
      const input = shallow(
        <TextField
          name="name"
          placeholder="placeholder"
        />
      );
      expect(input.prop('type')).toBe('text');
    });

    it('should render with type prop number', () => {
      const input = shallow(
        <TextField
          name="name"
          placeholder="placeholder"
          type="number"
        />
      );
      expect(input.prop('type')).toBe('number');
    });

    it('should render with type prop date', () => {
      const input = shallow(
        <TextField
          name="name"
          placeholder="placeholder"
          type="date"
        />
      );
      expect(input.prop('type')).toBe('date');
    });

    it('should render with type prop email', () => {
      const input = shallow(
        <TextField
          name="name"
          placeholder="placeholder"
          type="email"
        />
      );
      expect(input.prop('type')).toBe('email');
    });

    it('should render with type prop password', () => {
      const input = shallow(
        <TextField
          name="name"
          placeholder="placeholder"
          type="password"
        />
      );
      expect(input.prop('type')).toBe('password');
    });

    it('should render with active prop', () => {
      const input = shallow(
        <TextField
          active
          name="name"
          placeholder="placeholder"
        />
      );
      const instance = input.instance();
      const state = instance.state;
      expect(state.active).toBe(true);
    });

    it('should render with invalid prop', () => {
      const input = shallow(
        <TextField
          invalid
          name="name"
          placeholder="placeholder"
        />
      );
      expect(input.hasClass('is-invalid')).toBe(true);
    });

    it('should render with valid prop', () => {
      const input = shallow(
        <TextField
          valid
          name="name"
          placeholder="placeholder"
        />
      );
      expect(input.hasClass('is-valid')).toBe(true);
    });

    it('should render with disabled prop', () => {
      const onBlurSpy = jest.fn();
      const onChangeSpy = jest.fn();
      const onFocusSpy = jest.fn();
      const input = shallow(
        <TextField
          disabled
          onBlur={onBlurSpy}
          onChange={onChangeSpy}
          onFocus={onFocusSpy}
          name="name"
          placeholder="placeholder"
        />
      );
      expect(input.prop('disabled')).toBe(true);
    });

    it('should render with defaultValue prop', () => {
      const input = shallow(
        <TextField
          defaultValue="0"
          name="name"
          placeholder="placeholder"
        />
      );
      expect(input.prop('defaultValue')).toBe("0");
      expect(input.prop('value')).toBe(undefined);
    });

    it('should render with className prop', () => {
      const input = shallow(
        <TextField
          className="TextField__test"
          name="name"
          placeholder="placeholder"
        />
      );
      expect(input.hasClass('TextField__test')).toBe(true);
    });

    it('should render with input ref prop', () => {
      const input = shallow(
        <TextField
          inputRef={() => {}}
          name="name"
          placeholder="placeholder"
        />
      );
      expect(input.instance().props.inputRef).not.toBe(undefined);
    });

    it('shouldn\'t render with input ref prop', () => {
      const input = shallow(
        <TextField
          name="name"
          placeholder="placeholder"
        />
      );
      expect(input.instance().props.inputRef).toBe(undefined);
    });

    it('should render pass default theme', () => {
      const input = shallow(
        <TextField
          name="name"
          placeholder="placeholder"
        />
      );
      expect(input.prop('theme')).not.toEqual({});
    });
  });

  describe('default input', () => {
    describe('init state and props', () => {
      it('should render with initial state', () => {
        const input = shallow(
          <TextField
            name="name"
            placeholder="placeholder"
          />
        );
        expect(input.prop('name')).toBe('name');
        expect(input.prop('id')).toBe('name');
        expect(input.prop('value')).toBe(undefined);
        expect(input.prop('type')).toBe('text');
      });

      it('should render with disabled prop', () => {
        const input = shallow(
          <TextField
            disabled
            name="name"
            placeholder="placeholder"
          />
        );
        expect(input.prop('disabled')).toBe(true);
      });

      it('should render with tabIndex prop', () => {
        const input = shallow(
          <TextField
            name="name"
            placeholder="placeholder"
            tabIndex="-10"
          />
        );
        expect(input.prop('tabIndex')).toBe('-10');
      });

      it('should render with value type number', () => {
        const input = shallow(
          <TextField
            name="name"
            placeholder="placeholder"
            value={1}
          />
        );
        expect(input.prop('value')).toEqual(1);
      });

      it('should render with value type string', () => {
        const input = shallow(
          <TextField
            name="name"
            placeholder="placeholder"
            value="test"
          />
        );
        expect(input.prop('value')).toBe('test');
      });
    });

    describe('events', () => {
      it('should handle onKeyDown', () => {
        const onKeyDownSpy = jest.fn();
        const onKeyUpSpy = jest.fn();
        const input = shallow(
          <TextField
            onKeyDown={onKeyDownSpy}
            onKeyUp={onKeyUpSpy}
            name="name"
            placeholder="placeholder"
          />
        );

        input.simulate('keydown', { currentTarget: { value: 'test' } });
        expect(onKeyDownSpy).toHaveBeenCalledTimes(1);
        expect(onKeyDownSpy).toHaveBeenCalledWith({ currentTarget: { value: 'test' } });
      });
    });

    describe('uncontrolled', () => {
      it('should render with initial state', () => {
        const input = shallow(
          <TextField
            name="name"
            placeholder="placeholder"
          />
        );
        const instance = input.instance();
        const state = instance.state;

        expect(instance.isControlled).toBe(false);
        expect(state.active).toBe(false);
      });

      it('should render with defaultValue initial state', () => {
        const input = shallow(
          <TextField
            defaultValue="test"
            name="name"
            placeholder="placeholder"
          />
        );
        const instance = input.instance();
        const state = instance.state;

        expect(instance.isControlled).toBe(false);
        expect(state.active).toBe(false);
      });

      it('should handle onFocus, onChange, onBlur', () => {
        const onBlurSpy = jest.fn();
        const onChangeSpy = jest.fn();
        const onFocusSpy = jest.fn();
        const input = shallow(
          <TextField
            onBlur={onBlurSpy}
            onChange={onChangeSpy}
            onFocus={onFocusSpy}
            name="name"
            placeholder="placeholder"
          />
        );

        input.simulate('focus', { currentTarget: { value: undefined } });
        expect(onFocusSpy).toHaveBeenCalledWith({ currentTarget: { value: undefined } });
        expect(onFocusSpy).toHaveBeenCalledTimes(1);
        expect(input.instance().state).toEqual({ active: true });

        input.simulate('change', { currentTarget: { value: 'test' } });
        expect(onChangeSpy).toHaveBeenCalledWith({ currentTarget: { value: 'test' } });
        expect(onChangeSpy).toHaveBeenCalledTimes(1);
        expect(input.instance().state).toEqual({ active: true });

        input.simulate('blur', { currentTarget: { value: 'test' } });
        expect(onBlurSpy).toHaveBeenCalledWith({ currentTarget: { value: 'test' } });
        expect(onBlurSpy).toHaveBeenCalledTimes(1);
        expect(input.instance().state).toEqual({ active: false });
      });
    });

    describe('controlled', () => {
      it('should render with initial state', () => {
        const input = shallow(
          <TextField
            name="name"
            placeholder="placeholder"
            value="test"
          />
        );
        const instance = input.instance();
        const state = instance.state;

        expect(input.prop('value')).toBe('test');
        expect(instance.isControlled).toBe(true);
        expect(state.active).toBe(undefined);
      });

      it('should handle onFocus, onChange, onBlur', () => {
        const onBlurSpy = jest.fn();
        const onChangeSpy = jest.fn();
        const onFocusSpy = jest.fn();
        const input = shallow(
          <TextField
            onBlur={onBlurSpy}
            onChange={onChangeSpy}
            onFocus={onFocusSpy}
            name="name"
            placeholder="placeholder"
            value="test"
          />
        );

        input.simulate('focus', { currentTarget: { value: undefined } });
        expect(onFocusSpy).toHaveBeenCalledWith({ currentTarget: { value: undefined } });
        expect(onFocusSpy).toHaveBeenCalledTimes(1);
        expect(input.instance().state).toEqual({ });

        input.simulate('change', { currentTarget: { value: 'test2' } });
        expect(onChangeSpy).toHaveBeenCalledWith({ currentTarget: { value: 'test2' } });
        expect(onChangeSpy).toHaveBeenCalledTimes(1);
        expect(input.instance().state).toEqual({});

        input.simulate('blur', { currentTarget: { value: 'test2' } });
        expect(onBlurSpy).toHaveBeenCalledWith({ currentTarget: { value: 'test2' } });
        expect(onBlurSpy).toHaveBeenCalledTimes(1);
        expect(input.instance().state).toEqual({});
      });
    });
  });

  describe('input number', () => {
    describe('uncontrolled', () => {
      it('should handle onFocus, onChange, onBlur', () => {
        const onBlurSpy = jest.fn();
        const onChangeSpy = jest.fn();
        const onFocusSpy = jest.fn();
        const onKeyDownSpy = jest.fn();
        const preventDefaultSpy = jest.fn();
        const input = shallow(
          <TextField
            onBlur={onBlurSpy}
            onChange={onChangeSpy}
            onFocus={onFocusSpy}
            onKeyDown={onKeyDownSpy}
            name="name"
            placeholder="placeholder"
            type="number"
          />
        );

        input.simulate('focus', { currentTarget: { value: undefined } });
        expect(onFocusSpy).toHaveBeenCalledWith({ currentTarget: { value: undefined } });
        expect(onFocusSpy).toHaveBeenCalledTimes(1);
        expect(input.instance().state).toEqual({ active: true });

        input.simulate('change', { currentTarget: { value: 1 } });
        expect(onChangeSpy).toHaveBeenCalledWith({ currentTarget: { value: 1 } });
        expect(onChangeSpy).toHaveBeenCalledTimes(1);
        expect(input.instance().state).toEqual({ active: true });

        input.simulate('keydown', { currentTarget: { value: 1 }, keyCode: 65, preventDefault: preventDefaultSpy });
        expect(onKeyDownSpy).not.toHaveBeenCalled();
        expect(preventDefaultSpy).toHaveBeenCalled();
        expect(input.instance().state).toEqual({ active: true });

        input.simulate('blur', { currentTarget: { value: 1 } });
        expect(onBlurSpy).toHaveBeenCalledWith({ currentTarget: { value: 1 } });
        expect(onBlurSpy).toHaveBeenCalledTimes(1);
        expect(input.instance().state).toEqual({ active: false });
      });

      it('shouldn\'t handle onChange with NaN', () => {
        const onChangeSpy = jest.fn();
        const input = shallow(
          <TextField
            onChange={onChangeSpy}
            name="name"
            placeholder="placeholder"
            type="number"
          />
        );

        input.simulate('change', { currentTarget: { value: NaN } });
        expect(onChangeSpy).not.toHaveBeenCalled();
      });
    });
  });
});
