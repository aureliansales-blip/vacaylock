# VacayLock - Smart Lock Setup for Airbnb Hosts

Professional landing page built with Astro, React, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
```

The static site will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Astro and configure the build settings
5. Click "Deploy"

### Environment Variables

No environment variables required for basic deployment.

## 🛠️ Tech Stack

- **Astro** - Static site framework
- **React** - UI components
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

## 📁 Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── layouts/     # Astro layouts
│   ├── pages/       # Astro pages (routes)
│   └── styles/      # Global CSS
├── astro.config.mjs # Astro configuration
└── tailwind.config.mjs # Tailwind configuration
```

## 🎨 Customization

### Colors

Edit colors in `tailwind.config.mjs`:
```javascript
colors: {
  primary: {
    DEFAULT: '#0A7AFF',
    dark: '#0562CC',
    light: '#E6F3FF',
  },
  // ...
}
```

### Content

Update content in the React components located in `src/components/`.

### Domain

After deploying to Vercel:
1. Go to your project settings
2. Navigate to "Domains"
3. Add `vacaylock.com`
4. Update your domain's DNS settings as instructed by Vercel

## 📧 Support

For questions or issues, contact through the Fiverr profile.

## 📄 License

All rights reserved.
