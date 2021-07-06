import React, { Component } from 'react'
import Papa from 'papaparse';

import {
  Container,
  Header,
  Segment,
  Form,
  Radio,
  Button,
  Icon,
  Grid,
} from 'semantic-ui-react';

import RadioOptions from './filters/RadioOptions.jsx'
import QuestionSlider from './filters/QuestionSlider.jsx'
import Steps from './filters/Steps.jsx'

import { blue, pink, yellow } from "../constants.js"

import questionsConfig from '../data/questions.csv'

function loadQuestions() {
  const questionsComponents = []
  questionsConfig.forEach(questionConfig => questionsComponents.push(
    <QuestionSlider key={questionConfig.title}
      title={questionConfig.title}
      tryLink={questionConfig.tryLink}
      initialSliderValue={questionConfig.initialSliderValue}
    />
  )
  )
  return questionsComponents
}


const tonalidad = [
  {
    name: "tonality",
    label: "Summer Vibes",
    value: "summer_vibes",
  },
  {
    name: "tonality",
    label: "Winter Vibes",
    value: "winter_vibes",
  },
  {
    name: "tonality",
    label: "California Happiness",
    value: "california_happiness",
  },
]


const tamaño = [
  {
    name: "tamaño",
    label: "1",
    value: "1",
  },
  {
    name: "tamaño",
    label: "2",
    value: "2",
  },
  {
    name: "tamaño",
    label: "3",
    value: "3",
  },
  {
    name: "tamaño",
    label: "4",
    value: "4",
  },
  {
    name: "tamaño",
    label: "5",
    value: "5",
  },
]


// Steps
const stepsDescription = questionsConfig.map(questionConfig => {
  return {
    title: questionConfig.title,
    iconName: questionConfig.iconName,
  }
});

// Add payment step
stepsDescription.push({
  title: "Pago",
  iconName: "payment",
})


export default class Filters extends React.Component {

  state = {
    activeStep: 0,
    completed: stepsDescription.map(() => false),
  };

  constructor(props) {
    super(props)

    this.setActiveStep = this.setActiveStep.bind(this)
  }

  setActiveStep(index) {
    const { completed } = this.state;
    if (index > completed.findIndex((isCompleted) => !isCompleted) + 1 && !completed[index]) {
      // We don't want skipping steps
      return
    }
    completed[index - 1] = true;
    this.setState({
      activeStep: index,
      completed: completed
    })
  }

  render() {
    return (
      <Container>
        <Header as='h1' textAlign="center" style={{ fontSize: '8em', fontFamily: "Windsor", color: pink, padding: "10vh" }}>
          ¡Personaliza tu filtro!
        </Header>
        {/* <RadioOptions
        title="Tonalidad"
        fields={tonalidad}
        tryLink="https://resizer.glanacion.com/resizer/meIoluj_woSjQUOMMYSoYCILPF4=/879x586/smart/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/DA5Y4GXFABHFPD7VZDPCARIA4U.jpg"
      />

      <RadioOptions
        title="Tamaño"
        fields={tamaño}
        tryLink="https://www.ecestaticos.com/imagestatic/clipping/c47/eac/c47eac612aa7ccb688bcb243bda93e25.jpg"
      /> */}

        {questionsConfig.map((questionConfig, index) => (
          <QuestionSlider key={index}
            index={index}
            initialSliderValue={questionConfig.initialSliderValue}
            hidden={index != this.state.activeStep}
            questionConfig={questionConfig}
            />
        ))}
        <Button onClick={() => this.setActiveStep(this.state.activeStep + 1)} >Next</Button>
        <Steps
          stepsDescription={stepsDescription}
          activeStep={this.state.activeStep}
          setActiveStep={this.setActiveStep}
          completed={this.state.completed}
        />

      </Container>
    )
  }
}
