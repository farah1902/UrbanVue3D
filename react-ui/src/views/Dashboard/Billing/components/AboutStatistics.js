// src/views/Dashboard/Billing/components/AboutStatistics.js
import React from 'react';
import { Box, Icon, Text } from '@chakra-ui/react';

function AboutStatistics({ icon, title, description }) {
  return (
    <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" textAlign="center">
      <Icon as={icon} w={12} h={12} color="blue.500" />
      <Text fontSize="lg" fontWeight="bold" mt={2}>{title}</Text>
      <Text mt={2}>{description}</Text>
    </Box>
  );
}

export default AboutStatistics;
