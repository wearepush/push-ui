import React from 'react';
import { object, string } from 'prop-types';
import { Field } from 'redux-form';
import { FormField, TagsWithOutContext } from '../../index';

class _FormTagsWithOutContext extends React.Component {
  render() {
    const {
      id,
      input,
      label,
      meta,
      ...rest
    } = this.props;
    const _id = id || input.name;
    return (
      <FormField
        label={label}
        name={_id}
      >
        <TagsWithOutContext
          {...rest}
          active={meta.active}
          id={id}
          invalid={meta.touched && meta.invalid}
          onAdd={(values) => input.onChange(values)}
          onDrag={(values) => input.onChange(values)}
          onDelete={(values) => input.onChange(values)}
          onFocus={(event, values) => input.onFocus(values)}
          onBlur={(event, values) => input.onBlur(values)}
          name={input.name}
          value={input.value}
          valid={!!input.value && !meta.error && !meta.warning && meta.valid}
        />
      </FormField>
    );
  }
}

_FormTagsWithOutContext.propTypes = {
  id: string,
  input: object.isRequired,
  label: string,
  meta: object.isRequired,
};

_FormTagsWithOutContext.defaultProps = {
  id: '',
  label: '',
};

class FormTagsWithOutContext extends React.Component {
  render() {
    return (
      <Field {...this.props} component={_FormTagsWithOutContext} type="select-multiple" />
    );
  }
}

export default FormTagsWithOutContext;
