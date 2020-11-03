import React from 'react'


import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
//import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
//import SkipNextIcon from '@material-ui/icons/SkipNext'
//import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
//import PauseIcon from '@material-ui/icons/Pause'


/* const MyIcon: React.FC<{ name: string, onClick: ()=>void }> = ( { name, onClick } ) => (
  <Box  border="1px solid gray" >
    <Icon
      p={1}
      size="28px"
      borderLeft="5px solid transparent"
      borderRight="5px solid transparent"
      name={name}
      onClick={onClick}
    />
  </Box>
) */

const useStyles = makeStyles( ( theme: Theme ) =>
  createStyles( {

    root: {
      height: '8vh',
      minHeight: theme.spacing( 3 ),
      //padding: theme.spacing( 2 ),

      color: theme.palette.text.secondary,
    },

    tree: {

    }
  } ),
)

type ControllersProps = {
  onLeft: () => void,
  onRight: () => void,
  onInfo: ()=> void
}
const Controllers: React.FC<ControllersProps> = ( { onInfo, onLeft, onRight } ) => {

  const classes = useStyles()

  return (

    <Box className={classes.root} display='flex' justifyContent="center"  >
      <Box display= 'flex' width="30%" flexDirection="row" justifyContent="space-between" alignItems="center" py={0}>
        <KeyboardArrowLeftIcon name="arrow-left" onClick={onLeft}/>
        <PlayArrowIcon name="info-outline" onClick={onInfo} />
        <KeyboardArrowRightIcon name="arrow-right" onClick={onRight} />
      </Box>
    </Box>
  )
}

export default Controllers