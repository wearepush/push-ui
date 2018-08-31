import React, { PureComponent } from 'react';
import { bool, object, string } from 'prop-types';
import { Field } from 'redux-form';
import { FormField, Tags, TagsWithOutContext } from '../../index';

const _FormTags = ({
  id,
  input,
  label,
  meta,
  withoutContext,
  ...rest
}) => {
  const _id = id || input.name;
  let Component = Tags;
  if (withoutContext) {
    Component = TagsWithOutContext;
  }
  return (
    <FormField
      label={label}
      name={_id}
      meta={meta}
      isEmpty={input.value.length === 0}
    >
      <Component
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
        valid={input.value.length > 0 && !meta.error && !meta.warning && meta.valid}
      />
    </FormField>
  );
};

_FormTags.propTypes = {
  id: string,
  input: object.isRequired,
  label: string,
  meta: object.isRequired,
  withoutContext: bool.isRequired,
};

_FormTags.defaultProps = {
  id: '',
  label: '',
  withoutContext: false,
};

class FormTags extends PureComponent {
  render() {
    return (
      <Field {...this.props} component={_FormTags} type="select-multiple" />
    );
  }
}

export default FormTags;
