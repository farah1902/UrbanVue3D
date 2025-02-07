import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function CustomBox({ title, content }) {
  return (
    <Box
      p={4}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
      bg="white"
      maxW="400px"
    >
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Text>{content}</Text>
    </Box>
  );
}

export default CustomBox;
