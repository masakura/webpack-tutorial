import React from "react";
import ReactDOM from "react-dom";

class AppShell extends React.Component {
  render() {
    return React.createElement('div', null, 'Hello, world!');
  }
}

ReactDOM.render(React.createElement(AppShell), document.querySelector('#container'));
