import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import AuthService from "../../utils/authServices";
import styles from "./Navbar.module.scss";
const auth = new AuthService();

class Navbar extends Component {
  logout = () => {
    auth.logout();
    this.props.history.push("/");
  };
  render() {
    const access = !auth.isAuthenticated() ? (
      <NavLink to="/login">
        <Menu.Item>Login</Menu.Item>
      </NavLink>
    ) : (
      <Menu.Item onClick={this.logout}>Logout</Menu.Item>
    );
    return (
      <Menu>
        <Menu.Item>
          <Menu.Header className={styles.logo}>Let's Make Friends</Menu.Header>
        </Menu.Item>
        <Menu.Menu position="right">{access}</Menu.Menu>
      </Menu>
    );
  }
}
export default withRouter(Navbar);
