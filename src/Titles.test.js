import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Titles from './components/Titles';

it('renders Titles wrapper without crashing', () => {
    const wrapper = shallow(<Titles />);
    expect(wrapper).toMatchSnapshot();
});

it('the type ot titles child', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Titles />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
    expect(result.props.children).toEqual([
        <h1 className="title-container__title">Weather Finder</h1>,
        <p className="title-container__subtitle">Find out temperature, conditions and more...</p>
    ]);
});


