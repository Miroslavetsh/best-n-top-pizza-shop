# Express and Next application

This project was bootstrapped with [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

## Project

Classic marketplace example with pizzas

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Backend

My custom fake-server with Express JS placed in support branch server.
[Here](https://best-n-top-pizza-shop.herokuapp.com/pizzas) you can see application's api - pizza👌

## Payments

I use Stripe to make transactions, I've placed purchase.ts file in api folder, NextJS allows us to use this trick and make RESTful api by default. To test payments and order one of pizza you can use test Visa card: 4242 4242 4242 4242 with CUSTOM date and CVV code [more](https://stripe.com/docs/testing#cards)

### Tech Stack

- NextJS;
- TypeScript ( static typization for JavaScript );
- React Testing Library ( testing components );
- Redux ( storing data on client side );
- Redux-Thunk ( async actions in Redux );
- React Router ( routes without website reload );
- Axios ( AJAX-requests );
- json-server ( storing pizzas on 'fake' server );
- react-stripe ( make test transactions );
