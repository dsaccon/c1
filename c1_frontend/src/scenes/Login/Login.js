import React from 'react'
import { Slide } from "material-auto-rotating-carousel";
import { Button, makeStyles } from "@material-ui/core";
import { CorrosionOneIconSvg } from "../../components/Icons/CorrosionOneIconSvg";
import { CollectJobsSvg } from '../../components/Icons/CollectJobsSvg';
import AutoRotatingCarousel from "../../components/AutoRotatingCarousel/AutoRotatingCarousel";

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
    height: '100px',
    backgroundColor: '#296D8E'
  },
  button: {
    margin: 'auto',
    width: '75%',
    font: 'Montserrat',
    backgroundColor: '#6DDA43',
    color: 'white'
  }
});

export const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.login}>
      <AutoRotatingCarousel
        classes={{
          content: classes.content,
          carousel: classes.carousel
        }}
        // mobile
        open
        autoplay={false}>
        <Slide media={<CorrosionOneIconSvg className={classes.corrosionIcon}/>} />
        <Slide media={<CollectJobsSvg />} alt="collect jobs"/>
        <Slide media={<div>Screen 2</div>} />
        <Slide media={<div>Screen 3</div>} />
        <Slide media={<div>Screen 4</div>} />
      </AutoRotatingCarousel>
      <div className={classes.footer}>
        <Button className={classes.button} variant='contained'>LOG IN</Button>
      </div>
    </div>
  )
}