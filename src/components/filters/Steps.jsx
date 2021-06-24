import React, { Component } from 'react'
import {
    Segment,
    Reveal,
    Button,
    Icon,
    Label,
    Grid,
    Image,
    Step,
} from 'semantic-ui-react';
import { Slider } from "react-semantic-ui-range";

import { blue, pink, yellow } from "../../constants.js"
const colors = [blue, pink, yellow];


export default class Steps extends Component {

    render() {
        const { stepsDescription, setActiveStep, activeStep, completed} = this.props;

        const max = colors.length;
        const randomInt = Math.floor(Math.random() * max)
        const color = colors[randomInt]

        const steps = stepsDescription.map((stepDescription, index) => {
            const { title, iconName } = stepDescription

            return (
                <Step
                    link
                    key={index}
                    active={activeStep == index}
                    disabled={!completed[index] && index > completed.findIndex((isCompleted) => !isCompleted)} 
                    completed={completed[index]}
                    onClick={() => setActiveStep(index)}
                >
                    <Icon name={iconName} />
                    <Step.Content>
                        <Step.Title>{title}</Step.Title>
                        {/* <Step.Description>{description}</Step.Description> */}
                    </Step.Content>
                </Step>
            );
        })

        return (
            <Step.Group widths={stepsDescription.length} size="mini">
                {steps}
            </Step.Group>
        )
    }
}