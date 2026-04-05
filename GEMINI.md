# Gemini CLI Context: mylink

This project is a Next.js web application named `my-profile`, likely intended to serve as a personal profile or portfolio site.

## Project Overview

- **Purpose:** Personal profile or portfolio application.
- **Framework:** [Next.js](https://nextjs.org/) (App Router).
- **Frontend:** [React](https://react.dev/) (v19).
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4) with [PostCSS](https://postcss.org/).
- **Language:** [TypeScript](https://www.typescriptlang.org/).
- **Typography:** Geist and Geist Mono fonts.

## Directory Structure

- `my-profile/`: The main Next.js project directory.
    - `app/`: Next.js App Router directory containing pages, layouts, and global styles.
    - `public/`: Static assets (images, icons, etc.).
    - `next.config.ts`: Next.js configuration.
    - `tsconfig.json`: TypeScript configuration.
    - `package.json`: Project dependencies and scripts.

## Building and Running

All commands should be run from within the `my-profile` directory:

```bash
cd my-profile
```

| Task | Command |
| :--- | :--- |
| **Development** | `npm run dev` |
| **Build** | `npm run build` |
| **Production Start** | `npm run start` |
| **Linting** | `npm run lint` |

## Development Conventions

- **App Router:** Follow Next.js App Router conventions for routing and data fetching.
- **Styling:** Use Tailwind CSS utility classes for styling components.
- **TypeScript:** Use strict TypeScript for type safety.
- **Components:** Organize reusable components within the `app` directory or a separate `components` directory (if created).
- **Icons/Images:** Place static assets in the `public` directory and use the `next/image` component for optimization.
