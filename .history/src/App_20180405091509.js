import React, { Component } from "react";
import { Fetch } from "react-data-fetching";

class App extends Component {
  render() {
    return (
      <Fetch url="https://api.github.com/users/octocat" timeout={5000}>
        {({ data }) => (
          <div>
            <h1>Username</h1>
            <p>{data.name}</p>
          </div>
        )}
      </Fetch>
    );
  }
}

export default App;
