// Default bounds loosely outlining the US
export const DEFAULT_BOUNDS = {
    _northEast: {
        lat: 55.7895,
        lng: -64.3322
    },
    _southWest: {
        lat: 11.2010,
        lng: -134.6446
    }
};

export const API_ENDPOINT = 'api/v1/addresses';

/**
 * Given a L.LatLngBounds, convert it into an API-consumable string.
 * 
 * @param {*} bounds 
 * @returns {String}
 */
export const getBoundingBoxQueryParam = (bounds) => {
    const ne = bounds._northEast;
    const sw = bounds._southWest;
    return `${ne.lng},${ne.lat},${sw.lng},${sw.lat}`;
};

/**
 * Build an API URL with bounding box as a query param.
 * 
 * @param {*} bounds 
 * @returns {String} API FQDN
 */
export const getApiUrl = (bounds) => {
    const boundingBox = getBoundingBoxQueryParam(bounds);
    return `//${window.location.host}/${API_ENDPOINT}?in_bbox=${boundingBox}`;
};

/**
 * Add commas to separate thousands
 * 
 * @param {*} number 
 */
export const commaify = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Unpack the API payload
 * 
 * @param {Object} data 
 */
export const unpackResponse = (data) => {
    const locationCount = data.count;
    const visibleLocations = data.results.length;
    let totalAddresses = 0;
    const locationCoords = data.results.map(datum => {
        totalAddresses += datum.frequency;
        const geom = datum.coords;
        return [...geom.coordinates, datum.frequency];
    });

    return {
        locationCount, visibleLocations, totalAddresses, locationCoords
    }
};