import React, { useEffect, useState } from 'react';
//import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css'; 
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';


const MapboxMap = () => {
  const [map, setMap] = useState(null);

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
          style: 'mapbox://styles/saadfrh/clxszs0bc00rj01qr7142emqi', // style URL
          center: [-8.014056811519197, 31.644846801016328], // starting position [lng, lat]
          zoom: 8, // starting zoom
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
          marker: false,// Disable the default marker
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
                  'rgb(52, 254, 227)',
                  3,
                  'rgb(52, 254, 126)',
                  6,
                  'rgb(170, 254, 52)',
                  9,
                  'rgb(254, 220, 52)',
                  12,
                  'rgb(254, 143, 52)'
                ],
                'fill-extrusion-height': ['get', 'height'],
                'fill-extrusion-base': ['get', 'min_height'],
                'fill-extrusion-opacity': 0.9
              }
            },
            labelLayerId
          );

          // Add custom image to the map
          map.loadImage(
            'https://i.postimg.cc/yddLX0NY/gep1.png', // URL of the image
            (error, image) => {
              if (error) throw error;

              map.addImage('gep', image);

              map.addSource('point', {
                type: 'geojson',
                data: {
                  type: 'FeatureCollection',
                  features: [
                    {
                      type: 'Feature',
                      geometry: {
                        type: 'Point',
                        coordinates: [-7.928708490653558, 32.22078221151739] // Exact coordinates for your image
                      }
                    }
                  ]
                }
              });

              map.addLayer({
                id: 'image-layer',
                type: 'symbol',
                source: 'point',
                layout: {
                  'icon-image': 'gep',
                  'icon-size': 0.25
                }
              });
            }
          );

        });

                // Add basemap switcher
                const basemaps = [
                  { label: 'Default', style: 'mapbox://styles/saadfrh/clxszs0bc00rj01qr7142emqi' },
                  { label: 'Satellite', style: 'mapbox://styles/mapbox/satellite-v9' },
                  { label: 'Streets', style: 'mapbox://styles/mapbox/streets-v11' },

                ];

                const switcherContainer = document.createElement('div');
                switcherContainer.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';

                // Create a dropdown (select) element
                const dropdown = document.createElement('select');
                dropdown.style.padding = '5px';
                dropdown.style.fontSize = '14px';
                dropdown.style.color = '#000';
                dropdown.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                dropdown.style.border = '1px solid #007bff';
                dropdown.style.borderRadius = '5px';
                dropdown.style.cursor = 'pointer';

                // Populate the dropdown with options
                basemaps.forEach((basemap) => {
                  const option = document.createElement('option');
                  option.textContent = basemap.label;
                  option.value = basemap.style;
                  dropdown.appendChild(option);
                });

                // Handle dropdown change event
                dropdown.onchange = (event) => {
                  const selectedStyle = event.target.value;
                  map.setStyle(selectedStyle);
                };

                // Add the dropdown to the switcher container
                switcherContainer.appendChild(dropdown);

                map.addControl({
                  onAdd: () => {
                    return switcherContainer;
                  },
                  onRemove: () => {
                    switcherContainer.parentNode.removeChild(switcherContainer);
                  },
                });

                
        
                setMap(map);


/*       // Popup for displaying coordinates
const popup = new mapboxgl.Popup({
  closeButton: false, // We will add a custom close button
  closeOnClick: true
});

// Show coordinates on click and provide copy button
map.on('click', function (e) {
  const coordinates = e.lngLat;
  popup.setLngLat(coordinates)
    .setHTML(`
      <div style="color: black; font-family: Arial, sans-serif; font-size: 14px;">
        <p>Coordinates: ${coordinates.lng}, ${coordinates.lat}</p>
        <button 
          onclick="navigator.clipboard.writeText('${coordinates.lng}, ${coordinates.lat}').then(() => alert('Coordinates copied to clipboard!'));" 
          style="background-color: #007bff; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; margin-right: 5px;">
          Copy Coordinates
        </button>
        <button 
          onclick="document.getElementById('close-popup-btn').parentNode.parentNode.remove();" 
          id="close-popup-btn"
          style="background-color: #dc3545; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer;">
          Close
        </button>
      </div>
    `)
    .addTo(map);
}); */

// Popup for displaying coordinates
const popup = new mapboxgl.Popup({
  closeButton: true,  // Enable the built-in close button
  closeOnClick: true
});

// Show coordinates on click and provide copy button
map.on('click', function (e) {
  const coordinates = e.lngLat;
  popup.setLngLat(coordinates)
    .setHTML(`
      <div style="color: black; font-family: Arial, sans-serif; font-size: 14px;">
        <style>
          /* Style for the close button */
          .mapboxgl-popup-close-button {
            font-size: 20px; /* Make the button larger */
            color: grey; /* Change the color to grey */
            top: 5px;
            right: 5px;
          }
          .mapboxgl-popup-close-button:hover {
            color: darkgrey; /* Slightly darker grey on hover */
          }
        </style>
        <p><b>Coordinates: <b/><p/>
        <p>
        <br/>
        Longitude: ${coordinates.lng}, <br/>Latitude: ${coordinates.lat}</p>
        <br/>
        <button 
          onclick="navigator.clipboard.writeText('${coordinates.lng}, ${coordinates.lat}').then(() => alert('Coordinates copied to clipboard!'));" 
          style="background-color: #007bff; color: white; border: none; padding: 8px 12px; border-radius: 7px; cursor: pointer; margin-right: 5px;">
          Copy Coordinates
        </button>
      </div>
    `)
    .addTo(map);
});



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
      <div id="map" style={{ position: 'absolute',right:0, top: 0, bottom: 0, width: '100%', height: '569px' }}></div>
      {/* <div id="legend" style={{ position: 'absolute', bottom: '30px', left: '10px', background: 'white', padding: '10px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#333' }}>
        <h4>Building Heights</h4>
        <div><span style={{ backgroundColor: 'rgb(52, 254, 227)', display: 'inline-block', width: '20px', height: '20px', marginRight: '5px' }}></span>0-3.44 meters</div>
        <div><span style={{ backgroundColor: 'rgb(52, 254, 126)', display: 'inline-block', width: '20px', height: '20px', marginRight: '5px' }}></span>3.5-6.88 meters</div>
        <div><span style={{ backgroundColor: 'rgb(170, 254, 52)', display: 'inline-block', width: '20px', height: '20px', marginRight: '5px' }}></span>7-10.32 meters</div>
        <div><span style={{ backgroundColor: 'rgb(254, 220, 52)', display: 'inline-block', width: '20px', height: '20px', marginRight: '5px' }}></span>10.5-13.76 meters</div>
        <div><span style={{ backgroundColor: 'rgb(254, 143, 52)', display: 'inline-block', width: '20px', height: '20px', marginRight: '5px' }}></span>13.8+ meters</div>
      </div> */}
      
    </div>
  );
};

export default MapboxMap;

