import React from 'react';
import { shallow } from 'enzyme';
import ExplanatoryMessage from '../../components/explanatory_message';

it('renders basic structure', () => {
    const wrapper = shallow(
        <ExplanatoryMessage
            locationCount={10}
            visibleLocations={8}
            totalAddresses={16} />
    );

    expect(wrapper.find('.title').text()).toEqual("Explore IPv4 Locations");
    expect(wrapper.find('.subtitle').text()).toEqual("Pan and zoom to explorer IPv4 hotspots around the world.");
    expect(wrapper.find('p').length).toEqual(1);
});

it('renders equal count message', () => {
    const wrapper = shallow(
        <ExplanatoryMessage
            locationCount={843}
            visibleLocations={843}
            totalAddresses={1652} />
    );

    const message = wrapper.find('p').text();
    const expected = "Currently showing 843 IP address locations. The locations displayed account for 1,652 unique IP addresses."
    expect(message).toEqual(expected);
});

it('renders top xxx message', () => {
    const wrapper = shallow(
        <ExplanatoryMessage
            locationCount={81383}
            visibleLocations={1000}
            totalAddresses={16524} />
    );

    const message = wrapper.find('p').text();
    const expected = "Currently showing the top 1,000 IP address locations out of 81,383. The locations displayed account for 16,524 unique IP addresses."
    expect(message).toEqual(expected);
});

it('renders no counts message', () => {
    const wrapper = shallow(
        <ExplanatoryMessage
            locationCount={0}
            visibleLocations={0}
            totalAddresses={0} />
    );

    const message = wrapper.find('p').text();
    const expected = "There are no IP addresses in the selected region."
    expect(message).toEqual(expected);
});
