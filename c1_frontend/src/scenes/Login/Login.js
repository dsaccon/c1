import React from 'react'
import { Slide } from "material-auto-rotating-carousel";
import { CorrosionOneIconSvg } from "../../components/Icons/CorrosionOneIconSvg";
// TODO this needs to be actual svg
// import { CollectJobsSvg } from '../../components/Icons/CollectJobsSvg';
import collectJobs from '../../components/Images/collectJobs.png';
import AutoRotatingCarousel from "../../components/AutoRotatingCarousel/AutoRotatingCarousel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  login: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  content: {
    flexGrow: '1',
    width: '100%',
    margin: 0,
    position: 'static',
    maxWidth: 'none',
    maxHeight: 'none',
    transform: 'none',
  },
  carousel: {
    '& div': {
      backgroundColor: '#274253 !important',
      position: 'static'
    },
  },
  corrosionIcon: {
    height: '75%',
    width: '75%'
  },
  footer: {
    display: 'flex',
    height: '10%',
    backgroundColor: '#296D8E'
  },
  button: {
    margin: 'auto',
    width: '75%',
    font: 'Montserrat',
    backgroundColor: '#6DDA43',
    color: 'white',
    '&:hover': {
      backgroundColor: '#6DDA43'
    },
  },
  collectJobsImage: {
    width: '100%',
  },
  corrosionTitle: {
    padding: '1.5rem 0',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: 'white',
    '& span': {
      color: '#6DDA43'
    }
  },
  slideMedia: {
    display: 'block',
  },
  slideTitle: {
    fontSize: '1.125rem',
    fontWeight: 800,
  }
});

export const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.login}>
      <AutoRotatingCarousel
        backButton
        classes={{
          content: classes.content,
          carousel: classes.carousel
        }}
        open
        autoplay={false}>
        <Slide media={<CorrosionOneIconSvg className={classes.corrosionIcon}/>}/>
        <Slide
          classes={{
            media: classes.slideMedia,
            title: classes.slideTitle,
            subtitle: classes.slideSubtitle
          }}
           media={
             <div>
               <Typography className={classes.corrosionTitle}>CORROSION<span>ONE</span></Typography>
               <img className={classes.collectJobsImage} src={collectJobs} alt="Collect Jobs"/>
             </div>
           }
          title='All in the palm of your hand. '
          subtitle='With global jobs right on your phone, you can easily fill your calendar and say goodbye to wasted time.' />
        <Slide media={<div>Screen 2</div>}/>
        <Slide media={<div>Screen 3</div>}/>
        <Slide media={<div>Screen 4</div>}/>
      </AutoRotatingCarousel>
      <div className={classes.footer}>
        <Button className={classes.button} variant='contained'>LOG IN</Button>
      </div>
    </div>
  )
}