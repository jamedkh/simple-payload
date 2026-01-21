# 🚀 Payload CMS Simple Homepage

A simple, headless CMS-powered website featuring a custom homepage with modular components.

## 📦 Features

- Payload CMS v3: Modern, TypeScript-first headless CMS.
- Modular Homepage: A single-page layout built with flexible content blocks:
  - Hero: Impactful headline, subtext, and call-to-action.
  - About: Dedicated section for storytelling and bios.
  - Newsletter: Lead generation form integration.
- Media Management: Built-in support for image uploads and optimization.
- Type Safety: Auto-generated TypeScript interfaces for all content.

## 🛠️ Tech Stack

| Tool         | Usage                         |
| ------------ | ----------------------------- |
| Payload CMS  | Headless Content Management   |
| Next.js      | Frontend Framework / Admin UI |
| MongoDB      | Database Layer                |
| TypeScript   | Static Typing                 |
| Tailwind CSS | Page Styling                  |

## 🚦 Getting Started

### 1. Prerequisites

- Node.js (v18.0.0 or higher)
- A local or cloud database (MongoDB or PostgreSQL)

### 2. Installation

- Clone the repository and install dependencies:
- `cd my-project && cp .env.example .env` to copy the example environment variables. You'll need to add the `MONGODB_URL` from your Cloud project to your `.env` if you want to use S3 storage and the MongoDB database that was created for you.
- `pnpm install && pnpm dev` to install dependencies and start the dev server
- open `http://localhost:3000` to open the app in your browser

That's it! Changes made in `./src` will be reflected in your app. Follow the on-screen instructions to login and create your first admin user. Then check out [Production](#production) once you're ready to build and serve your app, and [Deployment](#deployment) when you're ready to go live.
