import React, { FC } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import { AnswerTags, drawerWidth } from '../Constants'
import { ApplicationBar } from './ApplicationBar'
import { SideMenu } from './SideMenu'
import { Home } from './Home'
import { MenuItem } from './MenuItem'
import { AnswerList } from '../Answer/AnswersList/AnswersList'
import * as Answers from '../store/Answers';
import { ApplicationState } from '../store'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),

      height: '100%',
      width: `calc(100% - ${drawerWidth}px)`,
      left: drawerWidth,
      top: 0,
      position: "absolute",
      display: 'flex',
      flexDirection: 'column',
    },
  }),
);

const MunuAndRoutes: {
  [keys in AnswerTags]: {
    menuName: JSX.Element;
    route: (answers?: Answers.Answers) => JSX.Element;
  }
} = {
  typescript: {
    menuName: <MenuItem to='/typescript' name='TypeScript' Icon={InboxIcon} />,
    route: answers => <Route exact path='/typescript' render={() => <AnswerList answers={answers} />} />,
  },
  react: {
    menuName: <MenuItem to='/react' name='React' Icon={InboxIcon} />,
    route: answers => <Route exact path='/react' render={() => <AnswerList answers={answers} />} />,
  },
  redux: {
    menuName: <MenuItem to='/redux' name='Redux' Icon={InboxIcon} />,
    route: answers => <Route exact path='/redux' render={() => <AnswerList answers={answers} />} />,
  },
}

type MainScreenStateProps = Answers.AnswersState;

type MainScreenProps = MainScreenStateProps;

export const MainScreen: FC<MainScreenProps> = ({ isLoading, answers }) => {
  const classes = useStyles();

  return (
    isLoading ? <div>Loading...</div>
      :
      <div className={classes.root}>
        <CssBaseline />
        <ApplicationBar />
        <SideMenu>
          <List>
            <MenuItem to='/' name='Home' Icon={InboxIcon} />
            {Object.values(MunuAndRoutes).map(m => m.menuName)}
          </List>
        </SideMenu>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            {Object.entries(MunuAndRoutes).map(([k, v]) => v.route(answers[k as AnswerTags]))}
            <Route exact path='/' component={Home} />
          </Switch>
        </main>
      </div>
  );
}

export default connect<MainScreenStateProps, {}, {}, ApplicationState>
  (state => state.answers)(MainScreen)