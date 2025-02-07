import { Box, Flex, Text, Image, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import React from "react";

const GreenEnergyParkInfo = () => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card my="2px" ms={{ lg: "20px" }}>
      <CardHeader mb="5px">
{/*         <Flex direction="column" w="100%" align="center" py="6">
          <Text
            color={textColor}
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            fontWeight="bold"
            textAlign="center"
          >
            Green Energy Park
          </Text>
        </Flex> */}
      </CardHeader>
      <CardBody>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          p={4}
        >
          {/* Text Section */}
          <Box flex="1" mr={{ md: 4 }} mb={{ base: 4, md: 0 }}>
            <Text color={textColor} fontSize="lg" mb={4} textAlign="justify">
              The Green Energy Park is a platform for experimentation, research,
              and training in renewable energies based in the green city of
              Benguerir, built in collaboration between the Research Institute
              for Solar Energy and New Energies (IRESEN) and the Mohammed VI
              Polytechnic University (UM6P).
            </Text>
            <Text color={textColor} fontSize="lg" textAlign="justify">
              This unique platform, the first of its kind in Africa, allows for
              the creation of synergies and coalitions among several Moroccan
              research institutions to achieve excellence and to acquire
              knowledge and expertise through partnerships with other
              universities and Moroccan industries.
            </Text>
          </Box>

          {/* Image Section */}
          <Box flex="1" display="flex" justifyContent="center">
            <Image
              src="https://www.greenenergypark.ma/images/IRESEN-UM6P.png" // Update this path with the actual path to your image
              alt="IRESEN and UM6P Logos"
              maxW="80%" // Adjust width as needed
              borderRadius="md"
              boxShadow="lg"
            />
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GreenEnergyParkInfo;
