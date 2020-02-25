import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
// import Button from '@material-ui/core/Button';
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Fade from "@material-ui/core/Fade";
// import useMediaQuery from '@material-ui/core/useMediaQuery';

const durationTextLogo = 1000;
const durationTextMenu1 = 1300;
const durationTextMenu2 = 1500;
const durationTextMenu3 = 1900;
const durationTextMenu4 = 2000;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  hamb: {
    opacity: 1,
    "@media (min-width:780px)": {
      // eslint-disable-line no-useless-computed-key

      display: "none"
    }
  },
  mqMoblie: {
    opacity: 1,
    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "none"
    }
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {/* add title */}
      {/* <Typography variant="h6" className={classes.title}>
        mediamanipulation
      </Typography> */}
      <List>
        {["ART", "BIO", "DEMOS", "CONTACTS"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* secondary list */}
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar>
            <IconButton
              edge="start"
               onClick={toggleDrawer("left", true)}
              className={classes.menuButton, classes.hamb}
              color="secondary"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Fade in={true} timeout={durationTextLogo} >
              <div>mediamanipulation</div>
            </Fade>
          </Typography>
          <div className={classes.mqMoblie}>
            <Fade in={true} timeout={durationTextMenu1} >
              <Button color="inherit">art</Button>
            </Fade>
            <Fade in={true} timeout={durationTextMenu2} >
              <Button color="inherit">bio</Button>
            </Fade>
            <Fade in={true} timeout={durationTextMenu3} >
              <Button color="inherit">demos</Button>
            </Fade>
            <Fade in={true} timeout={durationTextMenu4} >
              <Button color="inherit">contact</Button>
            </Fade>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
