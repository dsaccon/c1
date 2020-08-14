import React, { Component } from 'react'
import { connect } from 'react-redux'

import GoogleButton from 'react-google-button'

import styles from './Login.module.css'
import { Header } from '../header/Header'
import { MyInput } from './components/Myinput/MyInput'
import { LoginBtn } from './components/LoginBtn/LoginBtn'
import { Breakline } from './components/breakline/Breakline'
import { authorize } from './redux/action'

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '', password: '' }

    console.log(this.props.store)

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    console.log(this.props.dispatch)
    //now has access to data like this.props.something, which is from store
    //now has access to dispatch actions like this.props.getSomething
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onBackClicked = e => {
    e.preventDefault()
    this.props.history.goBack()
  }

  onLoginClicked = e => {
    e.preventDefault()
    this.props.authorize(this.state.email, this.state.password)
  }

  render() {
    return (
      <div className={styles.login}>
        <div className={styles.header}>
          <Header onClick={this.onBackClicked} />
        </div>
        <div className={styles.description}>{'your accont'}</div>
        <div className={styles.login__form}>
          <div className={styles.login_form__input}>
            <MyInput
              type={'email'}
              name={'email'}
              placeholder={'Email'}
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.login_form__input}>
            <MyInput
              type={'password'}
              name={'password'}
              placeholder={'Password'}
              onChange={this.handleChange}
            />
          </div>
          <LoginBtn onClick={this.onLoginClicked} />
          <div className={styles.breakline}>
            <Breakline />
          </div>
          <GoogleButton
            onClick={() => {
              console.log('google button clicked')
            }}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  console.log(dispatch)

  return {
    authorize: (email, password) => dispatch(authorize(email, password))
  }
}

export default connect(null, mapDispatchToProps)(Login)
