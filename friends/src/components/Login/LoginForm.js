import React, { Component } from "react";
import { Button, Form, Header, Icon } from "semantic-ui-react";

export default class LoginForm extends Component {
  render() {
    return (
      <>
        <Header>Login</Header>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Input
            name="username"
            placeholder="username"
            onChange={this.props.handleChange}
            type="text"
            value={this.props.values.username}
          ></Form.Input>
          <Form.Input
            name="password"
            onChange={this.props.handleChange}
            placeholder="password"
            type="password"
            value={this.props.values.password}
          ></Form.Input>
          <Button
            fluid
            loading={this.props.isSubmitting}
            style={{
              backgroundColor: "#F06543",
              color: "#FFFFFF"
            }}
            type="submit"
          >
            Login
          </Button>
        </Form>
      </>
    );
  }
}
