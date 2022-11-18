## Chainlink Hackathon 2022

Welcome you lazy minter! https://lazymint-chainlink.vercel.app/ 
Grab a POAP -> get a NFT – completely automated

## Inspiration
Based on the principles of personalized experiences we want to find an easy way to grant access to communities. We're tired of verifying quests and checking back if you meet conditions to perform an action - we wanted to create a flow where a user instantly triggers an action once conditions are met. 

Completely automated!

## What it does
Create a condition, like owning a specific token or POAP, check if it's raining outside via an API, or have liked a specific post on Twitter.

Once your community members meet the set condition, trigger an automated condition via chainlink automation - like mint them an NFT! 

An easier way to grant access and create a smooth flow for people in the web3 ecosystem - automated!

## How we built it
Let users mint a POAP, check if the wallet has the POAP and when the condition is met an NFT is automatically minted via chainlink automation to the user! To build it we used next.js & typescript, ethers, wagmi, hardhat, and the chainlink automation is buildout in solidity 

## Challenges we ran into
The hardest part has been deciding on the most suitable condition and smart contract action! We wanted to make it easy to understand: have a POAP -> receive an NFT

## Accomplishments that we're proud of
Creating a new standard of granting access to communities and automatic tasks like claiming NFT:s when you've completed a quest. Just making it super easy for users! 

## What we learned
Finding the balance between creating a usable app and showcasing a good case to more easily understand the product, basically finding the balance to scope a project down! Also details like finding a perfect way to distribute POAPs.

## What's next for Lazy mint
We would love to continue working on it and have more projects play around with access and the automatic actions from chainlink automation. Getting rid of the unnecessary hassle of claiming processes and forcing people to admin around things that can be removed!


## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_source=github.com&utm_medium=referral&utm_campaign=turborepo-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
