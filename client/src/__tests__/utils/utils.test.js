import L from 'leaflet';
import {
    getBoundingBoxQueryParam, getApiUrl, commaify, unpackResponse,
    API_HOST, ADDRESS_ENDPOINT 
} from '../../utils';

it('getBoundingBoxQueryParam() builds a bounding box query param', () => {
    const northEast = L.latLng(55.8, -64.3);
    const southWest = L.latLng(11.2, -134.6);
    const bounds = new L.LatLngBounds(northEast, southWest);

    expect(getBoundingBoxQueryParam(bounds)).toEqual('-64.3,55.8,-134.6,11.2');
});

it('getApiUrl() builds an API URL', () => {
    const northEast = L.latLng(55.8, -64.3);
    const southWest = L.latLng(11.2, -134.6);
    const bounds = new L.LatLngBounds(northEast, southWest);

    expect(getApiUrl(bounds)).toEqual(`${API_HOST}/${ADDRESS_ENDPOINT}?in_bbox=-64.3,55.8,-134.6,11.2`);
});

it('adds commas to numbers', () => {
    expect(commaify(100)).toEqual('100');
    expect(commaify(1000)).toEqual('1,000');
    expect(commaify(12345)).toEqual('12,345');
    expect(commaify(123456)).toEqual('123,456');
});

it('unpackResponse() parses an API payload', () => {
    const payload = {
        count: 21,
        results: [
            {coords: {type: "Point", coordinates: [-78.8426,35.9806]}, frequency: 1028},
            {coords: {type: "Point", coordinates: [-78.8764,36.0383]}, frequency: 801},
            {coords: {type: "Point", coordinates: [-78.9291,35.961]}, frequency: 640},
            {coords: {type: "Point", coordinates: [-78.8473,35.8332]}, frequency: 332},
            {coords: {type: "Point", coordinates: [-79.0035,35.9182]}, frequency: 297},
            {coords: {type: "Point", coordinates: [-78.9178,35.9112]}, frequency: 289},
            {coords: {type: "Point", coordinates: [-78.9464,36.0229]}, frequency: 236},
            {coords: {type: "Point", coordinates: [-78.8955,35.9968]}, frequency: 232}
        ]
    };

    const unpacked = unpackResponse(payload);

    expect(unpacked.locationCount).toEqual(21);
    expect(unpacked.locationCoords.length).toEqual(8);
    expect(unpacked.visibleLocations).toEqual(8);
    expect(unpacked.totalAddresses).toEqual(3855);
});
