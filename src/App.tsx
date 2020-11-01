import React from 'react';

import customTheme from './theme/customTheme'

import Header from './components/Header'
import './App.css';

import BottomInfo from './views/BottomInfo'
import WingInfo from './views/WingInfo'
import NavBar from './views/NavBar'
import MainInfo from './views/MainInfo'
import Footer from './views/Footer'

import { ThemeProvider, CSSReset, Flex } from "@chakra-ui/core";

// Use at the root of your app


const App: React.FC = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />

    <Flex flexDirection="column" justifyContent="space-between"  minHeight="100vh">

      <Header />
      
      <Flex id="core" flexDirection="row" border="1px solid gray" flexGrow={1} width="100vw" justifyContent="center"> 
        <NavBar />
        <Flex flexDirection="column">
          <MainInfo />
          <BottomInfo />
        </Flex>
        <WingInfo />
      </Flex>

      <Footer />
      
    </Flex>

  </ThemeProvider>
);


export default App;
