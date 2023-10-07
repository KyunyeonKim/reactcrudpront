import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/head.css";
class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="https://localhost:3000/board" className="navbar-brand">
                리엑트crud
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
