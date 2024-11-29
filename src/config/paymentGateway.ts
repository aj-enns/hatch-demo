import Stripe from 'stripe';

const stripe = new Stripe('your-stripe-secret-key', {
  apiVersion: '2020-08-27',
});

export const processPayment = async (paymentData: any) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: paymentData.amount,
      currency: 'usd',
      payment_method: paymentData.paymentMethodId,
      confirmation_method: 'manual',
      confirm: true,
    });

    return paymentIntent;
  } catch (error) {
    throw new Error('Error processing payment');
  }
};

export const configurePaymentGateway = () => {
  // Add any additional configuration for the payment gateway here
};
