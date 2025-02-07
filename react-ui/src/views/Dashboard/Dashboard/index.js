// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";

import { FaBuilding } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { TfiMapAlt } from "react-icons/tfi";
import { MdOutlineRoofing } from "react-icons/md";
import { TbSquareHalf } from "react-icons/tb";

// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import { dashboardTableData, timelineData } from "variables/general";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";


export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "65px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"Buildings"}
          amount={"29,225"}
          percentage={15}
          icon={<FaBuilding h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total area of roofs"}
          amount={"2.674 km²"}
          percentage={15}
          icon={<MdOutlineRoofing h={"34px"} w={"34px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Population"}
          amount={"+117,378"}
          percentage={+3}
          icon={<MdPeopleAlt h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total city area"}
          amount={"45.1 km²"}
          percentage={null}
          icon={<TbSquareHalf h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Flex flexDirection='column' pt={{ base: "120px", md: "10px" }}>
{/*       <iframe 
        width='100%' 
        height='490px'  // Increased height
        src="https://api.mapbox.com/styles/v1/saadfrh/clxszs0bc00rj01qr7142emqi.html?title=false&access_token=pk.eyJ1Ijoic2FhZGZyaCIsImEiOiJjbHZkdnlrajkwMjl6MmtvNWNxazYwNzZ1In0.XIuSvjAjqxkPVKQZy0R5rw&zoomwheel=false#12/32.23409/-7.94318/348" 
        title="ben_guerir_3d" 
        style={{ border: 'none' }}
      /> */}
{/*       <iframe width='100%' height='480px' src="https://api.mapbox.com/styles/v1/saadfrh/clzootmz5008h01qt9n8n1qrh.html?title=false&access_token=pk.eyJ1Ijoic2FhZGZyaCIsImEiOiJjbHZkdnlrajkwMjl6MmtvNWNxazYwNzZ1In0.XIuSvjAjqxkPVKQZy0R5rw&zoomwheel=false#12/32.22927/-7.93464/0/8" 
      title="ben_guerir_3d-prev" 
      style={{ border: 'none' }}></iframe> */}

{/*       <iframe width='100%' height='480px' src="https://api.mapbox.com/styles/v1/saadfrh/clzootmz5008h01qt9n8n1qrh.html?title=false&access_token=pk.eyJ1Ijoic2FhZGZyaCIsImEiOiJjbHZkdnlrajkwMjl6MmtvNWNxazYwNzZ1In0.XIuSvjAjqxkPVKQZy0R5rw&zoomwheel=false#6.75/31.581/-7.723/0/8" 
      title="ben_guerir_3d-prev" style={{ border: 'none' }}></iframe> */}


      <iframe width='100%' height='480px' src="https://api.mapbox.com/styles/v1/saadfrh/clzq3o2mp009q01pi6qie4trr.html?title=false&access_token=pk.eyJ1Ijoic2FhZGZyaCIsImEiOiJjbHZkdnlrajkwMjl6MmtvNWNxazYwNzZ1In0.XIuSvjAjqxkPVKQZy0R5rw&zoomwheel=false#6.78/31.656/-8.086" 
      title="bngrir_sat" style={{ border: 'none' }}></iframe>

    </Flex>
    <div id="legend" style={{ position: 'absolute', bottom: '120px', left: '40px', background: 'white', padding: '10px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#333' }}>
        <h4><b>Map Legend</b></h4>
        <div ><span style={{ backgroundColor: 'rgb(249, 6, 6)', display: 'inline-block', width: '20px', height: '20px', marginRight: '5px', marginTop:"13px" }}></span>Ben Guerir City</div>
        <div><span style={{ backgroundColor: 'rgb(238, 255, 46)', display: 'inline-block', width: '20px', height: '20px', marginRight: '5px' }}></span>Rhamna Province</div>
        <div><span style={{ backgroundColor: 'rgb(20, 250, 20)', display: 'inline-block', width: '20px', height: '20px', marginRight: '5px' }}></span>Marrakesh-Safi Region</div>
      </div>
    </Flex>
    
  );
}



// Dashboard.js



/* 

import React from "react";
import {
  Flex,
  Grid,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import MiniStatistics from "./components/MiniStatistics";
import MapComponent from "./components/MapComponent";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
        <MiniStatistics
          title={"Today's Moneys"}
          amount={"$53,000"}
          percentage={55}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Today's Users"}
          amount={"2,300"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"New Clients"}
          amount={"+3,020"}
          percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total Sales"}
          amount={"$173,000"}
          percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Flex flexDirection="column" pt={{ base: "120px", md: "10px" }}>
        <MapComponent />
      </Flex>
    </Flex>
  );
}
 */