import React, { Component } from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { reduxForm } from 'redux-form';
import formStore from '../../__mocks__/formStore';
import { Tags, FormField, FormTags } from '../../../index';

let store;
beforeEach(() => {
  store = formStore;
});

const makeForm = ({
  renderSpy = undefined,
  onDragSpy = undefined,
  onFocusSpy = undefined,
  onChangeSpy = undefined,
  onBlurSpy = undefined,
}) => (
  class Form extends Component {
    render() {
      renderSpy(this.props);
      return (
        <form>
          <FormTags
            label="Tags"
            name="tags"
            placeholder="Tags"
            onDrag={onDragSpy}
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
    </Provider>
  );
};

describe('FormTags', () => {
  it('should render tags with initial state', () => {
    const renderSpy = jest.fn(() => {});
    const Form = makeForm({ renderSpy });
    const dom = renderForm(Form, {}, {});

    expect(renderSpy).toHaveBeenCalled();
    expect(renderSpy).toHaveBeenCalledTimes(1);

    expect(dom.find(Tags).length).toBe(1);
    expect(dom.find(FormField).length).toBe(1);

    dom.unmount();
  });

  it('should handle onFocus, onChange, onBlur', () => {
    const renderSpy = jest.fn(() => {});
    const onFocusSpy = jest.fn();
    const onChangeSpy = jest.fn();
    const onBlurSpy = jest.fn();
    const onDragSpy = jest.fn();
    const Form = makeForm({
      renderSpy,
      onFocusSpy,
      onChangeSpy,
      onBlurSpy,
      onDragSpy,
    });
    const dom = renderForm(Form,
      {},
      {
        initialValues: {
          tags: [
            { id: 'USA', value: 'USA' },
            { id: 'Germany', value: 'Germany' }
          ]
        }
      });

    const inputElement = dom.find('.TagsWrapper__input_field');

    // onFocus
    inputElement.simulate('focus');

    expect(onFocusSpy).toHaveBeenCalled();
    expect(renderSpy).toHaveBeenCalledTimes(2);

    // onChange
    inputElement.simulate('change', { target: { value: 'Test' } });
    inputElement.simulate('keyDown', { keyCode: 40 });
    inputElement.simulate('keyDown', { keyCode: 13 });
    expect(onChangeSpy).toHaveBeenCalledTimes(1);

    expect(renderSpy).toHaveBeenCalledTimes(3);

    const tagRemoveBtn = dom.find('.TagsWrapper__remove_btn').last();
    tagRemoveBtn.simulate('click');
    expect(onChangeSpy).toHaveBeenCalledTimes(2);

    // // onBlur
    inputElement.simulate('blur');
    expect(onBlurSpy).toHaveBeenCalled();
    expect(renderSpy).toHaveBeenCalledTimes(5);

    dom.unmount();
  });
});
