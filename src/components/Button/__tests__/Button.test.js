import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

test('<Button />', () => {
  const footer = shallow(
    <Button />
  );
  expect(footer.find('div').length).toBe(1);
});
