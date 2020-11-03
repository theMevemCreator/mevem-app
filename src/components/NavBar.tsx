import React, { /* useRef, useEffect, useState */ } from 'react'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
//import Box from '@material-ui/core/Box'

import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'

interface RenderTree {
  id: string;
  name: string;
  children?: RenderTree[];
}

const useStyles = makeStyles( ( theme: Theme ) =>
  createStyles( {

    paper: {
     // minHeight: '80vh',
      padding: theme.spacing( 2 ),

      color: theme.palette.text.secondary,
    },

    tree: {

    },
    treeBox: {
      height: '80vh',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  } ),
)

const demoData: RenderTree[] = [{
  id: 'root1',
  name: 'Parent1',
  children: [
    {
      id: '1.1',
      name: 'Child - 1',
    },
    {
      id: '1.2',
      name: 'Child - 3',
      children: [
        {
          id: '1.4',
          name: 'Child - 4',
        },
      ],
    },
  ],
}, {
  id: 'root2',
  name: 'Parent2',
  children: [
    {
      id: '2.1',
      name: 'Child - 1',
    },
    {
      id: '2.3',
      name: 'Child - 3',
      children: [
        {
          id: '2.4',
          name: 'Child - 4',
        },
      ],
    },
  ],
}]


function NavBar() {

  const classes = useStyles()


/*   useEffect(() => {
    const jsTree = new JsTree(demoData, nodeRef.current).openAll()
    //jsTree.create(nodeRef)

  }) */

  const renderTree = ( data: RenderTree[] ) => data.map( node => (
    <TreeItem key={node.id} nodeId={node.id} label={node.name}>
      {Array.isArray( node.children ) ? renderTree( node.children ) : null}
    </TreeItem>
  ) )


  return (

    <Paper className={classes.paper}>
      {/* <Box className={classes.treeBox} > */}
        <TreeView
          className={classes.tree}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          defaultExpanded={['root']}
        >
          {renderTree( demoData )}
        </TreeView>

    {/*   </Box> */}
    </Paper>

  )
}

export default NavBar