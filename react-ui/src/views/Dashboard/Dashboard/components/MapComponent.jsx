import React, { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './Map.scss'; // Assuming you store the CSS here

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FhZGZyaCIsImEiOiJjbHZkdnlrajkwMjl6MmtvNWNxazYwNzZ1In0.XIuSvjAjqxkPVKQZy0R5rw';

const MapComponent = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const popup = useRef(new mapboxgl.Popup({ closeButton: true, closeOnClick: false }));

  useEffect(() => {
    if (map.current) return; // Initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/saadfrh/clx8yjlb800j901qs5vpm6ix7',
      center: [-8.014056811519197, 31.644846801016328],
      zoom: 15,
      pitch: 45,
      bearing: -17.6,
      antialias: true,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-left');

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: 'Search for places',
      marker: false,
    });

    map.current.addControl(geocoder);

    map.current.on('load', () => {
      const layers = map.current.getStyle().layers;
      const labelLayerId = layers.find(layer => layer.type === 'symbol' && layer.layout['text-field']).id;

      map.current.addLayer({
        id: '3d-buildings',
        source: 'composite',
        'source-layer': 'building',
        filter: ['==', 'extrude', 'true'],
        type: 'fill-extrusion',
        minzoom: 2,
        paint: {
          'fill-extrusion-color': [
            'interpolate',
            ['linear'],
            ['get', 'height'],
            0, '#F28F3B',
            3, '#fafafa',
            6, '#e75805',
            12, '#620033'
          ],
          'fill-extrusion-height': ['get', 'height'],
          'fill-extrusion-base': ['get', 'min_height'],
          'fill-extrusion-opacity': 0.6,
        },
      }, labelLayerId);
    });

    map.current.on('click', (e) => {
      const coordinates = e.lngLat;
      popup.current
        .setLngLat(coordinates)
        .setHTML(`<p>Coordinates: ${coordinates.lng}, ${coordinates.lat}</p><button id="copyButton">Copy Coordinates</button>`)
        .addTo(map.current);

      setTimeout(() => {
        document.getElementById('copyButton').onclick = () => {
          navigator.clipboard.writeText(`${coordinates.lng}, ${coordinates.lat}`);
          alert('Coordinates copied to clipboard!');
        };
      }, 100);
    });
  }, []);

  return (
    <div>
      <div ref={mapContainer} style={{ width: '100%', height: '600px' }} />
      <div id="legend">
        <h4>Building Heights</h4>
        <div><span style={{ backgroundColor: '#a4b000' }}></span>0-10 meters</div>
        <div><span style={{ backgroundColor: '#E8553D' }}></span>10-20 meters</div>
        <div><span style={{ backgroundColor: '#e75805' }}></span>20-30 meters</div>
        <div><span style={{ backgroundColor: '#620033' }}></span>30+ meters</div>
      </div>
    </div>
  );
};

export default MapComponent;
