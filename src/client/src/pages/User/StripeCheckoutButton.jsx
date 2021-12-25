import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K9cm0G7mLD28wXg4YB0irgz6TdUmqFo4GgOEyQrxWzmclgCaQnLxYQ9QHKdxSVHdgtase1SDcEtXpcG4yT3OYp4002gAxs5Re';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
        window.location.replace("/");
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Mangos'
            //billingAddress
           // shippingAddress
            image='https://scontent.fcai20-2.fna.fbcdn.net/v/t1.6435-9/118808734_179654896941815_8850938996036694527_n.png?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=86aT8vaM-AQAX8UnYyI&_nc_ht=scontent.fcai20-2.fna&oh=00_AT-h198cRvOgO6BA2aUXvqCGaStQPr_YSJniCUzopm5GYg&oe=61EC445D'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;