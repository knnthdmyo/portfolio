# Kenneth Damayo Portfolio

A modern, performant portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

Visit the live site: [knnthdmyo.com](https://knnthdmyo.com)

## ✨ Features

- 🎨 Modern, responsive design with dark theme
- ⚡ Built with Next.js 15 for optimal performance
- 🗺️ Interactive world map showing collaboration locations
- 🎯 Custom animated cursor with trail effect
- 🔍 Command palette search (⌘K / Ctrl+K)
- 📱 Fully responsive mobile navigation
- 🌐 SEO optimized with meta tags and Open Graph
- 🎭 Matrix-style background animation
- 📊 Dynamic career timeline visualization

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.9
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** React 18
- **Icons:** Font Awesome
- **Maps:** react-simple-maps
- **Deployment:** Netlify

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/knnthdmyo/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🏗️ Build

```bash
# Create production build
npm run build

# Preview production build locally
npm run start
```

The static site will be generated in the `out/` directory.

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── models/              # TypeScript interfaces
│   ├── services/            # Data services
│   ├── viewmodels/          # Business logic hooks
│   └── views/
│       ├── components/      # Reusable components
│       └── pages/           # Page sections
├── public/                  # Static assets
│   └── images/             # Images
├── netlify.toml            # Netlify configuration
└── next.config.mjs         # Next.js configuration
```

## 🎨 Architecture

This project follows the **MVVM (Model-View-ViewModel)** pattern:

- **Models:** TypeScript interfaces defining data structures
- **Services:** Static data providers and business logic
- **ViewModels:** Custom React hooks managing state and data transformation
- **Views:** React components for UI rendering

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`
4. Deploy!

### Vercel

1. Import your GitHub repository
2. Framework preset: Next.js
3. Build command: `npm run build`
4. Output directory: `out`
5. Deploy!

### GitHub Pages

```bash
npm run deploy
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🎯 Key Components

### Custom Cursor
A custom animated cursor with smooth trail effect that enhances the user experience on desktop devices.

### World Map
Interactive map visualization showing global collaboration locations with hover tooltips.

### Command Palette
Quick navigation and search functionality accessible via keyboard shortcut (⌘K / Ctrl+K).

### Career Timeline
Dynamic roadmap visualization showing work experience with proportional spacing based on actual time periods.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
# Add any environment variables here
```

### Next.js Config

Configured for static export with the following settings:
- Output: `export`
- Images: `unoptimized: true`
- Trailing slash: `true`

## 📊 Performance

- **Bundle Size:** ~78.8 KB (main route)
- **Build Time:** ~2 seconds
- **Lighthouse Score:** Optimized for Core Web Vitals
- **SEO:** Comprehensive meta tags and structured data

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

© 2025 Kenneth Damayo. All rights reserved.

## 👨‍💻 Author

**Kenneth Damayo**
- Portfolio: [knnthdmyo.com](https://knnthdmyo.com)
- GitHub: [@knnthdmyo](https://github.com/knnthdmyo)
- LinkedIn: [Kenneth Damayo](https://www.linkedin.com/in/kennethgdemayo/)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
