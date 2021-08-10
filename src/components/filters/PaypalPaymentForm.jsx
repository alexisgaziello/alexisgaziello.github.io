import React, { Component } from 'react'
import {
    Button,
    Checkbox,
    Form,
    Input,
    Grid,
    Select,
    TextArea,
    Header,
} from 'semantic-ui-react'

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Test
const paypalMerchantID = "AfZpSjF_LjZeSBrPcr3irvh5M0yIuqwOVu6zpFuzqY6e6Wt3PP3pe8FZOwKXRBpoF3NliY10l_z6GLlH"
//Prod
//const paypalMerchantID = "AQxgGUy6jazNlDtkwUw6tUkzvLK2NlWFClPcW49PlKWMqTmsIrGv-IY9qrr_odQUkaAveHhIZ2SiRDgl"

export default class PaymentForm extends Component {

    constructor(props) {
        super(props)
        this.createOrder = this.createOrder.bind(this)
        this.onApprove = this.onApprove.bind(this)
        this.onCancel = this.onCancel.bind(this)
        this.onError = this.onError.bind(this)
      }

    createOrder(data, actions) {
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            value: this.props.amount,
                        },
                    },
                ],
            })
            .then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    }

    onApprove(data, actions) {
        return actions.order.capture().then(function (details) {
            setOnApproveMessage(
                `Transaction completed by ${details.payer.name.given_name}!`
            );
        });
    }

    onCancel(data, actions) {

    }

    onError(error) {
        setOnErrorMessage(err.toString());
    }


    render() {

        const paypalOptions = {
            "client-id": paypalMerchantID,
            currency: "USD",
            intent: "capture",
            "data-client-token": "abc123xyz==",
        };

        return (
            <div>
                <Grid textAlign="center">
                    <Grid.Column>

                        <h1>Payment</h1>

                        <p>We are nearly done! After the payment is accepted, our team will create your filter and send it to you by email.</p>

                        <br />
                        <br />

                        <PayPalScriptProvider options={{ paypalOptions }}>
                            <PayPalButtons 
                                style={{ layout: "vertical", color: "gold"}}
                                createOrder={this.createOrder}
                                onApprove={this.onApprove}
                                onError={this.onError}
                                // forceReRender={[amount]}
                            />
                        </PayPalScriptProvider>

                    </Grid.Column>
                </Grid>
                <br />

            </div>
        )
    }
}