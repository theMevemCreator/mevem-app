
import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
//import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles( ( theme: Theme ) => ( {
  paper: {
    height: '20vh',

  }
} ) )

type Props = {
  text?: string
}

const BottomInfo: React.FC<Props> = ( props: Props ) => {

  const { text } = props

  //const [varName, setvarName] = useState( 'defVal' )

  const classes = useStyles()
  //log.debug('Rendering BottomInfo')

  return (
    <Paper className={classes.paper} >
      {text || 'Text explaining the main content'}
    </Paper>
  )

}

export default BottomInfo