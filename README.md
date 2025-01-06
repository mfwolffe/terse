## Want to make your own goofy site like this?
It's Next.js bootstrapped with create-next-app. Typescript and Tailwind.

**Right now I'm just handling formdata with formspree so that I can persist it there until I decide a better option.**

#### making your own
Do all the git things: fork, etc.

Once cloned, run the dev server:

```bash
npm run dev
```
(I opt arbitrarily for npm)

Navigate to [http://localhost:3000](http://localhost:3000) in your browser to check out the site. Changes made to code reflect live in the browser upon save.

Add your own twist(s) by modifying the components!

### Form data
You'll need your own formspree setup (or an alternate approach for persisting the data). I probably should make that endpoint a repo var shouldn't I?

### Deploying (Vercel)

Currently I'm just deploying static html from the compiled typescript.

`npm run build` is the command locally.

I'm Hosting with github pages & a domain I own because I'm lazy and thought that would be fastest. If you want to do the same and end up using environment variables/tokens of your own and can't figure out the build & workflow, shoot me a message 📯

_Note about icons:_ I have a kit on FontAwesome that requires auth token. You can't really use it, naturally. Workarounds include making your own kits or using [React Icons](https://react-icons.github.io/react-icons/) or any other means for rendering icons on the web really. Just update the code accordingly. 
