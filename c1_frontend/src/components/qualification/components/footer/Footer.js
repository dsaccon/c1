import React, { Component } from 'react'

import Button from '@material-ui/core/Button'

import styles from './Footer.module.css'

export class Footer extends Component {
  nextBtnStyle = {
    backgroundColor: '#e3e3e3',
    borderRadius: 6,
    borderColor: '4d4d4d',
    border: '1px solid'
  }

  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.next}>
          <Button
            onClick={this.props.onNextClick}
            classes={{
              root: styles.next__btn,
              label: styles.next_btn__text
            }}
            style={this.nextBtnStyle}
          >
            Next
          </Button>
        </div>
        <div className={styles.back_btn} onClick={this.props.onBackClicked}>
          Back
        </div>
      </div>
    )
  }
}
