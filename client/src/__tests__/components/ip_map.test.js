import React from 'react';
import { shallow } from 'enzyme';
import IPMap from '../../components/ip_map';
import { Map, TileLayer } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';

it('renders the map', () => {
    const wrapper = shallow(<IPMap />);
    expect(wrapper.find(Map).length).toEqual(1);
    expect(wrapper.find(TileLayer).length).toEqual(1);
    expect(wrapper.find(HeatmapLayer).length).toEqual(1);
});
