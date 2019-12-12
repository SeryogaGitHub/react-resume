import React from "react";
import {Map, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';

class MapContainer extends React.Component {

  render() {
    const {location, google, zoom, className} = this.props;

    return (
          <Map
              google={google}
              zoom={zoom}
              initialCenter={location}
              className={className}>

            <Marker onClick={this.onMarkerClick}
                    name={'Current location'}
                    title={'Місце проживання'}/>

          </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyASPycZswOJ1QcCtU3au0M0jJh1HdlzVQI')
})(MapContainer)

// center: { lat: 50.254556, lng: 28.658730 },