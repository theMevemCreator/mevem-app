import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
//import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles( ( theme: Theme ) => ( {
  root: {
    style: 'value'
  }
} ) )

type Props = {
  content?: string
}

const WingInfo: React.FC<Props> = ( props: Props ) => {

  const { content } = props

  //const [selected, setselected] = useState( false )

  const classes = useStyles()
  //log.debug('Rendering WingInfo')

  return (
    <Box className={classes.root}>
      <Paper>{content || "Wing info"}</Paper>
    </Box>
  )

}

export default WingInfo
