import { theme } from "@chakra-ui/core";
import React from 'react'



const customIcons = {

  menu: {
    viewBox: "0 0 150 150",
    path: <path fill="currentColor" d="M15 30h120c8.284 0 15-6.716 15-15s-6.716-15-15-15H15C6.716 0 0 6.716 0 15s6.716 15 15 15zM135 60H15C6.716 60 0 66.716 0 75s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15zM135 120H15c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
  }
/*   icon1: {
    path: <path fill="currentColor" d="..." />,
    // If the icon's viewBox is `0 0 24 24`, you can ignore `viewBox`
    viewBox: "0 0 40 40",
  },
  icon2: {
    path: (
      <g fill="currentColor">
        <path d="..."/>
      </g>
    )
  } */
};

const customColors = {}

// Step 2: Add the custom icon to the theme
const customTheme = {
  ...theme,
  icons: {
    ...theme.icons,
    ...customIcons,
  },
  colors: {
    ...theme.colors,
    ...customColors
  }
}

export default customTheme