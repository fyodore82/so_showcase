import React, { FC } from 'react'
import './ItemBody.css'

import { InsertClassName } from './InsertClassNameToItemBody'

interface ItemBodyOwnProps {
  bodyText: string;
}

export const ItemBody: FC<ItemBodyOwnProps> = ({ bodyText }) => {
  return (
    
    <div dangerouslySetInnerHTML={{__html: InsertClassName(bodyText)}}/>
  )
}