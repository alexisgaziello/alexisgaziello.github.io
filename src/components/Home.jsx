import React from 'react';

import { blue, pink, yellow, green } from "../constants.js"

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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsiveCarousel = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const Home = () => {
  const history = useHistory();

  return (
    <div>

      <Segment style={{ padding: '8em 0em', height: "calc(100vh - 63px)" }} vertical>
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
          style={{ position: "absolute", bottom: 0, left: 0, maxWidth: "min(200px, 25vw, 40vh)" }}
        />
        <Image
          src={"../images/sun.png"}
          style={{ position: "absolute", top: 20, right: 40, maxWidth: "min(200px, 25vw)" }}
        />
        <Header
          as='h1'
          style={{
            // position: "absolute", top: "15vh", left: "20%",
            fontSize: 'min(300px, 40vw, 50vh)', fontFamily: "Billabong", color: blue,
          }}
          textAlign="center"
        >
          filters
        </Header>
      </Segment>

      {/* SECCIÓN 1 */}

      <Segment style={{ padding: '8em 0em', backgroundImage: `url(${"images/backgrounds/pink_curved_lines.png"})` }} vertical>
        <Grid container stackable verticalAlign='middle' >
          <Grid.Row>
            <Grid.Column floated='right' width={8} >
              <div style={{ minHeight: "min(400px, 70vw)" }}>

                <motion.div animate={{ y: 15 }} transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} initial={{ y: 10 }} >
                  <Image
                    src={"../images/instagram_like_blue.png"}
                    style={{ position: "absolute", top: "20px", left: "20%", maxHeight: "min(350px, 60vw)" }}
                    className="custom-shadow"
                  />
                </motion.div>

              </div>
            </Grid.Column>
            <Grid.Column width={8} className="mobile only">
              <br />
              <br />
              <br />
              <br />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '5em', fontFamily: "Windsor" }}>
                Libertad y personalización
              </Header>
              <p style={{ fontSize: '1.33em' }}>
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

      {/* SECCIÓN 2 */}

      <Segment style={{ padding: '8em 0em', backgroundImage: `url(${"../images/backgrounds/azul_triangulo_blanco.png"})` }} vertical>
        <Grid container stackable verticalAlign='middle' >
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '5em', fontFamily: "Windsor" }}>
                Te ayudamos a crecer
              </Header>
              <p style={{ fontSize: '1.33em' }}>
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

      {/* SECCIÓN 3 */}

      <Segment style={{ padding: '8em 0em', backgroundImage: `url(${"images/backgrounds/amarillo_bola_rosa.png"})` }} vertical>

        <Header as='h3' style={{ fontSize: '5em', fontFamily: "Windsor", textAlign: "center" }}>
          Algunos de nuestros trabajos
        </Header>

        <Container>
          <Carousel responsive={responsiveCarousel}>
            <div>Filtro animales
            <Image
              src={"../images/iphone_filters/filtro_moreno.png"}
              style={{boxShadow: "10px 20px 40px #303030" }}
            />
            </div>
            <div>Filtro animales
            <Image
              src={"../images/iphone_filters/filtro_moreno.png"}
              style={{boxShadow: "10px 20px 40px #303030" }}
            />
            </div>
            <div>Filtro animales
            <Image
              src={"../images/iphone_filters/filtro_moreno.png"}
              style={{boxShadow: "10px 20px 40px #303030" }}
            />
            </div>
            <div>Filtro animales
            <Image
              src={"../images/iphone_filters/filtro_moreno.png"}
              style={{boxShadow: "10px 20px 40px #303030" }}
            />
            </div>
            <div>Filtro animales
            <Image
              src={"../images/iphone_filters/filtro_moreno.png"}
              style={{boxShadow: "10px 20px 40px #303030" }}
            />
            </div>
          </Carousel>

        </Container>




      </Segment>


    </div>

  );
}

export default Home;