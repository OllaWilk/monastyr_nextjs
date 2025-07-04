This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.




```
my-next-app/
│
├── app/
│   ├── layout.tsx               # Main layout with globals.scss import
│   ├── page.tsx                 # Home Page (/)
│   ├── about/
│   │   └── page.tsx             # Subpage /about
│   └── contact/
│       └── page.tsx             # Subpage /contact
│
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.scss
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.module.scss
│   └── SomeButton/
│       ├── SomeButton.tsx
│       └── SomeButton.module.scss
│
├── styles/
│   ├── globals.scss             # Global styles + reset + theme
│   ├── variables.scss           # Colors, fonts, spacing etc.
│   └── mixins.scss              # Media queries, helper functions
│
├── public/
│   └── logo.png                 # Only own assets
│
├── .gitignore
├── next.config.js
├── tsconfig.json
├── package.json
├── package-lock.json
└── README.md
```