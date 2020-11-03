

import React from 'react'
import { makeStyles, /* createStyles, */ Theme } from '@material-ui/core/styles'
//import Button from '@material-ui/core/Button'
//import Box from "@material-ui/core/Box"
import Paper from '@material-ui/core/Paper'

const size = "50vmin"

const useStyles = makeStyles( ( theme:Theme ) => ( {

  paper: {
    height: size,
    width: size,
    padding: theme.spacing( 2 ),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },

} ) )

type Props = {
  content?: string
}

const MainInfo: React.FC<Props> = ( props: Props ) => {

  const { content } = props

  const classes = useStyles()
  //const [varName, setvarName] = useState( 'defVal' )

  //log.debug('Rendering MainInfo')

  return (
    <Paper className={classes.paper}   >
      { content || 'Image here'}
    </Paper>
  )

}

export default MainInfo