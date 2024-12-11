import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const body = await request.json();

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: body.name,
            },
            unit_amount: body.price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    // Asegúrate de devolver la respuesta en formato JSON
    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


