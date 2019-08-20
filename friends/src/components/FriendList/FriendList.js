import React, { Component } from "react";
import { Button, Card, Header, Grid, Modal } from "semantic-ui-react";
import { Formik } from "formik";
import AddForm from "../AddFriend/AddFriendForm";
import AuthService from "../../utils/authServices";
import FriendService from "../../utils/friendServices";

const auth = new AuthService();
const friends = new FriendService();

export default class FriendList extends Component {
  handleDeleteFriend = friendID => {
    friends
      .deleteFriend(friendID)
      .then(response => {
        this.props.handleNewFriends(response.data);
      })
      .catch(errors => {
        console.log(errors.response);
      });
  };
  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>Your Friends</Card.Header>
        </Card.Content>
        <Card.Content>
          <Grid columns={4}>
            <Grid.Row color="red">
              <Grid.Column width={3}>
                <strong>Friend</strong>
              </Grid.Column>
              <Grid.Column width={2}>
                <strong>Age</strong>
              </Grid.Column>
              <Grid.Column width={8}>
                <strong>Email</strong>
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>
            {this.props.friends.length > 0 &&
              this.props.friends.map(friend => (
                <Grid.Row key={friend.id} verticalAlign="middle">
                  <Grid.Column width={3}>
                    <span>
                      <strong>{friend.name}</strong>
                    </span>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <span>{friend.age}</span>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <span>{friend.email}</span>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    {/* <Button size="tiny">Edit</Button> */}

                    <Modal basic closeIcon trigger={<Button>Edit</Button>}>
                      <Modal.Header>Edit Friend</Modal.Header>
                      <Modal.Content>
                        <Formik
                          initialValues={{
                            name: friend.name,
                            age: friend.age,
                            email: friend.email
                          }}
                          onSubmit={(values, actions) => {
                            if (auth.isAuthenticated()) {
                              values.id = friend.id;
                              actions.setSubmitting(true);
                              friends
                                .updateFriend(values)
                                .then(response => {
                                  actions.setSubmitting(false);

                                  this.props.handleNewFriends(response.data);
                                })
                                .catch(errors => {
                                  console.log(errors.response);
                                });
                            }
                          }}
                          render={formikProps => (
                            <AddForm {...formikProps} action={"edit"} />
                          )}
                        />
                      </Modal.Content>
                      <Modal.Actions>
                        <Button
                          color="red"
                          onClick={() => this.handleDeleteFriend(friend.id)}
                        >
                          Delete
                        </Button>
                      </Modal.Actions>
                    </Modal>
                  </Grid.Column>
                </Grid.Row>
              ))}
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}
