import { loadStripe } from "@stripe/stripe-js";

export async function getStripeJs() {
  const stripePublicApiKey = process.env.NEXT_PUBLIC_STRIPE_KEY;
  console.log(String(stripePublicApiKey));

  const stripeJs = await loadStripe(stripePublicApiKey);

  return stripeJs;
}
