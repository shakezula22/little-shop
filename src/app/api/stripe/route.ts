import { CartProduct } from '@/app/store/cart-store/cart-context';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-08-16',
  });

  const body: CartProduct[] = await req.json();

  const session = await stripe.checkout.sessions.create({
    line_items: body.map(item => {
      return {
        price_data: {
          currency: 'usd',
          unit_amount: Math.floor(item.price * 100),
          product_data: {
            name: item.title,
          },
        },
        quantity: item.quantity,
      };
    }),
    mode: 'payment',
    success_url: 'https://little-shop-eosin.vercel.app/checkout/success',
    cancel_url: 'https://little-shop-eosin.vercel.app/cart',
  });

  // return NextResponse.redirect(session.url!);
  return NextResponse.json({
    url: session.url,
  });
}
