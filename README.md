# Next.js Project: Moment Mint

## Description

Moment Mint is a revolutionary platform for sharing real-time moments and earning cryptocurrency. Here's what makes it special:

- **Real-time Sharing**: Capture and share exciting moments as they happen - be it a concert, a beautiful sunset, or any thrilling experience.
- **Earn Crypto**: Get rewarded with cryptocurrency for sharing your authentic moments.
- **Blockchain Verification**: We use blockchain technology to verify the authenticity of shared moments, ensuring genuine content.
- **NFT Creation**: Turn your most special moments into unique Non-Fungible Tokens (NFTs), creating digital collectibles that you exclusively own.

Experience the joy of sharing, earn rewards, and immortalize your memories in the digital world with Moment Mint!

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Deployment](#deployment)

## Installation

To set up this project on your local machine:

1. Ensure Node.js is installed (version 14.x or higher recommended)
2. Clone the repository:
   ```bash
   git clone https://github.com/tosif121/moment-mint.git
   ```
3. Navigate to the project directory:
   ```bash
   cd moment-mint
   ```
4. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

For production:
```bash
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about-us/
│   ├── privacy-policy/
│   └── terms-and-conditions/
├── public/
│   └── images/activities/
├── components/
│   ├── HowItWorks.tsx
│   ├── HomePage.tsx
│   ├── Footer.tsx
│   ├── Features.tsx
│   ├── DownloadApp.tsx
│   ├── AboutUs.tsx
│   ├── Terms.tsx
│   ├── PrivacyPolicy.tsx
│   └── NavBar.tsx
├── data/
│   └── activities.js
├── lottieAnimation/
│   ├── animation_1.json
│   ├── animation_3.json
│   └── animation_4.json
└── package.json
```

### Key Directories

- `app/`: Contains the main application code and pages
- `public/`: Static assets like images
- `components/`: UI components
- `data/`: Data files for the application
- `lottieAnimation/`: Animation files

## Features

- ⚡️ Next.js 14 with App Router
- 💨 Tailwind CSS for styling
- 📏 ESLint for code linting
- 💖 TypeScript for type safety
- 🎨 Lottie Animation for engaging user experiences
- 🔥 Framer Motion for smooth animations

## Deployment

The project is deployed using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), providing seamless deployment and excellent performance.
