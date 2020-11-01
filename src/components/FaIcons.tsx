import React from 'react'

import {Box} from "@chakra-ui/core";


export const FaIcon = ({ name }: { name: string }) => (
  <Box
    as="em"
    className={`fas fa-${name}`}
    lineHeight="1.2rem"
    marginLeft="-.25rem"
    marginRight="0.5rem"
    verticalAlign="middle"
    display="block"
  />
);

const FaBook = () => <FaIcon name="book" />;
const FaBookmark = () => <FaIcon name="bookmark" />;
const FaDownload = () => <FaIcon name="download" />;
const FaHome = () => <FaIcon name="home" />;
const FaInfo = () => <FaIcon name="info" />;
const FaNewspaper = () => <FaIcon name="newspaper" />;