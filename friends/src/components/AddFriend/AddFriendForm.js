import React, { Component } from "react";
import { Form, Header } from "semantic-ui-react";
export default class AddFriendForm extends Component {
  render() {
    const submitButtonName =
      this.props.action === "add" ? "Add" : "Edit Change";
    return (
      <>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Input
            icon="user"
            name="name"
            onChange={this.props.handleChange}
            value={this.props.values.name}
            placeholder="Name"
            type="text"
          ></Form.Input>
          <Form.Input
            icon="birthday"
            name="age"
            onChange={this.props.handleChange}
            value={this.props.values.age}
            placeholder="Age"
            type="number"
          ></Form.Input>
          <Form.Input
            icon="mail"
            name="email"
            onChange={this.props.handleChange}
            value={this.props.values.email}
            placeholder="Email"
            type="text"
          ></Form.Input>
          <Form.Button loading={this.props.isSubmitting} primary type="submit">
            {submitButtonName}
          </Form.Button>
        </Form>
      </>
    );
  }
}
