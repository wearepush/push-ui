/* eslint-disable prefer-destructuring */
import React from 'react';
import { shallow } from 'enzyme';
import { ButtonComponent as Button } from '../Button.js';

describe('Button', () => {
  describe('default props', () => {
    it('should render button', () => {
      const button = shallow(
        <Button>
          Button
        </Button>
      );
      expect(button.name()).toEqual('StyledButton');
      expect(button.prop('tabIndex')).toEqual(0);
      expect(button.prop('role')).toEqual(undefined);
      expect(button.prop('type')).toEqual('button');
      expect(button.prop('variant')).toEqual('primary');
    });

    it('should render with type prop', () => {
      const button = shallow(
        <Button
          type="submit"
        >
          Button
        </Button>
      );
      expect(button.prop('type')).toEqual('submit');
    });

    it('should render with tabIndex prop', () => {
      const button = shallow(
        <Button tabIndex={-2}>
          Button
        </Button>
      );
      expect(button.prop('tabIndex')).toEqual(-2);
    });

    it('should render with children prop', () => {
      const button = shallow(
        <Button>
          <div className="test">Button</div>
        </Button>
      );
      expect(button.find('.test').length).toEqual(1);
    });

    it('should render with disabled prop', () => {
      const onClickSpy = jest.fn();
      const button = shallow(
        <Button
          disabled
          onClick={onClickSpy}
        >
          Button
        </Button>
      );
      expect(button.prop('disabled')).toBe(true);
      expect(button.prop('tabIndex')).toEqual(-1);
    });

    it('should render href prop', () => {
      const button = shallow(
        <Button
          component="a"
          href="http://example.com"
        >
          Button
        </Button>
      );
      expect(button.props().role).toEqual('button');
      expect(button.name()).toEqual('StyledLink');
    });

    it('should render with name prop', () => {
      const button = shallow(
        <Button
          name="name"
        >
          Button
        </Button>
      );
      expect(button.prop('name')).toEqual('name');
    });

    it('should render with className prop', () => {
      const button = shallow(
        <Button
          className="test"
        >
          Button
        </Button>
      );
      expect(button.hasClass('test')).toBe(true);
    });

    it('should render size small prop', () => {
      const button = shallow(
        <Button
          size="xs"
        >
          Button
        </Button>
      );
      expect(button.prop('size')).toBe('xs');
    });

    it('should render custom prop', () => {
      const button = shallow(
        <Button
          data-test="test"
        >
          Button
        </Button>
      );
      expect(button.prop('data-test')).toEqual('test');
    });

    it('should render variant button', () => {
      const button = shallow(
        <Button
          variant="warning"
        >
          Button
        </Button>
      );
      expect(button.prop('variant')).toEqual('warning');
    });

    it('should render pass default theme', () => {
      const button = shallow(
        <Button
        >
          Button
        </Button>
      );
      expect(button.prop('theme')).not.toEqual({});
    });

    it('should handle events', () => {
      const onClickSpy = jest.fn();
      const onBlurSpy = jest.fn();
      const onFocusSpy = jest.fn();
      const onKeyDownSpy = jest.fn();
      const onKeyUpSpy = jest.fn();
      const onMouseDownSpy = jest.fn();
      const onMouseLeaveSpy = jest.fn();
      const onMouseUpSpy = jest.fn();
      const onTouchEndSpy = jest.fn();
      const onTouchMoveSpy = jest.fn();
      const onTouchStartSpy = jest.fn();
      const button = shallow(
        <Button
          onClick={onClickSpy}
          onBlur={onBlurSpy}
          onFocus={onFocusSpy}
          onKeyDown={onKeyDownSpy}
          onKeyUp={onKeyUpSpy}
          onMouseDown={onMouseDownSpy}
          onMouseLeave={onMouseLeaveSpy}
          onMouseUp={onMouseUpSpy}
          onTouchEnd={onTouchEndSpy}
          onTouchMove={onTouchMoveSpy}
          onTouchStart={onTouchStartSpy}
        >
          Button
        </Button>
      );

      button.simulate('click');
      expect(onClickSpy).toHaveBeenCalled();

      button.simulate('blur');
      expect(onBlurSpy).toHaveBeenCalled();

      button.simulate('focus');
      expect(onFocusSpy).toHaveBeenCalled();

      button.simulate('keydown');
      expect(onKeyDownSpy).toHaveBeenCalled();

      button.simulate('keyup');
      expect(onKeyUpSpy).toHaveBeenCalled();

      button.simulate('mousedown');
      expect(onMouseDownSpy).toHaveBeenCalled();

      button.simulate('mouseleave');
      expect(onMouseLeaveSpy).toHaveBeenCalled();

      button.simulate('mouseup');
      expect(onMouseUpSpy).toHaveBeenCalled();

      button.simulate('touchend');
      expect(onTouchEndSpy).toHaveBeenCalled();

      button.simulate('touchmove');
      expect(onTouchMoveSpy).toHaveBeenCalled();

      button.simulate('touchstart');
      expect(onTouchStartSpy).toHaveBeenCalled();
    });
  });
});
