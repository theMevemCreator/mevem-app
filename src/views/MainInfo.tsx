import React from 'react';

import { Flex } from "@chakra-ui/core";


function MainInfo() {

  const size = "60vmin"
  
  return (
    <Flex textAlign="center" alignItems="center" justifyContent= "center" size={size} border="1px solid gray">
      Main info
    </Flex>
  );
}

export default MainInfo;