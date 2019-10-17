import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import Form from './components/Form';

describe('<button> in Form', () => {
    let actionMock, wrapper;

    beforeEach(() => {
        actionMock = jest.fn();
        wrapper = shallow(<Form />);
    });

    it('should render correctly', () => {
        expect(wrapper.find('button')).toHaveLength(1);
        expect(wrapper.text()).toEqual('Get Weather');
    });
});

it('renders Form wrapper without crashing', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper).toMatchSnapshot();
});

it('disables the submit button during submission and enables it when done', async () => {
    let wrapper = shallow(<Form />);
    const onSubmitFn = jest.fn(async () => {
        await new Promise(resolve => resolve());
            TestUtils.Simulate.submit(wrapper);
            expect(wrapper.find('button').disabled).toBeTruthy();
            await onSubmitFn.mock.results[0].value;
            expect(wrapper.find('button').disabled).toBeFalsy();
    });
    

});

