import React from 'react'

import { makeStyles, Theme } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import BottomInfo from '../components/BottomInfo'
import WingInfo from '../components/WingInfo'
import NavBar from '../components/NavBar'
import MainInfo from '../components/MainInfo'
import Controllers from '../components/Controllers'


const useStyles = makeStyles( ( theme: Theme ) =>( {
    root: {
      flexGrow: 1,
    },
  } ),
)

export default function Core() {
  const classes = useStyles()

  const controllerHandlers = {
    onLeft: () => {
      alert( 'onLEft' )
    },
    onRight: () => {
      alert( 'onRight' )
    },
    onInfo: () => {
      alert( 'onInfo' )
    }

  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <NavBar />
        </Grid>
        <Grid item xs>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <MainInfo/>
            </Grid>
            <Grid item>
              <Controllers {...controllerHandlers}/>
            </Grid>
            <Grid item>
              <BottomInfo/>
            </Grid>

          </Grid>

        </Grid>
        <Grid item xs>
          <WingInfo/>
        </Grid>
      </Grid>
    </div>
  )
}