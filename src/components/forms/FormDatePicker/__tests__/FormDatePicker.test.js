import React, { Component } from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { reduxForm } from 'redux-form';
import formStore from '../../__mocks__/formStore';
import { DatePicker, FormField, FormDatePicker } from '../../../index';

let store;
beforeEach(() => {
  store = formStore;
});

const makeForm = ({
  renderSpy = undefined,
  onFocusSpy = undefined,
  onChangeSpy = undefined,
  onBlurSpy = undefined,
}) => (
  class Form extends Component {
    render() {
      renderSpy(this.props);
      return (
        <form>
          <FormDatePicker
            label="Remember"
            name="remember"
            placeholder="Remember"
            onFocus={onFocusSpy}
            onChange={onChangeSpy}
            onBlur={onBlurSpy}
          />
        </form>
      );
    }
  }
);

const renderForm = (Form, formState, config = {}) => {
  const Decorated = reduxForm({ form: 'testForm', ...config })(Form);
  return mount(
    <Provider store={store}>
      <Decorated />
    </Provider>, {
      attachTo: document.body
    }
  );
};

describe('FormDatePicker', () => {
  it('should render checkbox with initial state', () => {
    const console = global.console;
    global.console = { error: jest.fn(), log: global.console.log };
    const renderSpy = jest.fn(() => {});
    const Form = makeForm({ renderSpy });
    const dom = renderForm(Form, {}, {});

    expect(renderSpy).toHaveBeenCalled();
    expect(renderSpy).toHaveBeenCalledTimes(1);

    expect(dom.find(DatePicker).length).toBe(1);
    expect(dom.find(FormField).length).toBe(1);

    dom.unmount();
    global.console = console;
  });

  it('should handle onFocus, onChange, onBlur', () => {
    const console = global.console;
    global.console = { error: jest.fn(), log: global.console.log };
    const renderSpy = jest.fn(() => {});
    const onFocusSpy = jest.fn();
    const onChangeSpy = jest.fn();
    const onBlurSpy = jest.fn();
    const Form = makeForm({
      renderSpy,
      onFocusSpy,
      onChangeSpy,
      onBlurSpy
    });
    const dom = renderForm(Form, {}, {});

    const flatpickr = document.querySelector(".flatpickr-input")._flatpickr;
    flatpickr.input.focus();

    // onFocus
    expect(onFocusSpy).toHaveBeenCalled();
    expect(renderSpy).toHaveBeenCalledTimes(1);

    // onChange
    flatpickr.setDate("18-08-16", true);
    expect(onChangeSpy).toHaveBeenCalled();
    expect(renderSpy).toHaveBeenCalledTimes(2);

    // onBlur
    flatpickr.close();

    dom.unmount();
    global.console = console;
  });
});
