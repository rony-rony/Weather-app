import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Weather from './components/Weather';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render a Weather', () => {
  const wrapper = shallow(
      <Weather>Hello Jest!</Weather>
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders App wrapper without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
