# TravelDiary website

Next.js (App Router) marketing site for the TravelDiary app. Every page is static.

```sh
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

Store links, contact email, domain and version live in `lib/site.ts`.
Set `appStoreUrl` there when the iPhone app is live; until then the button reads "Coming soon".
Feature list and FAQ (shared by the home and support pages) live in `lib/content.tsx`.
Deploy by importing this folder into Vercel (no settings needed).
