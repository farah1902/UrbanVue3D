// Chakra imports
import {
  Box,
  Flex,
  Grid,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

// Assets
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
import React from "react";
import { FaPaypal, FaWallet } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "variables/general";
import BillingInformation from "./components/BillingInformation";
import CreditCard from "./components/CreditCard";
import Invoices from "./components/Invoices";
import PaymentMethod from "./components/PaymentMethod";
import PaymentStatistics from "./components/PaymentStatistics";
import Transactions from "./components/Transactions";
import CustomBox from "./components/CustomBox"; // Import the custom component
import GreenEnergyParkInfo from "./components/GreenEnergyParkInfo"; // Import your new component




function Billing() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      
      <Box
        bgGradient="linear(to-r, teal.500, green.500)"
        py="8"
        borderRadius="md"
        mb="8"
      >
        <Text
          color="white"
          fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
          fontWeight="extrabold"
          textAlign="center"
          lineHeight="1.2"
        >
          A State-of-the-Art Infrastructure for Solar Energy Research and Innovation
        </Text>
      </Box>

      <Box>
        <br />
        <Text
          color="gray.400"
          fontSize={{ sm: "sm", md: "md" }}
          fontWeight="semibold"
          my="12px"
        >
          3D View of the Platform
        </Text>
        <Image
          src="https://www.greenenergypark.ma/images/map.png" // Update with your image URL
          alt="map_gep"
          borderRadius="md"
          cursor="pointer" // Change cursor to indicate clickability
          onClick={onOpen} // Open modal on click
          style={{
            borderRadius: "8px",
            maxWidth: "100%",
            marginBottom: "1rem",
          }}
        />
      </Box>

      {/* Modal for the enlarged image */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enlarged Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            <Image
              src="https://www.greenenergypark.ma/images/map.png" // Same image source
              alt="map_gep"
              borderRadius="md"
              style={{
                maxWidth: "90vw", // Use 90% of the viewport width
                height: "auto",
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

        {/* Insert the Green Energy Park Information Component */}
      <GreenEnergyParkInfo />

      <Grid templateColumns={{ sm: "1fr", lg: "2fr 1.2fr" }} templateRows='1fr'>
        


      </Grid>
      <Box my="8">
        <Text fontSize="lg" fontWeight="bold" mb="4">
          Watch Our Video
        </Text>
        <Flex my="8" justifyContent="center" alignItems="center">
        <Box as="iframe"
          width="80%"
          height="500"
          src="https://www.youtube.com/embed/tI3XeBK0-FU" // Update with your YouTube video URL
          title="Green Energy Park Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          borderRadius="md"
        />
      </Flex>
      </Box>
      
      <Grid templateColumns={{ sm: "1fr", lg: "13fr 0.5fr" }}>
        
        
        <Transactions
        />
        
      </Grid>

      {/* <Box my="4">
        <Text
          color="gray.600"
          fontSize={{ sm: "sm", md: "lg" }}
          fontWeight="bold"
          mb="4"
        >
          As part of the ecosystem of Mohammed VI Polytechnic University and
          open to all Moroccan universities, the Green Energy Park has
          established several strategic partnerships with major international
          research centers and companies and industries in the sector to ensure
          technology transfer while developing bidirectional scientific
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
      </Box> */}
      <br/>   <br/> 
    </Flex>
  );
}

export default Billing;
