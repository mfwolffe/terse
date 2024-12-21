This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Want to make your own goofy site like this?

Do all the git things: fork, etc.

Once cloned, run the dev server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site; it updates with your changes live.

Add your own twist by modifying:
* `app/page.tsx` for main text content
* `app/components/Transducer.tsx` for the randomized technobabble sentence
* `app/components/ComplaintForm.tsx` for the form controls and their presentation
* `app/components/Typewriter/Typewriter.tsx` & its css module for typewriter animation effect changes

Within `utils/common.ts` are some common helpers I find myself having to rewrite all the time.


## Deploying (Vercel)

Currently I'm just deploying static html from the compiled typescript. 

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for details or if you want to be fancy. I intend to have a backend for the form data probably at some point.

To build the way I currently am:

```bash
npm run build
```

### Learn More Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!