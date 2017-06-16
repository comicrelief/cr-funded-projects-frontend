import React, { Component } from 'preact'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const MyPopupMarker = ({ map, position, children }) => (
  <Marker map={map} position={position}>
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
);

const MyMarkersList = ({ map, markers }) => {
  const items = markers.map(({ key, ...props }) => (
      <MyPopupMarker key={key} map={map} {...props} />
  ));
  return <div style={{display: 'none'}}>{items}</div>;
};

export default class GrantsMap extends Component {

  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  /**
   *
   * @returns {XML}
   */
  render(props)
  {
    const markers = [];

    props.results.forEach((result) => {
      console.log(result._source);

      if (result._source.Lat && result._source.Lng) {
        markers.push({
          position: [result._source.Lat, result._source.Lng],
          children: result._source.Name
        });
      }
    });

    const position = [this.state.lat, this.state.lng]
    
    return (
      <Map center={position} zoom={1}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MyMarkersList markers={markers} />
      </Map>
    );
  }
}

