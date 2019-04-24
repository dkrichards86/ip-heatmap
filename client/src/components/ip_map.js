import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';

const TILES = "//stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png";
const ATTRIBUTION = "Map tiles by <a href=\"http://stamen.com\">Stamen Design</a>, under <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a>. Data by <a href=\"http://openstreetmap.org\">OpenStreetMap</a>, under <a href=\"http://www.openstreetmap.org/copyright\">ODbL</a>.";

/**
 * Render the Leaflet map.
 * 
 * This uses React-leaflet and react-leaflet-heatmap-layer to present the data.
 * @param {*} ...props
 */
const IPMap = ({setBoundingBox, addressCoords}) => (
    <Map
        worldCopyJump
        center={[37.1, -97.2]}
        zoom={4}
        minZoom={3}
        maxZoom={16}
        onMoveEnd={(event) => setBoundingBox(event.target.getBounds())}>
        <TileLayer
            url={TILES}
            attribution={ATTRIBUTION} />
        <HeatmapLayer
            points={addressCoords}
            longitudeExtractor={m => m[0]}
            latitudeExtractor={m => m[1]}
            intensityExtractor={m => m[2]} />
    </Map>
);

export default IPMap;
