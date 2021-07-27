import React from 'react';

import {
  Menu,
  Container,
  Dropdown,
  Flag,
  Icon,
  Segment,
  Header,
  Grid,
  Button,
  Divider,
  Image,
  Label,
} from 'semantic-ui-react'

import { blue, pink, yellow } from "../constants.js"


const About = () => {


  return (
    <Container>
      
      <br/>
      <br/>
      
      <h1 style={{textAlign: "center", fontFamily: "Billabong", fontSize: "5em", color: pink}} >¿Quiénes somos?</h1>
      <br/>
      <Segment padded='very' vertical>
        <Grid columns={2} stackable textAlign='center'>

          <Grid.Row verticalAlign='middle'>

            <br />
            <br />

            <Grid.Column>
              <Image src='../images/dani.jpg' circular size='small' centered />

              <br />
              <br />

              <Button animated='fade' onClick={() => window.open('https://www.instagram.com/danielbetancort/', '_blank')}>
                <Button.Content visible>Daniel Betancort</Button.Content>
                <Button.Content hidden><Icon name="instagram" /></Button.Content>
              </Button>

            </Grid.Column>
            <Grid.Column>
              <Header style={{fontFamily: "Windsor", fontSize: "5em", color: blue}}> La imaginación </Header>
              Siempre dispuesto a sorprender y buscando la forma de hacer reir.
              <br/>
              ¡Llevo varios años haciendo filtros y ahora
               con este proyecto espero llegar a muchas más personas!
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Segment>


      <Segment padded='very' vertical>
        <Grid columns={2} stackable textAlign='center'>

          <Grid.Row verticalAlign='middle'>

            <br />
            <Grid.Column>
              <Header style={{fontFamily: "Windsor", fontSize: "5em", color: blue}}> La maquinaría </Header>

              Un ingeniero con una pasión por resolver problemas. 
              <br/>
              
            </Grid.Column>

            <Grid.Column>
              <Image src='../images/alexis.jpg' circular size='small' centered />


              <Header>
                Alexis Gaziello
              </Header>

            </Grid.Column>

          </Grid.Row>

        </Grid>
      </Segment>


    </Container>

  );
}

export default About;