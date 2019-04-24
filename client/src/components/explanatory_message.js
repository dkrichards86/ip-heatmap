import React from 'react';
import { commaify } from '../utils';

/**
 * Render an explanatory message.
 * 
 * This message includes contextual information about the data displayed.
 * 
 * @param {Object} ...props
 */
const ExplanatoryMessage = ({locationCount, visibleLocations, locationCoords, totalAddresses}) => {
    let message = null;
    if (locationCount === visibleLocations && locationCount > 0) {
        message = (
            <p>
                Currently showing {commaify(locationCount)} IP address
                location{locationCount.length !== 1 ? 's' : ''}. The locations
                displayed account for {commaify(totalAddresses)} unique IP
                address{totalAddresses.length !== 1 ? 'es' : ''}.
            </p>
        );
    } else if (locationCount === 0) {
        message = (
            <p>
                There are no IP addresses in the selected region.
            </p>
        );
    } else {
        message = (
            <p>
                Currently showing the top {commaify(visibleLocations)} IP address
                location{locationCount.length !== 1 ? 's' : ''} out
                of {commaify(locationCount)}. The locations displayed account
                for {commaify(totalAddresses)} unique IP
                address{totalAddresses.length !== 1 ? 'es' : ''}.
            </p>
        );
    }

    return (
        <section className="section">
            <div className="container">
                <h1 className="title">Explore IPv4 Locations</h1>
                <h2 className="subtitle">
                    Pan and zoom to explorer IPv4 hotspots around the world.
                </h2>
                {message}
            </div>
        </section>
    );
};

export default ExplanatoryMessage;
