# Public Policy and Education Fund

## Next.js front end
After cloning into the directory the first time, run `npm install`

Subsequently run `npm run dev` to run the dev server. See other commands in `package.json`.

## Sanity headless CMS
On first run, `cd studio && sanity install`.

Make sure to `touch .env` and input the variables to access the correct studio. Your file should look something like this:
```
SANITY_PROJECT_ID=XXXXXXXX
SANITY_DATASET=production
```

To run the studio locally, inside the `studio` directory run `sanity start`. 
