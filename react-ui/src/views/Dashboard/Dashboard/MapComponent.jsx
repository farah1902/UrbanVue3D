/* // components/MapComponent.js
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const MapComponent = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FhZGZyaCIsImEiOiJjbHZkdnlrajkwMjl6MmtvNWNxazYwNzZ1In0.XIuSvjAjqxkPVKQZy0R5rw';
    
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/saadfrh/clx8yjlb800j901qs5vpm6ix7',
      center: [-8.014056811519197, 31.644846801016328],
      zoom: 15,
      pitch: 45,
      bearing: -17.6,
      antialias: true
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-left');

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: 'Search for places',
      marker: false
    });

    map.addControl(geocoder);

    map.on('load', function () {
      const layers = map.getStyle().layers;
      const labelLayerId = layers.find(
        (layer) => layer.type === 'symbol' && layer.layout['text-field']
      ).id;

      map.addLayer(
        {
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 2,
          'paint': {
            'fill-extrusion-color': [
              'interpolate',
              ['linear'],
              ['get', 'height'],
              0,
              '#F28F3B',
              10,
              '#E8553D',
              20,
              '#e75805',
              30,
              '#620033'
            ],
            'fill-extrusion-height': ['get', 'height'],
            'fill-extrusion-base': ['get', 'min_height'],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      );
    });

    const popup = new mapboxgl.Popup({
      closeButton: true,
      closeOnClick: false
    });

    map.on('click', function (e) {
      const coordinates = e.lngLat;
      popup.setLngLat(coordinates)
        .setHTML(`<div><p>Coordinates: ${coordinates.lng}, ${coordinates.lat}</p><button onclick="navigator.clipboard.writeText('${coordinates.lng}, ${coordinates.lat}'); alert('Coordinates copied to clipboard!');">Copy Coordinates</button></div>`)
        .addTo(map);
    });

  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div id="map" style={{ width: '100%', height: '600px' }}></div>
      <div id="legend" style={{ position: 'absolute', bottom: '30px', left: '10px', background: 'white', padding: '10px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#333' }}>
        <h4>Building Heights</h4>
        <div><span style={{ backgroundColor: '#F28F3B', width: '20px', height: '20px', marginRight: '5px' }}></span>0-10 meters</div>
        <div><span style={{ backgroundColor: '#E8553D', width: '20px', height: '20px', marginRight: '5px' }}></span>10-20 meters</div>
        <div><span style={{ backgroundColor: '#e75805', width: '20px', height: '20px', marginRight: '5px' }}></span>20-30 meters</div>
        <div><span style={{ backgroundColor: '#620033', width: '20px', height: '20px', marginRight: '5px' }}></span>30+ meters</div>
      </div>
    </div>
  );
};

export default MapComponent;
 */

// components/MapboxMap.js
// components/MapboxMap.js

import React, { useEffect } from 'react';
//import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css'; 
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
const MapboxMap = () => {
  useEffect(() => {
    // Include the Mapbox GL JS script
    const script = document.createElement('script');
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js';
    script.async = true;
    document.body.appendChild(script);

    // Include the Mapbox GL Geocoder script
    const geocoderScript = document.createElement('script');
    geocoderScript.src = 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js';
    geocoderScript.async = true;
    document.body.appendChild(geocoderScript);

    // Function to initialize the map after the scripts are loaded
    const initializeMap = () => {
      if (window.mapboxgl && window.MapboxGeocoder) {
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2FhZGZyaCIsImEiOiJjbHZkdnlrajkwMjl6MmtvNWNxazYwNzZ1In0.XIuSvjAjqxkPVKQZy0R5rw';
        const map = new mapboxgl.Map({
          container: 'map', // container ID
          style: 'mapbox://styles/saadfrh/clx8yjlb800j901qs5vpm6ix7', // style URL
          center: [-8.014056811519197, 31.644846801016328], // starting position [lng, lat]
          zoom: 15, // starting zoom
          pitch: 45, // tilt the map
          bearing: -17.6, // rotate the map
          antialias: true // create the gl context with MSAA antialiasing, so custom layers are antialiased
        });

        // Add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), 'top-left');

        // Initialize the Geocoder
        const geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
          placeholder: 'Search for places',
          marker: true,// Disable the default marker
          /* render: function(item) {
            const maki = item.properties.maki || 'marker';
            return `<div class='geocoder-dropdown-item'>
                      <span class='geocoder-icon geocoder-icon-${maki}'></span>
                      <span class='geocoder-text'>${item.text}</span>
                    </div>`;
          } */
        });

        // Add the Geocoder to the map
        map.addControl(geocoder);

        // Load 3D buildings
        map.on('load', function () {
          // Insert the layer beneath any symbol layer
          const layers = map.getStyle().layers;
          const labelLayerId = layers.find(
            (layer) => layer.type === 'symbol' && layer.layout['text-field']
          ).id;

          // Add a 3D buildings layer
          map.addLayer(
            {
              'id': '3d-buildings',
              'source': 'composite',
              'source-layer': 'building',
              'filter': ['==', 'extrude', 'true'],
              'type': 'fill-extrusion',
              'minzoom': 2,
              'paint': {
                'fill-extrusion-color': [
                  'interpolate',
                  ['linear'],
                  ['get', 'height'],
                  0,
                  '#F28F3B',
                  3,
                  '#fafafa',
                  6,
                  '#E8553D',
                  12,
                  '#620033'
                ],
                'fill-extrusion-height': ['get', 'height'],
                'fill-extrusion-base': ['get', 'min_height'],
                'fill-extrusion-opacity': 0.6
              }
            },
            labelLayerId
          );
        });

        // Popup for displaying coordinates
/*         const popup = new mapboxgl.Popup({
          closeButton: true,
          closeOnClick: true
        }); */

        // Show coordinates on click and provide copy button
    /*     map.on('click', function (e) {
          const coordinates = e.lngLat;
          popup.setLngLat(coordinates)
            .setHTML(`<p>Coordinates: ${coordinates.lng}, ${coordinates.lat}</p><button onclick="navigator.clipboard.writeText('${coordinates.lng}, ${coordinates.lat}').then(() => alert('Coordinates copied to clipboard!'));">Copy Coordinates</button>`)
            .addTo(map);
        }); */
      }
    };

    // Wait for the scripts to load and then initialize the map
    script.onload = initializeMap;
    geocoderScript.onload = initializeMap;

    // Cleanup function to remove scripts when the component unmounts
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(geocoderScript);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div id="map" style={{ position: 'absolute',right:0, top: 5, bottom: 0, width: '100%', height: '700px' }}></div>
{/*        <div id="legend" style={{ position: 'absolute', bottom: '30px', left: '10px', background: 'white', padding: '10px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#333' }}>
        <h4>Building Heights</h4>
        <div><span style={{ display: 'inline-block', width: '20px', height: '20px', marginRight: '5px', backgroundColor: '#a4b000' }}></span>0-10 meters</div>
        <div><span style={{ display: 'inline-block', width: '20px', height: '20px', marginRight: '5px', backgroundColor: '#E8553D' }}></span>10-20 meters</div>
        <div><span style={{ display: 'inline-block', width: '20px', height: '20px', marginRight: '5px', backgroundColor: '#e75805' }}></span>20-30 meters</div>
        <div><span style={{ display: 'inline-block', width: '20px', height: '20px', marginRight: '5px', backgroundColor: '#620033' }}></span>30+ meters</div>
      </div>  */}
      
    </div>
  );
};

export default MapboxMap;

