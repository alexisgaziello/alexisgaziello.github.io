import React from 'react';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import { useHistory } from "react-router-dom";

const NotFoundPage = () => {

  const history = useHistory();

  return (
    <Container>
      <Segment style={{ padding: '8em 0em' }} vertical>
        {/* TODO: change color to global variable */}
        <Header as='h1' style={{ fontSize: '15vw', fontFamily: "Billabong", color: "#85e2ff"}}  textAlign="center">
          page not found
        </Header>
        <br/>
        <Header as='h2' textAlign="center">
          Classic 404 error...
        </Header>
        <Header as='h3' textAlign="center">
          Is the URL correctly formatted?
        </Header>
        <br/>
        <br/>
        <br/>
        <Grid>
          <Grid.Column textAlign="center">
            <Button size='huge' onClick={() => { history.push("/") }} align="center">
            Go back to home!
            </Button>
          </Grid.Column>
        </Grid>

      </Segment>
    </Container>
  );
}

export default NotFoundPage;