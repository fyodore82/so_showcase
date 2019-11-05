import React, { FC } from 'react'
import './ItemBody.css'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import { InsertClassName } from './InsertClassNameToItemBody'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflowWrap: 'break-word',
    },
  }),
);


interface ItemBodyOwnProps {
  bodyText: string;
}

export const ItemBody: FC<ItemBodyOwnProps> = ({ bodyText }) => {
  const classes = useStyles();
  return (
    
    <div
    className={classes.root} 
    dangerouslySetInnerHTML={{__html: InsertClassName(bodyText)}}/>
  )
}