import React, { Component } from "react";
import { Formik } from "formik";
import AddFriendForm from "./AddFriendForm";
import AuthService from "../../utils/authServices";
import FriendService from "../../utils/friendServices";

const auth = new AuthService();
const friends = new FriendService();

export default class AddFriend extends Component {
  render() {
    return (
      <>
        <Formik
          initialValues={{ name: "", age: "", email: "" }}
          onSubmit={(values, actions) => {
            if (auth.isAuthenticated()) {
              actions.setSubmitting(true);
              friends
                .addFriend(values)
                .then(response => {
                  actions.setSubmitting(false);
                  actions.resetForm();
                  this.props.handleNewFriends(response.data);
                })
                .catch(errors => {
                  console.log(errors.response);
                });
            }
          }}
          render={formikProps => (
            <AddFriendForm {...formikProps} action={"add"} />
          )}
        />
      </>
    );
  }
}
