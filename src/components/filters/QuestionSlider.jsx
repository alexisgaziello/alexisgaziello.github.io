import React, { Component } from 'react'
import {
    Segment,
    Reveal,
    Button,
    Icon,
    Label,
    Grid,
    Image,
} from 'semantic-ui-react';
import { Slider } from "react-semantic-ui-range";

import { blue, pink, yellow, green } from "../../constants.js"
const colors = [blue, pink, yellow];

export default class QuestionSlider extends Component {
    state = {
        yes_active: false,
        no_active: false,
        sliderValue: this.props.initialSliderValue,
    };

    handleClickYes = () =>
        this.setState(() => ({
            yes_active: true,
            no_active: false,
        }));
    handleClickNo = () =>
        this.setState(() => ({
            no_active: true,
            yes_active: false,
        }));


    render() {
        const { yes_active, no_active, sliderValue } = this.state

        const max = colors.length;
        const randomInt = Math.floor(Math.random() * max)
        const color = colors[randomInt]
        const slider = (
            <Grid.Column width={12}>
                <Grid columns={2}>
                    <Grid.Column width={12}>
                        <Slider color={color} inverted={false}
                            settings={{
                                start: sliderValue,
                                min: 0,
                                max: 100,
                                step: 1,
                                onChange: (value) => {
                                    this.setState({
                                        sliderValue: value
                                    })
                                }
                            }} />
                    </Grid.Column>
                    <Grid.Column width={4}>

                        <Label color="green">{sliderValue}</Label>
                    </Grid.Column>

                </Grid>


            </Grid.Column>
        )

        return (
            <div hidden={this.props.hidden}>
                <h1 style={{ color: color }}>{this.props.questionConfig.title}</h1>
                <Image
                    src={`../images/monsters/monster_${this.props.index}.png`}
                    style={{ position: "relative", bottom: 0, left: "10%", maxWidth: "min(400px, 35vw, 50vh)" }}
                />
                <div className='speech-bubble'>{this.props.questionConfig.question}</div>
                <Grid stackable columns={2}>
                    <Grid.Column width={4}>
                        <Button content='Sí' toggle active={yes_active} onClick={this.handleClickYes} />
                        <Button content='No' toggle active={no_active} onClick={this.handleClickNo} />
                    </Grid.Column>

                    {yes_active ? slider : null}


                </Grid>
                <br />
                <Button animated='fade' onClick={() => window.open(this.props.questionConfig.tryLink, '_blank')}>
                    <Button.Content visible>Pruébalo!</Button.Content>
                    <Button.Content hidden><Icon name="instagram" /></Button.Content>
                </Button>
            </div>
        )
    }
}