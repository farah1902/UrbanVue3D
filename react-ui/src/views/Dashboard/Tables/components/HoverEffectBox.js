// src/components/HoverEffectBox.js
import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

function HoverEffectBox({ title, backgroundImage, href }) {
  return (
    <Box 
    as="a" href={href}
    target="_blank" 
    position="relative" 
    width="100%" 
    height="100%" 
    overflow="hidden"  //borderRadius="md"
    borderTopLeftRadius="20px" // Customize the angle for the top-left corner
      borderTopRightRadius="20px" // Customize the angle for the top-right corner
      borderBottomLeftRadius="20px" // Customize the angle for the bottom-left corner
      borderBottomRightRadius="20px" // Customize the angle for the bottom-right corner
    _hover={{
      '> img': {
        filter: 'brightness(0.5)',
      },
      '> div': {
        opacity: 1,
      },
    }}>

      <Image
        src={backgroundImage}
        alt={title}
        width="100%"
        height="100%"
        objectFit="cover"
        transition="0.3s ease"
        borderRadius="inherit" // Inherit border radius from the parent Box
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="rgba(0, 0, 0, 0.5)"
        opacity="0"
        transition="0.3s ease"
      >
        <Text fontSize="lg" color="white" fontWeight="bold">
          {title}
        </Text>
      </Box>
    </Box>
  );
}

export default HoverEffectBox;
