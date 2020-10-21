import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  login: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
});

export const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.login}>
      Login
    </div>
  )
}
