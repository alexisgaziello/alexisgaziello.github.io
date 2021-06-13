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

        return (
            <Segment>
                <h1>{this.props.title}</h1>
                <Grid>
                    <Grid.Column width={1}>
                        <Button content='Sí' toggle active={yes_active} onClick={this.handleClickYes} />
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <Button content='No' toggle active={no_active} onClick={this.handleClickNo} />
                    </Grid.Column>

                    <Grid.Column width={10}>

                        <Grid>
                            <Grid.Column width={6}>
                                <Slider color="red" inverted={false}
                                    settings={{
                                        start: this.state.sliderValue,
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

                            <Grid.Column width={1}>
                                <Label color="red">{this.state.sliderValue}</Label>
                            </Grid.Column>

                        </Grid>

                    </Grid.Column>
                </Grid>
                <br />
                <Button animated='fade' onClick={() => window.open(this.props.tryLink, '_blank')}>
                    <Button.Content visible>Pruébalo!</Button.Content>
                    <Button.Content hidden><Icon name="instagram" /></Button.Content>
                </Button>
            </Segment>
        )
    }
}