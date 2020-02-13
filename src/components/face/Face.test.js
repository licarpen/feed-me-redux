import React from 'react';
import { shallow } from 'enzyme';
import Face from './Face';

describe('Face component', () => {
  it('renders Face', () => {
    const wrapper = shallow(<Face />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
