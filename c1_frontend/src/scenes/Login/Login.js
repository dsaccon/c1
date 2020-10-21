import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { TextInput } from "../../components/Form/TextInput";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  login: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
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
  header: {
    backgroundColor: '#274253',
    textAlign: 'center'
  },
  subHeader: {
    backgroundColor: '#296D8E',
    textAlign: 'center',
    padding: '.5rem'
  },
  yourAccount: {
    color: 'white',
    fontWeight: 'bold'
  },
  formContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    flexGrow: 1,
    justifyContent: 'center',
    '& > *': {
      marginBottom: '1rem'
    }
  },
  loginButton: {
    font: 'Montserrat',
    backgroundColor: '#6DDA43',
    color: 'white',
    '&:hover': {
      backgroundColor: '#6DDA43'
    },
  },
  signUpButton: {
    font: 'Montserrat',
    backgroundColor: '#C9D7DD',
    color: '#274253',
    '&:hover': {
      backgroundColor: '#C9D7DD'
    },
  },
});

export const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.login}>
      <div className={classes.header}>
        <Typography className={classes.corrosionTitle}>CORROSION<span>ONE</span></Typography>
      </div>
      <div className={classes.subHeader}>
        <Typography variant="subtitle1" className={classes.yourAccount}>YOUR ACCOUNT</Typography>
      </div>
      <div className={classes.formContent}>
        <TextInput fullWidth placeholder="username" />
        <TextInput fullWidth placeholder="password" />
        <Button className={classes.loginButton} fullWidth>LOG IN</Button>
        <Typography>OR</Typography>
        <Button className={classes.signUpButton} fullWidth>Sign up with Google</Button>
      </div>
    </div>
  )
}
