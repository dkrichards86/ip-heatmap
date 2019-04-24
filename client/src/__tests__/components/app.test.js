import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/app';
import IPMap from '../../components/ip_map';
import ExplanatoryMessage from '../../components/explanatory_message';
import LoadingOverlay from '../../components/loading_overlay';

it('renders base components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ExplanatoryMessage).length).toEqual(1);
    expect(wrapper.find(IPMap).length).toEqual(1);
});

it('conditionally renders loading component', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ loading: true });
    expect(wrapper.find(LoadingOverlay).length).toEqual(1);
});