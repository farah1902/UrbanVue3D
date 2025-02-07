/* // Chakra imports
import { Flex, Icon, Link, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ProfileInformation = ({
  title,
  description,
  name,
  mobile,
  email,
  location,
}) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p='16px' my={{ sm: "24px", xl: "0px" }}>
      <CardHeader p='12px 5px' mb='12px'>
        <Text fontSize='lg' color={textColor} fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody px='5px'>
        
      </CardBody>
    </Card>
  );
};

export default ProfileInformation;
 */

import { Text } from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";

const ProfileInformation = ({ title, backgroundImage }) => {
  return (
    <Card
      p='16px'
      bgImage={backgroundImage}
      bgSize="cover"
      bgPosition="center"
      color="white" // Adjust text color for contrast
      height="100%" // Ensure the card takes up full height
    >
      <CardHeader p='12px 5px' mb='12px'>
        <Text fontSize='lg' fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody px='5px'>
        {/* Content goes here */}
      </CardBody>
    </Card>
  );
};

export default ProfileInformation;
