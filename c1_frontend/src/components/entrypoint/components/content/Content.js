import React, { Component } from 'react'

import './Content.css'

export class Content extends Component {
  render() {
    return (
      <div className="entrypoint__content">
        <div className="entrypoint__content__title">{this.props.title}</div>
        <div className="entrypoint__content__description">
          <br />
          {this.props.description.split('\n').map((item, i) => {
            return <div key={i}>{item}</div>
          })}
        </div>
      </div>
    )
  }
}
