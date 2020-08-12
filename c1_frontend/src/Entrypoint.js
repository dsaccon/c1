import React, { Component } from "react"

import "./Entrypoint.css"
import { FooterBtn } from "./components/footerBtn/FooterBtn"
import { Header } from "./components/header/Header"

export class Entrypoint extends Component {
  render() {
    return (
      <div className="entrypoint">
        <div className="entrypoint__content">
          <Header />
        </div>
        <div className="entrypoint__footer">
          <FooterBtn />
        </div>
      </div>
    )
  }
}
