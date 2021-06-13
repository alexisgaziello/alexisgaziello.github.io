import React, { Component } from 'react'
import {
  Segment,
  Form,
  Radio,
  Button,
  Icon,
} from 'semantic-ui-react';

export default class RadioOptions extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const elements = []
    this.props.fields.forEach(field => {
      elements.push(
        <Form.Field key={field.value}>
          <Radio
            label={field.label}
            name={field.name}
            value={field.value}
            checked={this.state.value === field.value}
            onChange={this.handleChange}
          />
        </Form.Field>
      )
    });

    return (
      <Segment>
        <h1>{this.props.title}</h1>
        <Form>
          {elements}
        </Form>
        <br />
        <Button animated='fade' onClick={() => window.open(this.props.tryLink, '_blank')}>
          <Button.Content visible>Pruébalo!</Button.Content>
          <Button.Content hidden><Icon name="instagram"/></Button.Content>
        </Button>
      </Segment>
    )
  }
}