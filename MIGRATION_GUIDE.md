# Next.js Migration Guide

## Migration Complete! 🎉

Your portfolio has been successfully migrated from React + Vite to Next.js 15 with App Router.

## What Changed

### File Structure
```
portfolio/
├── src/
│   ├── app/                    # NEW: Next.js App Router
│   │   ├── layout.tsx          # Root layout with metadata
│   │   └── page.tsx            # Main homepage
│   ├── views/
│   │   ├── components/         # All marked with 'use client'
│   │   └── pages/              # All marked with 'use client'
│   ├── contexts/               # Marked with 'use client'
│   ├── viewmodels/             # Remain server-compatible
│   ├── services/               # Remain server-compatible
│   ├── models/                 # Remain server-compatible
│   └── index.css               # Global styles
├── public/                     # NEW: Static assets (images)
│   └── images/
├── next.config.mjs             # NEW: Next.js configuration
├── tailwind.config.ts          # Updated for Next.js
└── tsconfig.json               # Updated for Next.js

REMOVED FILES:
├── index.html                  # No longer needed (Next.js handles this)
├── src/main.tsx                # Replaced by app/layout.tsx and app/page.tsx
├── src/App.tsx                 # Logic moved to app/page.tsx
├── vite.config.ts              # Replaced by next.config.mjs
└── tailwind.config.js          # Replaced by tailwind.config.ts
```

### Key Changes

1. **App Router Structure**
   - Root layout in `src/app/layout.tsx`
   - Homepage in `src/app/page.tsx`
   - All metadata configured in layout

2. **Client Components**
   - Added `'use client'` directive to all interactive components
   - Components with hooks, state, or browser APIs are client components

3. **Static Assets**
   - Moved from `src/assets/images/` to `public/images/`
   - Access via `/images/filename.png` paths

4. **TypeScript Configuration**
   - Updated for Next.js bundler mode resolution
   - Path aliases maintained (`@/*`)

5. **SEO & Metadata**
   - Comprehensive metadata in `layout.tsx`
   - Open Graph tags for social sharing
   - Twitter Card support
   - Automatic sitemap generation (Next.js feature)

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for Production
```bash
npm run build
```

### 4. Deploy to GitHub Pages
```bash
npm run deploy
```

## SEO Improvements

### Automatic Enhancements
- ✅ Server-side rendering (SSR) ready
- ✅ Static site generation (SSG) for optimal performance
- ✅ Automatic code splitting
- ✅ Optimized images (when using Next.js Image component)
- ✅ Meta tags for search engines
- ✅ Open Graph for social media previews
- ✅ Structured metadata API

### Metadata Location
All SEO metadata is in `src/app/layout.tsx`:
- Page titles
- Descriptions
- Keywords
- Open Graph tags
- Twitter Card data
- Icons/favicons

### Update Metadata
Edit `src/app/layout.tsx` to customize:
```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ... more metadata
};
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm start` - Start production server (not needed for static export)
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Configuration

### GitHub Pages Deployment
The site is configured for static export compatible with GitHub Pages:
- `output: 'export'` in next.config.mjs
- Base path configured for /portfolio
- Images unoptimized for static hosting

### Environment Variables
Create `.env.local` for local development:
```
# Add any environment variables here
```

## Performance Features

### Automatic Optimizations
- Code splitting per page/component
- Automatic prefetching of links
- Optimized font loading
- CSS optimization
- JavaScript minification

### Best Practices
1. Use dynamic imports for large components
2. Implement loading states
3. Use Next.js Image component for images (when not static export)
4. Monitor Core Web Vitals

## Troubleshooting

### Common Issues

**Build fails with "Can't resolve module"**
- Check path aliases in tsconfig.json
- Ensure imports use `@/` prefix

**Styles not loading**
- Verify Tailwind content paths in tailwind.config.ts
- Check that index.css is imported in layout.tsx

**Component not interactive**
- Add `'use client'` directive at top of file
- Check browser console for hydration errors

**GitHub Pages 404 on refresh**
- This is normal for static exports with routing
- Use hash router or consider alternative hosting (Vercel, Netlify)

## Migration Benefits

### SEO Improvements
- ⚡ Better search engine crawling
- 🚀 Faster initial page loads
- 📱 Better mobile performance
- 🔍 Rich preview cards on social media
- 📊 Better Core Web Vitals scores

### Developer Experience
- 🔥 Hot Module Replacement
- 📦 Automatic code splitting
- 🎯 TypeScript support out of the box
- 🛠️ Better error messages
- 📝 Built-in ESLint configuration

### Future Ready
- Can easily add API routes
- Server components ready
- Middleware support
- Advanced routing features

## Next Steps

1. Test all functionality
2. Run `npm run build` to verify build
3. Deploy to GitHub Pages
4. Monitor performance in Google Search Console
5. Consider creating an OG image (1200x630px) for better social previews

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Documentation](https://nextjs.org/docs/app)
- [Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

---

**Migration completed on:** $(date)
**Next.js Version:** 15.1.0
**React Version:** 18.3.1

