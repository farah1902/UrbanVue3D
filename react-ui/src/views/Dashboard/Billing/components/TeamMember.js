// src/views/Dashboard/Billing/components/TeamMember.js
import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';

function TeamMember({ name, position, image }) {
  return (
    <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      <Flex align="center">
        <Image src={image} alt={name} borderRadius="full" boxSize="100px" />
        <Box ml={4}>
          <Text fontWeight="bold">{name}</Text>
          <Text color="gray.500">{position}</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default TeamMember;
