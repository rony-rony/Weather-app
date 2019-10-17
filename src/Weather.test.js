import React from 'react';
import Weather from './components/Weather';
import { shallow } from 'enzyme';

it('renders Weather wrapper without crashing', () => {
    const wrapper = shallow(<Weather />);
    expect(wrapper).toMatchSnapshot();
  });
