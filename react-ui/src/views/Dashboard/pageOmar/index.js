// Chakra imports
import { Flex, Box, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-sidebar-v2/css/leaflet-sidebar.min.css";

// Importing leaflet-sidebar as a side effect to ensure it's bundled
import "leaflet-sidebar-v2/js/leaflet-sidebar.min.js";

function MapComponent() {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar open/close
  const [isLayerVisible, setLayerVisible] = useState(true); // State to toggle layer visibility
  const [geojsonLayer, setGeojsonLayer] = useState(null); // State to hold the GeoJSON layer
  const [map, setMap] = useState(null); // State to hold the map instance
  

  useEffect(() => {
    // Initialize the map
    const newMap = L.map("map").setView([32.23349304037605, -7.939625464818718], 10);
    setMap(newMap); // Store the map instance in state

    // Add OpenStreetMap tiles
    const openStreetMapLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: 'By Saad Farah',
    });

    // Add Satellite tiles using Mapbox
    const satelliteLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2FhZGZyaCIsImEiOiJjbHZkdnlrajkwMjl6MmtvNWNxazYwNzZ1In0.XIuSvjAjqxkPVKQZy0R5rw', {
      maxZoom: 18,
    });

    // Add Dark OpenStreetMap tiles
    const darkLayer = L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png", {
      maxZoom: 18,
    });

    // Add layers control to switch between maps
    const baseMaps = {
      OpenStreetMap: openStreetMapLayer,
      Satellite: satelliteLayer,
      "Dark Map": darkLayer,
    };

    const layersControl = L.control.layers(baseMaps).addTo(newMap);

    // Customizing the layers control icon
    const layersControlContainer = layersControl.getContainer();
    L.DomUtil.addClass(layersControlContainer, 'custom-layers-control-icon');

    // Set the default layer
    openStreetMapLayer.addTo(newMap);

    // Initialize the sidebar
    const sidebar = L.control
      .sidebar({
        autopan: true,
        closeButton: true,
        container: "sidebar",
        position: "right",
      })
      .addTo(newMap);




    // Define a style function to customize the style of each feature
    const styleFeature = (feature) => {
      // Customize styles based on feature properties
      return {
        color: "blue", // Line color
        weight: 1, // Line width
        opacity: 0.5, // Line opacity
        fillColor: getFillColor(feature.properties.area_in_me), // Fill color
        fillOpacity: 0.5, // Fill opacity
      };
    };

    // Helper function to determine fill color based on a property
    const getFillColor = (area) => {
      // Example: Change color based on area size
      if (area < 100) {
        return "green";
      } else if (area < 250) {
        return "yellow";
      } else if (area < 500) {
        return "orange";
      } else {
        return "red";
      }
    };

    // Fetch and display GeoJSON data
    fetch("http://127.0.0.1:8000/map/api/shapefiles/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("GeoJSON data:", data); // Log the data

        // Add the GeoJSON layer with custom styles
        const newGeojsonLayer = L.geoJson(data, {
          style: styleFeature, // Apply custom styles
          onEachFeature: function (feature, layer) {
            layer.on("click", function () {
              const info = `
                                <p><strong>Latitude:</strong> ${feature.properties.latitude}</p>
                                <p><strong>Longitude:</strong> ${feature.properties.longitude}</p>
                                <p><strong>Area (m²):</strong> ${feature.properties.area_in_me}</p>
                                <p><strong>Height (m):</strong> ${feature.properties.builtheigh}</p>
              `;
              document.getElementById("feature-info").innerHTML = info;
              sidebar.open("info");
            });

            // Optionally add a tooltip
            layer.bindTooltip(
              `Area (m²): ${feature.properties.area_in_me}<br>Height (m): ${feature.properties.builtheigh}`,
              {
                permanent: false,
                direction: "top",
              }
            );
          },
        }).addTo(newMap);

        setGeojsonLayer(newGeojsonLayer);
        newMap.fitBounds(newGeojsonLayer.getBounds());
      })
      .catch((error) => {
        console.error("Error fetching GeoJSON data:", error);
      });

    // Cleanup on component unmount
    return () => {
      newMap.remove();
    };
  }, []);

  // Toggle the visibility of the GeoJSON layer
  const toggleLayerVisibility = () => {
    if (geojsonLayer && map) {
      if (isLayerVisible) {
        map.removeLayer(geojsonLayer); // Correct method to remove the layer from the map
      } else {
        map.addLayer(geojsonLayer); // Correct method to add the layer back to the map
      }
      setLayerVisible(!isLayerVisible); // Toggle visibility state
    }
  };


  return (
    <Flex direction="column" h="100vh">
      <style>
        {`
          .custom-layers-control-icon .leaflet-control-layers-toggle {
            background-image: url('https://i.postimg.cc/VkNBZwtC/4620771.png');
            background-color: #E4FFF1; /* Ensure the background is transparent */
            background-size: contain;
            width: 40px; /* Adjust as needed */
            height: 40px; /* Adjust as needed */
            border-: none; /* Remove any border */
            border-radius: 10px 10px 0px 0px; /* Make the border rounded */
          }
        `}
      </style>
      <Box id="map" w="100%" h="580px" style={{ position: 'relative', top: '70px' }} />
      <Button onClick={toggleLayerVisibility} m={4} 
        style={{ marginTop: '80px',
          width: '300px', // Set the desired width
          margin: '80px auto 0', // Center the button horizontally and set margin-top to 80px
          display: 'block' // Ensure the button is treated as a block element
        }}>
        {isLayerVisible ? "Hide Buildings" : "Show Buildings"}
      </Button>
      
      <Box id="sidebar" w="50%" h="250px" 

        className="leaflet-sidebar collapsed" 
        style={{
          backgroundColor: "transparent",
          color: "black",
          border: "none",
          boxShadow: "none",
          outline: "none",
          padding: "0",
          margin: "0",
          opacity: 1,  // Ensure opacity is set to 1
          visibility: "visible",  // Ensure visibility is not hidden
          zIndex: 1000,  // Keep the sidebar above other elements
      }}>
      <div className="leaflet-sidebar-tabs" style={{ backgroundColor: "transparent", border: "none" }}>
          <ul role="tablist">
              <li>
                  <a href="#info" role="tab" style={{ backgroundColor: "white" }}>
                      <i className="fa fa-info"></i>
                  </a>
              </li>
          </ul>
      </div>
        <div className="leaflet-sidebar-content">
          <div className="leaflet-sidebar-pane" id="info">
            <h2 className="leaflet-sidebar-header">Building informations</h2>
            <div id="feature-info"></div>
            <div id="legend" style={{ marginTop: "20px" }}>
              <h2>
                <strong>Legend</strong>
              </h2>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    backgroundColor: "green",
                    display: "inline-block",
                    width: "20px",
                    height: "20px",
                    marginRight: "5px",
                    marginTop:"3px",
                  }}
                ></span>
                <span style={{ marginTop: "0px" }}>0-100 meters²</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    backgroundColor: "yellow",
                    display: "inline-block",
                    width: "20px",
                    height: "20px",
                    marginRight: "5px",
                    marginTop:"3px",
                  }}
                ></span>
                <span style={{ marginTop: "0px" }}>101-250 meters²</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    backgroundColor: "orange",
                    display: "inline-block",
                    width: "20px",
                    height: "20px",
                    marginRight: "5px",
                    marginTop:"3px",
                  }}
                ></span>
                <span style={{ marginTop: "0px" }}>251-500 meters²</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    backgroundColor: "red",
                    display: "inline-block",
                    width: "20px",
                    height: "20px",
                    marginRight: "5px",
                    marginTop:"3px",
                  }}
                ></span>
                <span style={{ marginTop: "0px" }}>+500 meters²</span>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Flex>
  );
}

export default MapComponent;
