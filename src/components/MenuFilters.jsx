import React, { Component } from 'react'

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
  Popup,
} from 'semantic-ui-react';

import { motion } from "framer-motion"

import RadioOptions from './filters/RadioOptions.jsx'
import QuestionSlider from './filters/QuestionSlider.jsx'
import Steps from './filters/Steps.jsx'
import PaypalPaymentForm from './filters/PaypalPaymentForm.jsx'
import UploadOptions from './filters/UploadOptions.jsx'
import HiddenDiv from './General.jsx'

import { blue, pink, yellow } from "../constants.js"


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
    activeStep: 1,
    // Array to save steps that have been completed.
    completed: stepsDescription.map(() => false),
    // Boolean to indicate if the payement and file upload succeeded
    filtersQty: 1,
    success: null,
    error_message: "",
  };

  constructor(props) {
    super(props)
    this.setState = this.setState.bind(this);
    this.setActiveStep = this.setActiveStep.bind(this)
    this.pushActiveStep = this.pushActiveStep.bind(this)
    this.handleSubmission = this.handleSubmission.bind(this)
    this.uploadFile = this.uploadFile.bind(this)
  }

  handleSubmission() {
    this.pushActiveStep();
    console.log(this.state)
    this.uploadFile("file1");
  }

  async uploadFile(fileID) {

    const file = this.state[fileID];

    try {
      const customerID = "test";
      const timestamp = Date.now();
      const extension = file.fileContentType.split("/").pop()
      // TODO ENABLE CORS??

      const url = `https://pa5xypqpp8.execute-api.us-east-1.amazonaws.com/prod/filters-menus/${customerID}_${timestamp}.${extension}`;

      let response = await fetch(url,
        {
          method: "PUT",
          body: file.fileData,
          headers: {
            "Content-Type": file.fileContentType,
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

    const filesSelectedCorrectly = (
      this.state.file1
      && (this.state.filtersQty === 1
        || (this.state.filtersQty === 2 && this.state.file2))
    )

    const filesSelectedAreEqual = (
      this.state.file1 && this.state.file2
      && this.state.file1.fileData === this.state.file2.fileData
    )


    const popUpContent = filesSelectedAreEqual
      ? "Please, select 2 different files!"
      : filesSelectedCorrectly
        ? "Proceed to payment"
        : `Upload ${this.state.filtersQty} file${this.state.filtersQty === 1 ? "" : "s"} first`


    return (
      <Container>

        <br />
        <br />

        {/* Step 1: Upload file */}
        <HiddenDiv hidden={(this.state.activeStep === 0)}>
          <UploadOptions
            filtersQty={this.state.filtersQty}
            parentSetState={this.setState}
          />

          <br /> <br />

          <Grid textAlign="center">
            <Grid.Column>
              <Popup
                content={popUpContent}
                position="top center"
                trigger={
                  <div>
                    <Button
                      disabled={!filesSelectedCorrectly || filesSelectedAreEqual}
                      onClick={this.pushActiveStep}
                      negative={filesSelectedAreEqual}
                    >
                      Next
                    </Button>
                  </div>
                } />
            </Grid.Column>
          </Grid>
        </HiddenDiv>


        {/* Step 2: Payment */}
        <HiddenDiv hidden={this.state.activeStep === 1}>
          <PaypalPaymentForm parentSetState={this.setState} filtersQty={this.state.filtersQty}></PaypalPaymentForm>
          <Grid textAlign="center">
            <Grid.Column>
              <Button onClick={this.handleSubmission}> Submit </Button>
            </Grid.Column>
          </Grid>
        </HiddenDiv>


        {/* Final message */}
        <HiddenDiv hidden={this.state.activeStep === 2}>
          <Segment loading={this.state.success === null} style={{ height: "200px" }}>
            {this.state.success

              ? <div>
                <h1>Success</h1>
                <p>We are happy to inform you that we have received your order!</p>
                <p>Our team will start working on your custom filter and you will receive it by email
                  in 24h. If you have any questions please do not hesitate and contact us at 
                  <a href='mailto:insta.filters.contact@gmail.com'>insta.filters.contact@gmail.com</a>.
                  </p>
              </div>

              : <div>
                <h1>Failure</h1>
                <p>It looks like there was an error :(</p>
                <p>{this.state.error_message}</p>
                <p>Please, send an email to
                  <a href='mailto:insta.filters.contact@gmail.com'>insta.filters.contact@gmail.com</a>
                  detailing what happened and we will try to get back to you as soon as possible.
                  We are deeply sorry for the inconvenience.
                </p>
              </div>
            }
          </Segment>
        </HiddenDiv>


        <br />


        {/* Steps */}
        <HiddenDiv hidden={this.state.activeStep < 2}>
          <Steps
            stepsDescription={stepsDescription}
            activeStep={this.state.activeStep}
            setActiveStep={this.setActiveStep}
            completed={this.state.completed}
          />
        </HiddenDiv>

        <Button onClick={() => this.pushActiveStep()}></Button>

        <br />
        <br />

      </Container>
    )
  }
}
