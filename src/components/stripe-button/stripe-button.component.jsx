import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    // Stripe wants the price value in cents, for some reason
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H3t8iFnWveNagOM0luCV45xsaRpwl0cDaI7qdl4fPt52Ptduls6huWMMrh4JInVEk32jHmlyRVHgjuNVxFszSSz00UBami9xh';

    const onToken = token => {
        console.log(`Token: ${token}`);
        alert('Payment Successful. Thanks!');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='Danya Official LLC'
            billingAddress
            shippingAddress
            description={`Your total is $${price}.`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;