/* // Chakra imports

import Authors from "./components/Authors";
import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FaCube, FaPenFancy } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import Conversations from "./components/Conversations";
import PlatformSettings from "./components/PlatformSettings";
import ProfileInformation from "./components/ProfileInformation";
import Projects from "./components/Projects";
//import Projects from "./components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";

function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>

<Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap='22px'>
        <PlatformSettings
          title={"GIS Data Converter"}

        />
        <ProfileInformation
          title={"ESA LandCover"}
          
        />
        <Conversations title={"Global 3D"} />
      </Grid>

      

    </Flex>
  );
}

export default Tables;


 */

/* import { Flex, Grid, Link } from "@chakra-ui/react";
import React from "react";
import PlatformSettings from "./components/PlatformSettings";
import PlatformSettings1 from "./components/PlatformSettings1";
import ProfileInformation from "./components/ProfileInformation";
import Conversations from "./components/Conversations";

function Tables() {
  const bgImage1 = "url('https://i.postimg.cc/LsqcmdzV/data-conversion-process.jpg')";
  const bgImage2 = "url('https://i.postimg.cc/qvqYGfZd/card-2.jpg')";
  const bgImage3 = "url('https://i.postimg.cc/RV9XgrhD/360-F-572942754-Uk3k-Gmq4-ERl-A7hb-Q9-N0fww-D8-PA7k2-ZMS.jpg')";
  const bgImage4 = "url('')";

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap='22px'>
        <Link href="/gis-data-converter" _hover={{ textDecoration: 'none' }}>
          <PlatformSettings
            title={"GIS Data Converter"}
            backgroundImage={bgImage1}
          />  
        </Link>
        <Link href="/esa-landcover" _hover={{ textDecoration: 'none' }}>
          <ProfileInformation
            title={"ESA LandCover"}
            backgroundImage={bgImage2}
          />
        </Link>
        
        <Link href="/global-3d" _hover={{ textDecoration: 'none' }}>
          <PlatformSettings1
            title={"Global 3D"}
            backgroundImage={bgImage3}
          />
        </Link>

        <Link href="/global-3d" _hover={{ textDecoration: 'none' }}>
          <Conversations
            title={"Global 3D"}
            backgroundImage={bgImage4}
          />
        </Link>

      </Grid>
      
    </Flex>
  );
}

export default Tables; */

import { Flex, Grid, Link } from "@chakra-ui/react";
import React from "react";
import PlatformSettings from "./components/PlatformSettings";
import PlatformSettings1 from "./components/PlatformSettings1";
import ProfileInformation from "./components/ProfileInformation";
import Conversations from "./components/Conversations";

import HoverEffectBox from "./components/HoverEffectBox";

function Tables() {
  const bgImage1 = "https://i.postimg.cc/LsqcmdzV/data-conversion-process.jpg";
  const bgImage2 = "https://i.postimg.cc/qvqYGfZd/card-2.jpg";
  const bgImage3 = "https://i.postimg.cc/RV9XgrhD/360-F-572942754-Uk3k-Gmq4-ERl-A7hb-Q9-N0fww-D8-PA7k2-ZMS.jpg";
  const bgImage4 = "https://example.com/your-image4.jpg"; // Update with your image URL

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap='22px'>
        
        <HoverEffectBox
          title="GIS Data Converter"
          backgroundImage={bgImage1}
          href="https://farah1902.github.io/GIS_Data_Conv/"
          target="_blank" //
        />
        <HoverEffectBox
          title="ESA LandCover"
          backgroundImage={bgImage2}
          href="https://saadfrh-esa-landcover.streamlit.app/"
          target="_blank"
        />
        <HoverEffectBox
          title="3D Global DEM Map"
          backgroundImage={bgImage3}
          href="https://farah1902.github.io/3D_Global_DEM_Map/"
        />
{/*         <HoverEffectBox
          title="Global 3D"
          backgroundImage={bgImage4}
          href="/global-3d"
        /> */}
      </Grid>
    </Flex>
  );
}

export default Tables;

