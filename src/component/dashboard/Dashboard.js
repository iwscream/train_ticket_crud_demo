import * as React from 'react';
import {ReactDOM} from 'react-dom'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import SignIn from "../../pages/SignIn";
import {useState} from "react";
import {render} from "@testing-library/react";
import routes from "../../router/routes";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListItemText from "@material-ui/core/ListItemText";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import ListSubheader from "@material-ui/core/ListSubheader";
import AssignmentIcon from "@material-ui/icons/Assignment";
import {ListItem} from "@material-ui/core";
import axios from "axios";
import cookie from "react-cookies";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Login() {
  window.location.href="/login"
}

function Register() {
  axios.post("http://localhost:8080")
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  window.location.href="/register"
}

function Agreement() {
  window.location.href="/agreement"
}

function TrainS() {
  window.location.href="/train_sequence"
}

function TicketS() {
  window.location.href="/table"
}

function Order() {
  window.location.href="/order"
}

function logout() {
  const data = {'token': cookie.load('token')}
  axios.post("http://localhost:8080/user/logout", data)
      .then(function (response) {
        cookie.remove('token', {path: '/'})
      })
      .catch(function (error) {
        alert(error)
      })
  alert(cookie.load('token'))
  window.location.href='/agreement'
}

function del() {
  const v = prompt("请输入密码：")
  if (v != null) {
    const data = {
      token: cookie.load('token'),
      password: v,
    }
    axios.post("http://localhost:8080/user/delete", data)
        .then(function (response) {
          cookie.remove('token', {path: '/'})
        })
        .catch(function (error) {
          alert(error)
        })
    window.location.href='/agreement'
  }
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    backgroundColor:
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  login: {
    padding: theme.spacing(5),
    display: 'grid',
    placeItems: 'center',
  },
  fixedHeight: {
    height: 240,
  },
}));

const mainListItems = (
    <div>
      <ListItem button onClick={Agreement}>
        <ListItemIcon>
          <DashboardIcon/>
        </ListItemIcon>
        <ListItemText primary="使用需知"/>
      </ListItem>
      <ListItem button onClick={Login}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="用户登录" />
      </ListItem>
      <ListItem button onClick={TrainS}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="车次查询" />
      </ListItem>
      <ListItem button onClick={TicketS}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="余票查询" />
      </ListItem>
      <ListItem button onClick={Order}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="查看订单" />
      </ListItem>
    </div>
);

const secondaryListItems = (
    <div>
      <ListSubheader inset>用户设置</ListSubheader>
      <ListItem button onClick={Register}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="用户注册" />
      </ListItem>
      <ListItem button onClick={logout}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="用户登出" />
      </ListItem>
      <ListItem button onClick={del}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="用户注销" />
      </ListItem>
    </div>
);

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
              position="absolute"
              className={clsx(classes.appBar, open && classes.appBarShift)}
          >
            <Toolbar className={classes.toolbar}>
              <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer}
                  className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.title}
              >
                火车售票系统
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
              variant="permanent"
              classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
              }}
              open={open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3} className={classes.login}>
                {/*{*/}
                {/*  index.map( currentIndex => {*/}
                {/*    return(*/}
                {/*        // <div onClick={ (  ) => { this.setState({ currentIndex : index }) } }*/}
                {/*             // className={ this.check_title_index( index ) }*/}
                {/*        // >*/}
                {/*        currentIndex*/}
                {/*        // </div>*/}
                {/*    )*/}
                {/*  })*/}
                {/*}*/}
                    <Switch>
                  {
                    routes.map(route => {
                      return (
                          <Route
                              key={route.path}
                              path={route.path}
                              component={route.component}/>
                      )
                    })
                  }
                  <Redirect exact from = "/" to = "/agreement" />
                  {/* 这里用 redirect 进行 首页自动跳转到 /home 路由下
                exact 意味着精确匹配 当为 / 时才跳转 /home 不是包含 / 就跳转到 /home
            */}
                  <Redirect to = '/404'/>
                </Switch>
              </Grid>
              <Box sx={{ pt: 4 }}>
                <Copyright />
              </Box>
            </Container>
          </main>
        </div>
      </Router>
  )
}
