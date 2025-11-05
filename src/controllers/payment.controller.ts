// controllers/stripe.controller.ts
import Stripe from "stripe";
import type { Request, Response } from "express";
import { successResponse } from "../utils/resposne.util.js";
import AppError from "../utils/app-error.util.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const priceId = process.env.STRIPE_PRICE_ID!;

export async function subscribe(req: Request, res: Response) {
  try {
    console.log("checkPoint#1");


    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
    //   customer_email: user.email, // helps auto-link stripe customers
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/payments/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/payments//cancel`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

export async function successPayment(req: Request, res: Response){
    const sessionId = req.query.session_id as string;
  if (!sessionId) return res.status(400).send("Missing session_id");

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // You can optionally look up the customer/subscription details here:
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );
    return successResponse(res, "✅ Payment Successful!", { subscriptionId: subscription.id }, 200 )
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to verify payment");
  }
}



export async function cancelPayment(req: Request, res: Response){
    throw new AppError("❌ Payment Canceled", 400, "Payment is cancelled, please try again later.")
}