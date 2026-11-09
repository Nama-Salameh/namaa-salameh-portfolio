# Nama' Salameh — Portfolio & CV

A personal portfolio and CV built with Next.js, TypeScript, and Tailwind CSS.

**Live portfolio:** [nama-salameh-portfolio.vercel.app](https://nama-salameh-portfolio.vercel.app)

## Overview

This project presents my professional profile, work experience, projects, and contact information in a responsive single-page portfolio experience with supporting detail pages.

## Features

- Responsive portfolio layout for mobile and desktop
- About, portfolio, and contact sections
- Project detail pages generated from structured data
- Dark mode toggle with saved preference
- Contact links and profile metadata
- Centralized portfolio content in `src/data/config.ts`

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

## Local Development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Production Build

```bash
npm run build
```

## Customize Content

Edit the exported data in `src/data/config.ts` to update:

- personal identity and bio
- social links
- skills
- experience
- education
- certifications
- portfolio projects
- contact details

## Project Structure

```text
src/
  app/
    page.tsx
    about/
    portfolio/
    contact/
    layout.tsx
  components/
    NavBar.tsx
    Footer.tsx
    ThemeToggle.tsx
    SkillsExplorer.tsx
  data/
    config.ts
```

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
