import React, { Component } from "react";
import { Card, Form, Grid } from "semantic-ui-react";
import { Formik } from "formik";
import LoginForm from "./LoginForm";
import AuthService from "../../utils/authServices";

const auth = new AuthService();

export default class Login extends Component {
  render() {
    return (
      <Grid
        style={{ height: "100vh" }}
        textAlign="center"
        verticalAlign="middle"
      >
        <Grid.Column width={4}>
          <Card>
            <Card.Content>
              <Formik
                initialValues={{
                  username: "Lambda School",
                  password: "i<3Lambd4"
                }}
                onSubmit={(credentials, actions) => {
                  actions.setSubmitting(true);

                  auth.login(credentials).then(response => {
                    actions.setSubmitting(false);

                    auth.finishAuthentication(response.data.payload);

                    this.props.history.push("/admin");
                  });
                }}
                render={formikProps => <LoginForm {...formikProps} />}
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}
