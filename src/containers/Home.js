import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import Link from '@material-ui/core/Link';
import Fade from '@material-ui/core/Fade';
// import Transition from 'react-transition-group/Transition';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mediamanipulation.com/">
//         mediamanipulation 
//       </Link>{' '}
//      1996 - {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
const durationCard = 3000;
const durationText1 = 2000;
const durationText2 = 2500;
const durationText3 = 3500;

// const defaultStyle = {
//     transition: `opacity ${duration}ms ease-in-out`,
//     opacity: 0,
// }

// const transitionStyles = {
//     entering: { opacity: 0, display: 'none' },
//     entered:  { opacity: 1 , display: 'block'},
//     exited:  { opacity: 0, display: 'none'},
// };

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(1, 0, 1),
  },
  // heroButtons: {
  //   marginTop: theme.spacing(4),
  // },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
}));

const cards = [1, 2, 3];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="right" color="textPrimary" gutterBottom>
            <Fade timeout={durationText1} in='true' >
            <div>
              Art
              </div>
              </Fade>
            </Typography>
            <Typography variant="h5" align="right" color="textSecondary">
            <Fade timeout={durationText2} in='true' >
            <div>
            The power of nature is such that it’s what all art strives to be. The more we can get in tune with the harmony of the planet, the more our art can benefit from that relationship. Rick Rubin
              </div>
              </Fade>
            </Typography>
           
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
              <Fade timeout={durationCard} in='true' >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Container maxWidth="md">
      <Typography variant="h7" align="center" color="textSecondary">
            <Fade timeout={durationText3} in='true' >
            <div>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
              </div>
              </Fade>
            </Typography>
      </Container>
      {/* Footer */}
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          social media links
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
         
      </footer> */}
      {/* End footer */}
    </React.Fragment>
  );
}