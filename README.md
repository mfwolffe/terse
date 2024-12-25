## Want to make your own goofy site like this?
It's Next.js bootstrapped with create-next-app. Typescript and Tailwind.

Do all the git things: fork, etc.

Once cloned, run the dev server:

```bash
npm run dev
```
(I opt arbitrarily for npm)

Navigate to [http://localhost:3000](http://localhost:3000) in your browser to check out the site. Changes made to code reflect live in the browser upon save.

Add your own twist(s) by modifying: (I added more components - this list is old. just check out the codebase)
* `app/page.tsx` for main text content
* `app/components/Transducer.tsx` for the randomized technobabble sentence
* `app/components/ComplaintForm.tsx` for the form controls and their presentation
* `app/components/Typewriter/Typewriter.tsx` & its css module for typewriter animation effect changes

Within `utils/common.ts` are some common helpers I find myself having to rewrite all the time.

## Deploying (Vercel)

Currently I'm just deploying static html from the compiled typescript.

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for details or if you want to be fancy. I intend to have a backend for the form data probably at some point, so static is temporary.

`npm run build` is the command.

I'm Hosting with github pages & a domain I own because I'm lazy and thought that would be fastest. If you want to do the same and end up using environment variables/tokens of your own and can't figure out the build & workflow, shoot me a message 📯

_Note about icons:_ I have a kit on FontAwesome that requires auth token. You can't really use it, naturally. Workarounds include making your own kits or using [React Icons](https://react-icons.github.io/react-icons/) or any other means for rendering icons on the web really. Just update the code accordingly. 
