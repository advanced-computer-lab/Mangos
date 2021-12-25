import React from 'react';
import '../../App.css';

import StripeCheckoutButton from './StripeCheckoutButton';

function Payment() {

  const totalPrice = 58;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pay for your ticket</h1>
        <p>
          Pay Total of $ {totalPrice}
        </p>
        <p>
          <StripeCheckoutButton price={totalPrice} />
        </p>
      </header>
    </div>
  );
}

export default Payment;