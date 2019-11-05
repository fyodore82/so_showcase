import React, {FC, ComponentType} from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

interface MenuItemOwnProps {
    to: string;
    name: string;
    Icon: ComponentType;
}

export const MenuItem: FC<MenuItemOwnProps> = ({to, name, Icon}) => (
  <ListItem to={to} component={Link}>
    <ListItemIcon><Icon /></ListItemIcon>
    <ListItemText primary={name} />
  </ListItem>
)