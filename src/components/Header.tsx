import React from "react";
import { Box, Heading, Flex, Text, IconButton } from "@chakra-ui/core";

const MenuItems: React.FC = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header: React.FC = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="3"
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" >
          MeVeM
        </Heading>
      </Flex>

      <Box display="block" onClick={handleToggle}>

       
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>Docs</MenuItems>
        <MenuItems>Examples</MenuItems>
        <MenuItems>Blog</MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <IconButton bg="transparent" aria-label="My IOs" icon="search" />
        <IconButton bg="transparent" aria-label="My IOs" icon="phone" />
        <IconButton bg="transparent" aria-label="My IOs" icon="time" />
        <IconButton bg="transparent" aria-label="My IOs" icon="menu" />
        
     
      </Box>
    </Flex>
  );
};

export default Header;