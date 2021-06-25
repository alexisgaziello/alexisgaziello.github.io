import React from 'react';

import { blue, pink, yellow } from "../constants.js"

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

import { useHistory } from "react-router-dom";

import { motion } from "framer-motion"

import Sparkles from 'react-sparkle'


const Home = () => {
  const history = useHistory();

  return (
    <div>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Sparkles
          // color="red"
          minSize={7}
          maxSize={13}
          flicker={false}
          fadeOutSpeed={20}
          flicker={false}
          overflowPx={0}
        />
        <Image
          src={"../images/rainbow.png"}
          style={{ position: "absolute", bottom: 0, left: 0, maxWidth: "min(200px, 25vw)" }}
        />
        <Image
          src={"../images/sun.png"}
          style={{ position: "absolute", top: 20, right: 40, maxWidth: "min(200px, 25vw)" }}
        />
        <Header as='h1' style={{ fontSize: 'min(40vw, 300px)', fontFamily: "Billabong", color: blue }} textAlign="center">
          filters
        </Header>
      </Segment>

      <Segment style={{ padding: '8em 0em', backgroundImage: `url(${"images/backgrounds/pink_curved_lines.png"})` }} vertical>
        <Grid container stackable verticalAlign='middle' >
          <Grid.Row>
            <Grid.Column floated='right' width={8}>
              <div style={{ minHeight: "min(400px, 70vw)" }}>

                <motion.div animate={{ y: 15 }} transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} initial={{ y: 10 }} >
                  <Image
                    src={"../images/instagram_like_blue.png"}
                    style={{ position: "absolute", top: "30px", left: "20%", maxHeight: "min(350px, 60vw)" }}
                    className="custom-shadow"
                  />
                </motion.div>

              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '5em', fontFamily: "Windsor" }}>
                Libertad y personalización
              </Header>
              <p style={{ fontSize: '1.33em', fontFamily:"sailorsregular" }}>
                ¿Te imaginas poder diseñar un filtro con las características de tu elección?
                Nosotros queremos darte esa habilidad. Con unos sencillos pasos podrás construir un filtro
                desde 0 y añadirlo a tu cuenta para que tus seguidores puedan utilizarlo.
              </p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>

            <br />
            <br />
            <br />

          </Grid.Row>

          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Button size='huge' onClick={() => { history.push("/filters") }} style={{ backgroundColor: pink }} >
                Personaliza tu filtro!
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '8em 0em', backgroundImage: `url(${"../images/backgrounds/azul_triangulo_blanco.png"})` }} vertical>
        <Grid container stackable verticalAlign='middle' >
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '5em', fontFamily: "Windsor" }}>
                Te ayudamos a crecer
              </Header>
              <p style={{ fontSize: '1.33em', fontFamily:"sailorsregular" }}>
                Añade un filtro personalizado a tu Instagram que hará tu cuenta exclusiva. Consigue un mayor alcance
                y deja a tus seguidores boquiabiertos con un filtro que nunca han visto.
                Diseña y comparte un efecto único en tus historias.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={8}>
              <div style={{ minHeight: "min(400px, 70vw)" }}>

                <motion.div animate={{ y: 15 }} transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} initial={{ y: 10 }} >
                  <motion.div whileHover={{ scale: 1.12 }} >
                    <Image
                      src={"../images/iphone_filters/filtro_brillante.png"}
                      style={{ position: "absolute", top: "30px", left: "5%", maxHeight: "min(350px, 60vw)", boxShadow: "10px 20px 40px #303030" }}
                    />
                  </motion.div>
                </motion.div>
                <motion.div animate={{ y: 15 }} transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} initial={{ y: 5 }} >
                  <motion.div whileHover={{ scale: 1.12 }} >
                    <Image
                      src={"../images/iphone_filters/filtro_abeja.png"}
                      style={{ position: "absolute", top: "10px", right: "35%", maxHeight: "min(350px, 60vw)", boxShadow: "10px 20px 40px #303030" }}
                    />
                  </motion.div>
                </motion.div>
                <motion.div animate={{ y: 15 }} transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} initial={{ y: 8 }} >
                  <motion.div whileHover={{ scale: 1.12 }} >
                    <Image
                      src={"../images/iphone_filters/filtro_moreno.png"}
                      style={{ position: "absolute", top: "50px", right: "5%", maxHeight: "min(350px, 60vw)", boxShadow: "10px 20px 40px #303030" }}
                    />
                  </motion.div>
                </motion.div>
              </div>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "What a Company"
              </Header>
              <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "I shouldn't have gone with their competitor."
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <Image avatar src='data:image/jpeg;base64,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' />
                <b>Cesc Valido</b> Chief Fun Officer Acme Toys
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Breaking The Grid, Grabs Your Attention
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Instead of focusing on content creation and hard work, we have learned how to master the
            art of doing nothing by providing massive amounts of whitespace and generic content that
            can seem massive, monolithic and worth your attention.
          </p>
          <Button as='a' size='large'>
            Read More
          </Button>

          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Case Studies</a>
          </Divider>

          <Header as='h3' style={{ fontSize: '2em' }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
            it's really true. It took years of gene splicing and combinatory DNA research, but our
            bananas can really dance.
          </p>
          <Button as='a' size='large'>
            I'm Still Quite Interested
          </Button>
        </Container>
      </Segment>


    </div>

  );
}

export default Home;