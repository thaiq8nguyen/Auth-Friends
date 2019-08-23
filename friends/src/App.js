import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/admin" component={Admin} />
            <Route path="*" component={() => <div>404 Not Found</div>} />
          </Switch>
        </Router>
      </>
    );
  }
}
