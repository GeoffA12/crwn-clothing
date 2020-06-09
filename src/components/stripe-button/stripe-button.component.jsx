import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

/* In order to make a charge with stripe using the StripeCheckout API, Stripe expects our amount charged to be in cents.*/
const StripeCheckoutButton = ( { price }) => {
    // Ensure that our price will be converted from USD to cents. 
    const priceForStripe = price * 100;
    // Public key taken from our stripe account. 
    const publishableKey = "pk_test_YabltzirzQhrqMPmdwdtPirb00hRGXUMqj";
    // Because we're not actually submitting real payments from customers to a back-end, we don't need to do anything with the return
    // token value from the Stripe API. But normally we would use this token data and send it to the back end. 
    const onToken = token => {
        console.log(token);
        alert("Payment successful");
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
             /* Token is the on success callback function that will trigger when the user clicks submit on their stripe payment form. */
            token={onToken} 
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;