import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from './utils/Typography';
import TopPopOver from './utils/TopPopOver'
const styles = theme => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});
var images = [
  {
    url     : 'https://www.dekun.me/img/portfolio/thumbnails/1.PNG',
    title   : 'Coding',
    width   : '40%',
  },
  {
    url     : 'https://dekun.me/img/portfolio/thumbnails/eye.png',
    title   : 'Sketching',
    width   : '25%',
  },
  {
    url     : 'https://www.dekun.me/img/portfolio/thumbnails/3.png',
    title   : 'Robotics',
    width   : '35%',
  },
  {
    url     : 'https://www.dekun.me/img/portfolio/thumbnails/4.png',
    title   : 'Teaching',
    width   : '38%',
  },
  {
    url     : 'https://www.dekun.me/img/portfolio/thumbnails/5.png',
    title   : 'MIT AI Program',
    width   : '18%',
  },
  {
    url     : 'https://www.dekun.me/img/portfolio/thumbnails/6.png',
    title   : 'Zhongxi',
    width   : '44%',
  },

];
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        open  : false,
        content : ""
    }

  }
  handleClick(title){
     this.setState({open:!this.state.open})
     if(title === "Coding"){this.setState({content:"coding projects I've done:\n-Free VPN platforms: www.cd7zvpn.top; vpn.7debate.top\n-Website for school debate club: www.7debate.club\n-Blog for my class: www.kb201602.com\n-Headless CMS (in progress): https://github.com/dekunma/Zhongxi-Headless-CMS-Frontend"})}
      else if (title === "Sketching"){this.setState({content:"Sketching is one of my hobby. \nThis is the sketch of my ex-girl friend (unfortunately)"})}
      else if (title === "Robotics"){this.setState({content:"I am the leading programmer in my school's VEX robotics club.\n We have won\n-Amaze Award (The highest technical achievement) in 2017 VEX World Championship\n-Gold Award in 2016 World Asia Championship\n-First Prize in 2019 World Asia Open"})}
      else if (title === "Teaching"){this.setState({content:"I help others with my knowleges.\n-ANZ & Bainian High School: http://anz.zhxi.co/ \nInternship as a TA in Le Wagon\n Little Science Monster Club in Great China"})}
      else if (title === "MIT AI Program"){this.setState({content:"https://github.com/dekunma/2017-MIT-Machine-Learning-Camp"})}
      // can't figure out why this line won't work without "&&..."
      else if (title === "Zhongxi"&&!this.state.open){this.setState({content:"I'm a member in Zhongxi Computer Science community.\n From there I learnt knowleges, and I contribute back to the community"})}
  }
  openPopOver(){
    return true;
  }
  render(){
    const { classes } = this.props;
    
    return (
      <div>
      <Container className={classes.root} component="section">
      
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
            onClick={()=>this.handleClick(image.title)}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
            <TopPopOver key={image.title} open={this.state.open} content={this.state.content}></TopPopOver>

          </ButtonBase>
        ))}
      </div>
    </Container>
  </div>
      
    );
  }
 
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);