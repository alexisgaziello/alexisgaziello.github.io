import React from 'react';
import {
  Container,
  Segment,
  Form,
  Radio,
 } from 'semantic-ui-react';

const Filters = () => {



  return (
    <div>
      <Container>
        <h1>Filters</h1>

      </Container>

      <Segment>
        <h2>Tonalidad</h2>
        <Form>
          <Form.Field>
            Selected value: <b>{this.state.value}</b>
          </Form.Field>
          <Form.Field>
            <Radio
              label='Choose this'
              name='radioGroup'
              value='this'
              checked={this.state.value === 'this'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Or that'
              name='radioGroup'
              value='that'
              checked={this.state.value === 'that'}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
      </Segment>
    </div>
  );
}

export default Filters;