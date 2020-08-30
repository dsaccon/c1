import React, { Component } from 'react'

import ic_selected from './images/selected.svg'

import styles from './Item.module.css'

export class Item extends Component {
  constructor(props) {
    super(props)
    this.state = { selected: false }
  }

  handleClick = e => {
    e.preventDefault()
    this.setState({
      selected: !this.state.selected
    })
  }

  render() {
    return (
      <div className={styles.item} onClick={this.handleClick}>
        {this.props.img ? (
          <img className={styles.ic_img} src={this.props.img} alt="" />
        ) : null}
        <div className={styles.item__text}>{this.props.content}</div>
        {this.state.selected ? (
          <img className={styles.ic_selected} src={ic_selected} alt="" />
        ) : null}
      </div>
    )
  }
}
