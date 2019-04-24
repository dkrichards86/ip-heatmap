import React from 'react';

/**
 * Render a shadowed overlay.
 * 
 * The overlay has two primary functions. First, it communicates loading to the
 * user. Second, it prevents map pan/zoom so we don't send off several consecutive
 * API requests.
 * 
 */
const LoadingOverlay = () => (
    <div className="map-overlay">
        <div>Loading</div>
    </div>
);

export default LoadingOverlay;
