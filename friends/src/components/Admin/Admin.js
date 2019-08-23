import React, { Component } from "react";
import { Card, Grid } from "semantic-ui-react";
import AddFriend from "../AddFriend/AddFriend";
import FriendList from "../FriendList/FriendList";
import AuthService from "../../utils/authServices";
import FriendServices from "../../utils/friendServices";

const auth = new AuthService();
const friends = new FriendServices();
export default class Admin extends Component {
  state = {
    friends: []
  };
  componentDidMount() {
    if (auth.isAuthenticated()) {
      friends
        .getFriends()
        .then(response => {
          this.setState({
            friends: [...this.state.friends, ...response.data]
          });
        })
        .catch(errors => console.log(errors.response));
    }
  }

  handleNewFriends = friends => {
    this.setState({ friends: friends });
  };

  render() {
    return (
      <>
        <Grid container columns={2}>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>Add a New Friend</Card.Header>
              </Card.Content>
              <Card.Content>
                <AddFriend handleNewFriends={this.handleNewFriends} />
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <FriendList
              friends={this.state.friends}
              handleNewFriends={this.handleNewFriends}
            />
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
