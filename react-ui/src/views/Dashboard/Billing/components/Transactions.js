// Chakra imports
import { Box, Flex, Text, Image, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import React from "react";

const Transactions = () => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card my="24px" ms={{ lg: "24px" }}>
      <CardHeader mb="12px">
        <Flex direction="column" w="100%">
          <Text
            color={textColor}
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight="bold"
            textAlign="center"
          >
            Partnership & Innovation
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Box my="4">
          <Text
            color="gray.600"
            fontSize={{ sm: "sm", md: "lg" }}
            fontWeight="bold"
            mb="4"
          >
            As part of the ecosystem of Mohammed VI Polytechnic University and
            open to all Moroccan universities, the Green Energy Park has
            established several strategic partnerships with major international
            research centers and companies and industries in the sector to
            ensure technology transfer while developing bidirectional scientific
            cooperation.
          </Text>
          <Image
            src="https://www.greenenergypark.ma/images/partenaires.png" // Update this path with the actual path to your image
            alt="Partner Logos"
            borderRadius="md"
            style={{
              maxWidth: "100%", // Make the image responsive
              height: "auto", // Maintain aspect ratio
            }}
          />
        </Box>
      </CardBody>
    </Card>
  );
};

export default Transactions;
