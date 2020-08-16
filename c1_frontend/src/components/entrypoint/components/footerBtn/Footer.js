import React, { Component } from 'react'

import Button from '@material-ui/core/Button'

import styles from './Footer.module.css'

export class Footer extends Component {
  onClick = e => {
    e.preventDefault()
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    return (
      <div className={styles.footer}>
        <Button
          onClick={this.props.onClick}
          classes={{
            root: styles.footer__btn,
            label: styles.footer__btn__text
          }}
          style={{ backgroundColor: '#e3e3e3' }}
        >
          {this.props.btnText}
        </Button>
      </div>
    )
  }
}
