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
  Card,
  Dimmer,
  Loader,
} from 'semantic-ui-react';

import { motion } from "framer-motion"

import RadioOptions from './filters/RadioOptions.jsx'
import QuestionSlider from './filters/QuestionSlider.jsx'
import Steps from './filters/Steps.jsx'
import PaymentForm from './filters/PaymentForm.jsx'

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

// Steps
const stepsDescription = [
  {
    title: "Upload Menu",
    iconName: "upload",
  },
  {
    title: "Payment",
    iconName: "payment",
  }
]

export default class MenuFilters extends React.Component {

  state = {
    //  Initial active step
    activeStep: 0,
    // Array to save steps that have been completed.
    completed: stepsDescription.map(() => false),
    // The filename to upload 
    file: {
      fileName: null,
      fileData: null,
      fileContentType: null,
    },
    // Boolean to indicate if the payement and file upload succeeded
    success: null,
  };

  constructor(props) {
    super(props)
    this.setActiveStep = this.setActiveStep.bind(this)
    this.pushActiveStep = this.pushActiveStep.bind(this)
    this.fileSelected = this.fileSelected.bind(this)
    this.handleSubmission = this.handleSubmission.bind(this)
    this.uploadFile = this.uploadFile.bind(this)
  }

  fileSelected(event) {
    const selectedFiles = event.target.files;
    //Check File is not Empty
    if (selectedFiles.length == 0) {
      return;
    }
    // Select the very first file from list
    const fileToLoad = selectedFiles[0];
    const fileName = fileToLoad.name;

    const fileType = fileName.split(".").pop().toLowerCase();
    let fileContentType = "";
    if (fileType === "pdf") {
      fileContentType = "application/pdf"
    } else if (fileType === "png") {
      fileContentType = "image/png"
    } else if (fileType === "jpg" || fileType === "jpeg") {
      fileContentType = "image/png";
    }

    let fileData;
    // FileReader function for read the file.
    let fileReader = new FileReader();
    // Onload of file read the file content
    fileReader.onload = function (event) {
      fileData = event.target.result;
    };
    // Convert data to base64
    fileReader.readAsDataURL(fileToLoad);


    // Save file
    this.pushActiveStep({
      file: {
        fileName: fileName,
        fileData: fileData,
        fileContentType: fileContentType,
      }
    });
  }

  handleSubmission() {
    this.pushActiveStep();
    this.uploadFile();
  }

  async uploadFile() {

    try {
      const customerID = "test";
      const timestamp = Date.now();

      // TODO ENABLE CORS??

      const url = `https://pa5xypqpp8.execute-api.us-east-1.amazonaws.com/prod/filters-menus/${customerID}_${timestamp}.pdf`;

      let response = await fetch(url,
        {
          method: "PUT",
          body: JSON.stringify(this.state.file.fileData),
          headers: {
            "Content-Type": this.state.file.contentType,
          },
        });

      this.setState({
        success: true,
      });
      console.log('Success:', response);

    } catch (error) {
      console.error('Error:', error);
      this.setState({
        success: false,
      });
      // TODO send me email
      // TODO display error message. Refund?
    }
  }

  pushActiveStep(extraState) {
    this.setActiveStep(this.state.activeStep + 1, extraState)
  }

  setActiveStep(index, extraState) {
    const { completed } = this.state;
    // if (index > completed.findIndex((isCompleted) => !isCompleted) + 1 && !completed[index]) {
    //   // We don't want skipping steps
    //   console.log("bro?")
    //   return;
    // }
    completed[index - 1] = true;
    this.setState({
      activeStep: index,
      completed: completed,
      ...extraState,
    });
  }

  render() {
    const formAnimation = {
      show: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: "-100%", transition: { when: "beforeChildren" } },
    }

    let hiddenInput;

    return (
      <Container>

        <br />
        <br />

        {/* Step 1: Upload file */}
        {this.state.activeStep === 0 &&
          <Card centered>
            {/* TODO: image preview when upload */}
            <Button
              icon="upload"
              size="massive"
              style={{ height: "200px" }}
              onClick={() => hiddenInput.click()}
            />
            <input
              hidden
              type="file"
              name="file"
              onChange={this.fileSelected}
              ref={element => {
                hiddenInput = element
              }}
              accept=".jpg,.jpeg,.png,.pdf"
            />

            {/* Card Description */}
            <Card.Content>
              <Card.Header>Upload Image</Card.Header>
              <Card.Meta>
                <span className='date'>.jpg, .png, .pdf</span>
              </Card.Meta>
              <Card.Description>
                Select the file that will appear in your filter.
              </Card.Description>
            </Card.Content>
          </Card>
        }

        {/* Step 2: Payment */}
        {this.state.activeStep === 1 &&
          <div>
            <PaymentForm></PaymentForm>
            <Grid textAlign="center">
              <Grid.Column>
                <Button onClick={this.handleSubmission}> Submit </Button>
              </Grid.Column>
            </Grid>
          </div>
        }

        {/* Final message */}
        {this.state.activeStep === 2 &&
          <Segment loading={this.state.success === null} style={{ height: "200px" }}>
            {this.state.success
              ? <h1>Success</h1>
              : <h1>Failure</h1>
            }
          </Segment>
        }

        <br />

        {/* Steps */}
        {this.state.activeStep < 2 &&
          <Steps
            stepsDescription={stepsDescription}
            activeStep={this.state.activeStep}
            setActiveStep={this.setActiveStep}
            completed={this.state.completed}
          />
        }

        <Button onClick={() => this.pushActiveStep()}></Button>

        <br />
        <br />

      </Container>
    )
  }
}
