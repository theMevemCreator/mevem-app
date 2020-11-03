import React from 'react'

import Header from './components/AppBarSimple'
import Core from "./views/Core"
import Footer from './components/Footer'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( ( theme: Theme ) => createStyles( {
  root: {
    minHeight: '100vh'
  }
} ) )

const App: React.FC = () => {

  const classes = useStyles()

  return (

    <Grid container  className={classes.root} direction="column" justify="space-between">

      <Header />

      <Container>

        <Core />

      </Container>

      <Footer />

    </Grid>

  )
}


export default App
