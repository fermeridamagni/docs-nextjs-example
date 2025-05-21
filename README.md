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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

```plaintext
.
├── src/
│   ├── app/                  # App router directory
│   │   ├── [lang]/           # Dynamic language route
│   │   │   ├── content.mdx   # MDX content
│   │   │   ├── layout.tsx    # Layout component
│   │   │   ├── page.tsx      # Page component
│   │   │   └── product/
│   │   │       └── [name]/   # Dynamic product route
│   │   └── registry/         # API registry
│   │       └── [name]/
│   ├── assets/               # Static assets
│   │   ├── fonts/            # Font configurations
│   │   └── styles/           # Global styles
│   ├── components/           # React components
│   │   ├── Header.tsx        # Header component
│   │   ├── SideBar.tsx       # Sidebar component
│   │   └── new-york/         # UI component library
│   │       └── ui/           # Shadcn UI components
│   ├── dictionaries/         # i18n dictionaries
│   │   ├── en.json           # English translations
│   │   └── es.json           # Spanish translations
│   ├── hooks/                # Custom React hooks
│   └── types/                # TypeScript type definitions
├── components.json           # UI components config
├── next.config.ts            # Next.js configuration
├── package.json              # Project dependencies
└── tsconfig.json             # TypeScript configuration
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
