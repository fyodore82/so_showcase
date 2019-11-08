import React, { FC } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import HomeIcon from '@material-ui/icons/Home';
import ReduxLogo from './Redux.svg';
import ReactLogo from './React.svg';
import TSLogo from './TS.svg';
import { Route, Switch } from 'react-router-dom';
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

const ReactIcon: FC = () => (
  <img src={ReactLogo} alt='' style={{width: '24px'}}/>
)

const TSIcon: FC = () => (
  <img src={TSLogo} alt='' style={{width: '24px'}}/>
)

const ReduxIcon: FC = () => (
  <img src={ReduxLogo} alt='' style={{width: '24px'}}/>
)

const MunuAndRoutes: {
  [keys in AnswerTags]: {
    menuName: JSX.Element;
    route: (isLoading: boolean, answers?: Answers.Answers) => JSX.Element;
  }
} = {
  typescript: {
    menuName: <MenuItem key='typescript' to='/typescript' name='TypeScript' Icon={TSIcon} />,
    route: (isLoading, answers) => <Route key='typescript' exact path='/typescript' render={() => <AnswerList answers={answers} isLoading={isLoading} />} />,
  },
  react: {
    menuName: <MenuItem key='react' to='/react' name='React' Icon={ReactIcon} />,
    route: (isLoading, answers) => <Route key='react' exact path='/react' render={() => <AnswerList answers={answers} isLoading={isLoading} />} />,
  },
  redux: {
    menuName: <MenuItem key='redux' to='/redux' name='Redux' Icon={ReduxIcon} />,
    route: (isLoading, answers) => <Route key='redux' exact path='/redux' render={() => <AnswerList answers={answers} isLoading={isLoading} />} />,
  },
}

type MainScreenStateProps = Answers.AnswersState;

type MainScreenProps = MainScreenStateProps;

export const MainScreen: FC<MainScreenProps> = ({ isLoading, answers }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ApplicationBar />
      <SideMenu>
        <List>
          <MenuItem key='home' to='/' name='Home' Icon={HomeIcon} />
          {Object.values(MunuAndRoutes).map(m => m.menuName)}
        </List>
      </SideMenu>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          {Object.entries(MunuAndRoutes).map(([k, v]) => v.route(isLoading, answers[k as AnswerTags]))}
          <Route key='home' exact path='/' component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default connect<MainScreenStateProps, {}, {}, ApplicationState>
  (state => state.answers)(MainScreen)