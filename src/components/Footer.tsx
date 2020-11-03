
import React from 'react'
//import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import amber from '@material-ui/core/colors/amber'
//import Button from '@material-ui/core/Button'
//import Paper from '@material-ui/core/Paper'

/* const useStyles = makeStyles( ( theme: Theme ) => ( {
  root: {
    style: 'value'
  }
} ) ) */

type Props = {
  propName?: string
}

const Footer: React.FC<Props> = ( props: Props ) => {

  //const {propName} = props

  //const [varName, setvarName] = useState( 'defVal' )

  //const classes = useStyles()

  const color = amber[50]
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
      bgcolor={color}>
      <Box p={1}>Footer1</Box>
      <Box p={1}>Footer1</Box>
    </Box>
  )

}

export default Footer