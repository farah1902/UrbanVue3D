// src/views/Dashboard/Billing/components/CompanyHistory.js
import React from 'react';
import { Box, Text, List, ListItem } from '@chakra-ui/react';

function CompanyHistory({ title, history }) {
  return (
    <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      <Text fontSize="lg" fontWeight="bold">{title}</Text>
      <List mt={4}>
        {history.map((item, index) => (
          <ListItem key={index} mb={2}>
            <Text fontWeight="bold">{item.year}:</Text> {item.event}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default CompanyHistory;
