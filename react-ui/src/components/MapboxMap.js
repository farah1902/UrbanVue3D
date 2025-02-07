import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
//import '@mapbox/mapbox-gl/dist/mapbox-gl.css';
import { Box } from "@chakra-ui/react";
import 'mapbox-gl/dist/mapbox-gl.css';


// Your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FhZGZyaCIsImEiOiJjbHg2YWtheDYwY2kyMmpyMDB1a2ZyN2d0In0.L0K_CIiyuaWSM9yoEuezGg';

// Your Mapbox access token
//mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const MapboxMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // Map style
      center: [-74.5, 40], // Initial position [lng, lat]
      zoom: 9, // Initial zoom level
    });
  }, []);

  return (
    <Box
      ref={mapContainer}
      width="100%"
      height="400px"
      borderRadius="15px"
    />
  );
};

export default MapboxMap;

