import React from 'react'

import {
    Container
} from 'semantic-ui-react';

import { useLocation } from "react-router-dom";
import { blue, pink } from "../constants.js"


export const PurchaseCompleted = () => {

    const location = useLocation();
    const locationItems = location.pathname.split("/")

    let errorMessage = "";
    let transactionID = "";

    const success = locationItems[2] === "success";

    if (success) {
        transactionID = locationItems[3];
    } else {
        errorMessage = locationItems[3];
    }

    return (
        <Container>

            <br />
            <br />

            {success
                ? <div>
                    <h1>Success</h1>
                    <p>We are happy to inform you that we have received your order!</p>
                    <p>You transaction ID is: <span style={{ backgroundColor: blue, fontWeight: "bold" }}> {'\u00A0'} {transactionID} {'\u00A0'} </span></p>
                    <p>Our team will start working on your custom filter. You will receive it by email
                        in 24h. If you have any questions please don't hesitate and contact us at {'\u00A0'}
                        <a href='mailto:insta.filters.contact@gmail.com'>insta.filters.contact@gmail.com</a>.
                    </p>
                </div>

                : <div>
                    <h1>Failure</h1>
                    <p>It looks like there was an error :(</p>
                    <p>Error message:
                        <span style={{ backgroundColor: pink, fontWeight: "bold" }}> {'\u00A0'} {errorMessage} {'\u00A0'} </span>
                    </p>
                    <p>Please, send an email to
                        <a href='mailto:insta.filters.contact@gmail.com'>
                            {'\u00A0'} insta.filters.contact@gmail.com {'\u00A0'}
                        </a>
                        detailing what happened and we will try to get back to you as soon as possible.
                        We are deeply sorry for the inconvenience.
                    </p>
                </div>
            }

            <br />
            <br />

        </Container>
    )
}
