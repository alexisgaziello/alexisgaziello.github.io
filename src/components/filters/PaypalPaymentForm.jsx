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
// const paypalClientID = "test";
const paypalClientID = "AfZpSjF_LjZeSBrPcr3irvh5M0yIuqwOVu6zpFuzqY6e6Wt3PP3pe8FZOwKXRBpoF3NliY10l_z6GLlH"
// Prod
// const paypalClientID = "AQxgGUy6jazNlDtkwUw6tUkzvLK2NlWFClPcW49PlKWMqTmsIrGv-IY9qrr_odQUkaAveHhIZ2SiRDgl"

const paypal_backend_url = "https://m8qidd33f5.execute-api.us-east-1.amazonaws.com/default/paypal-payment-backend-application"

export const PaypalPaymentForm = (filtersQty, onError, setActiveStep) => {

    const createOrder = (data, actions) => {
        return fetch(paypal_backend_url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: {
                "filters_quantity": filtersQty
            }
        }).then(function (res) {
            console.log(res)
            return res.json();
        }).then(function (data) {
            console.log(data)
            return data.id; // Use the key sent by your server's response, ex. 'id' or 'token'
        });
    }

    const onApprove = (data, actions) => {
        console.log(data, actions)
        return actions.order.capture().then(function (details) {
            console.log(details)
            details.payer.name.given_name
        });
    }

    const paypalOptions = {
        "client-id": paypalClientID,
        // currency: "USD",
        // intent: "authorize",
        // "data-client-token": "abc123xyz==",
    };

    return (
        <div>
            <Grid textAlign="center">
                <Grid.Column>

                    <h1>Payment</h1>

                    <p>We are nearly done! After the payment is accepted, our team will create your filter and send it to you by email.</p>

                    <br />
                    <br />

                    <PayPalScriptProvider options={paypalOptions}>
                        <PayPalButtons
                            style={{ layout: "vertical", color: "white" }}
                            createOrder={createOrder}
                            onApprove={onApprove}
                            onError={onError}
                            forceReRender={[filtersQty]}
                        />
                    </PayPalScriptProvider>

                </Grid.Column>
            </Grid>
            <br />

        </div>
    )
}
