import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Nav from '../components/nav/index';
import Home from '../containers/Home';
import Footer from '../components/footer/footer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(14)
  },
  footer: {
    padding: theme.spacing(1, 1),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[800]
        : theme.palette.grey[200]
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Nav />
      <Container component='main' className={classes.main} maxWidth='md'>
        <Home />
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth='sm'>
          <Footer />
        </Container>
      </footer>
    </div>
  );
}
