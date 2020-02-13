import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls component', () => {
  const wrapper = shallow(<Controls
    actions=''
    handleSelection={() => {}} />);
  it('renders Controls', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
  
