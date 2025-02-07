import { Flex, Switch, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";

const PlatformSettings = ({ title, subtitle1, subtitle2, backgroundImage }) => {
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
      <Flex direction='column'>
          <Text fontSize='sm' color='gray.500' fontWeight='600' mb='20px'>
            {subtitle1}
          </Text>
          <Flex align='center' mb='20px'>
            <Switch colorScheme='teal' me='10px' />
            <Text noOfLines={1} fontSize='md' color='gray.500' fontWeight='400'>
              Email me when someone follows me
            </Text>
          </Flex>
          <Flex align='center' mb='20px'>
            <Switch colorScheme='teal' me='10px' />
            <Text noOfLines={1} fontSize='md' color='gray.500' fontWeight='400'>
              Email me when someone answers on my post
            </Text>
          </Flex>
          <Flex align='center' mb='20px'>
            <Switch colorScheme='teal' me='10px' />
            <Text noOfLines={1} fontSize='md' color='gray.500' fontWeight='400'>
              Email me when someone mentions me
            </Text>
          </Flex>
          <Text
            fontSize='sm'
            color='gray.500'
            fontWeight='600'
            m='6px 0px 20px 0px'>
            {subtitle2}
          </Text>

        </Flex>
      </CardBody>
    </Card>
  );
};

export default PlatformSettings;
