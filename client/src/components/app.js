import React, { Component } from 'react';
import axios from 'axios';
import IPMap from './ip_map';
import ExplanatoryMessage from './explanatory_message';
import LoadingOverlay from './loading_overlay';
import { getApiUrl, unpackResponse, DEFAULT_BOUNDS} from '../utils';

class App extends Component {
    state = {
        locationCount: 0,
        visibleLocations: 0,
        totalAddresses: 0,
        locationCoords: [],
        bounds: DEFAULT_BOUNDS
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        this.setState({loading: true});
        
        const apiUrl = getApiUrl(this.state.bounds);
        axios(apiUrl)
            .then( (response) => {
                const { data } = response;
                if (data.results) {
                    const {
                        locationCount, visibleLocations, locationCoords,
                        totalAddresses
                    } = unpackResponse(data);

                    this.setState({
                        locationCount, visibleLocations, locationCoords,
                        totalAddresses
                    });
                }
            })
            .catch(err => console.log(err))
            .then(() => this.setState({loading: false}));
    }

    /**
     * Set an upadted bounding box
     */
    setBoundingBox = (bounds) => {
        this.setState({bounds}, () => this.fetchData());
    }

    render() {
        const {
            locationCount, visibleLocations, locationCoords, totalAddresses,
            loading
        } = this.state;

        return (
            <React.Fragment>
                <ExplanatoryMessage
                    locationCount={locationCount}
                    visibleLocations={visibleLocations}
                    totalAddresses={totalAddresses} />
                <div className="box map-container">
                    <IPMap
                        addressCoords={locationCoords}
                        setBoundingBox={(bounds) => this.setBoundingBox(bounds)} />
                    {loading && <LoadingOverlay />}
                </div>
            </React.Fragment>
        );
    }
}

export default App;