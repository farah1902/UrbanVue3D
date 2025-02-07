/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Footer(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");=
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy;
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://www.greenenergypark.ma/"
          target="_blank"
        >
          {document.documentElement.dir === "rtl"
            ? " توقيت الإبداعية"
            : "Green Energy Park "}
        </Link>
        

      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.400" href="https://saadfrh.github.io/" target="_blank">
            {document.documentElement.dir === "rtl"
              ? ""
              : "Saad Farah"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
{/*           <Link color="gray.400" href="https://www.simmmple.com">
            {document.documentElement.dir === "rtl" ? "سيممبل" : "Simmmple"}
          </Link> */}
        </ListItem>

      </List>
    </Flex>
  );
}
