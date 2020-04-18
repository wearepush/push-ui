import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { reduxForm } from 'redux-form';
import formStore from '../../__mocks__/formStore';
import { Button, FormButton } from '../../../index';

let store;
beforeEach(() => {
  store = formStore;
});

const makeForm = ({ renderSpy = undefined, onClickSpy = undefined, ...rest }) => {
  const Form = (props) => {
    renderSpy(props);
    return (
      <form>
        <FormButton type="submit" form="test" onClick={onClickSpy} {...rest}>
          Remote Button
        </FormButton>
      </form>
    );
  };
  return Form;
};

const renderForm = (Form, formState, config = {}) => {
  const Decorated = reduxForm({ form: 'testForm', ...config })(Form);
  return mount(
    <Provider store={store}>
      <Decorated />
    </Provider>
  );
};

describe('FormButton', () => {
  it('should render checkbox with initial state', () => {
    const renderSpy = jest.fn(() => {});
    const Form = makeForm({ renderSpy });
    const dom = renderForm(Form, {}, {});

    expect(renderSpy).toHaveBeenCalled();
    expect(renderSpy).toHaveBeenCalledTimes(1);

    expect(dom.find(Button).length).toBe(1);

    dom.unmount();
  });

  it("shouldn't handle onClick", () => {
    const renderSpy = jest.fn(() => {});
    const onClickSpy = undefined;
    const dispatchSpy = jest.fn();
    const Form = makeForm({
      renderSpy,
      onClickSpy,
      dispatch: dispatchSpy,
    });
    const dom = renderForm(Form, {}, {});

    const inputElement = dom.find('button');
    // onClick
    inputElement.simulate('click');
    expect(dispatchSpy).not.toHaveBeenCalled();

    dom.unmount();
  });

  it('should handle onClick', () => {
    const renderSpy = jest.fn(() => {});
    const onClickSpy = jest.fn();
    const Form = makeForm({
      renderSpy,
      onClickSpy,
    });
    const dom = renderForm(Form, {}, {});

    const inputElement = dom.find('button');
    // onClick
    inputElement.simulate('click');
    expect(onClickSpy).toHaveBeenCalledWith(
      expect.objectContaining({}),
      expect.objectContaining({ meta: { form: 'test' }, type: '@@redux-form/SUBMIT' })
    );

    expect(renderSpy).toHaveBeenCalledTimes(1);

    dom.unmount();
  });
});
