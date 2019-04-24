import React from 'react';
import { shallow } from 'enzyme';
import LoadingOverlay from '../../components/loading_overlay';

it('renders without crashing', () => {
    const wrapper = shallow(<LoadingOverlay />);
    expect(wrapper.find('.map-overlay').length).toEqual(1);
    expect(wrapper.find('.map-overlay > div').text()).toEqual("Loading");
});
