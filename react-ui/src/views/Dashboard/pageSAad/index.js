/*  // Chakra imports
import { Flex,Text  } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import Projects from "./components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";
import Map from "./../../Dashboard/pageOmar/index"
function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>


    </Flex>
  );
}

export default Tables;
 */

 


import React from 'react';
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBuilding } from "react-icons/fa";
import { CartIcon, DocumentIcon, GlobeIcon, WalletIcon } from "components/Icons/Icons.js";

import MapboxMap from './MapComponent';

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>

      <Flex flexDirection='column' pt={{ base: "120px", md: "2px" }} mb={{ base: "2px", md: "2px" }}>
        <MapboxMap />

 {/*      <iframe width='100%' height='570px' src="https://api.mapbox.com/styles/v1/saadfrh/clxszs0bc00rj01qr7142emqi.html?title=false&access_token=pk.eyJ1Ijoic2FhZGZyaCIsImEiOiJjbHZkdnlrajkwMjl6MmtvNWNxazYwNzZ1In0.XIuSvjAjqxkPVKQZy0R5rw&zoomwheel=false#6.27/31.447/-7.447/0/8" 
       title="ben_guerir_3d" style={{ border: 'none' }}></iframe> */}
     </Flex>
     <div id="legend" style={{ position: 'absolute', bottom: '50px', left: '40px', background: 'white', padding: '10px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#333' }}>
        <h4>Building Heights</h4>
        <div><span style={{ backgroundColor: 'rgb(52, 254, 227)', display: 'inline-block', width: '20px', height: '20px', marginRight: '5px' }}></span>0 - 3.44 meters</div>
        <div><span style={{ backgroundColor: 'rgb(52, 254, 126)', display: 'inline-block', width: '20px', height: '20px', marginRight: '5px' }}></span>3.5 - 6.88 meters</div>
        <div><span style={{ backgroundColor: 'rgb(170, 254, 52)', display: 'inline-block', width: '20px', height: '20px', marginRight: '5px' }}></span>7 - 10.32 meters</div>
        <div><span style={{ backgroundColor: 'rgb(254, 220, 52)', display: 'inline-block', width: '20px', height: '20px', marginRight: '5px' }}></span>10.5 - 13.76 meters</div>
        <div><span style={{ backgroundColor: 'rgb(254, 143, 52)', display: 'inline-block', width: '20px', height: '20px', marginRight: '5px' }}></span>13.8+ meters</div>
      </div>
    </Flex>
  );
}


