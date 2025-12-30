# Deployment Guide

Your Next.js portfolio can be deployed to multiple platforms. Choose the one that fits your needs.

---

## 🌐 Netlify (Recommended for Quick Deploy)

### Automatic Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Next.js migration complete"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Netlify will automatically detect `netlify.toml` settings

3. **Configuration (Already Set)**
   - Build command: `npm run build`
   - Publish directory: `out`
   - The `netlify.toml` file handles this automatically

4. **Environment Variables (Optional)**
   - Add any environment variables in Netlify dashboard under "Site settings" → "Environment variables"

5. **Custom Domain (Optional)**
   - Go to "Domain settings" → "Add custom domain"
   - Follow DNS configuration instructions

### Manual Deploy

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build your site
npm run build

# Deploy
netlify deploy --prod --dir=out
```

---

## 🚀 Vercel (Recommended for Next.js)

### Automatic Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Next.js migration complete"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js configuration
   - Click "Deploy"

3. **Configuration**
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `out` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Custom Domain**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Manual Deploy

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

---

## 📦 GitHub Pages

### Configuration Required

1. **Update `next.config.mjs`**
   
   Uncomment the basePath lines:
   ```javascript
   basePath: process.env.GITHUB_PAGES ? '/portfolio' : '',
   assetPrefix: process.env.GITHUB_PAGES ? '/portfolio' : '',
   ```

2. **Build and Deploy**
   ```bash
   # Set environment variable
   export GITHUB_PAGES=true
   
   # Build
   npm run build
   
   # Deploy
   npm run deploy
   ```

3. **GitHub Repository Settings**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / root
   - Save

4. **Access Your Site**
   - URL: `https://yourusername.github.io/portfolio`

### Note on GitHub Pages
- The site will be served from `/portfolio` subdirectory
- Uncomment the basePath and assetPrefix in `next.config.mjs`
- Set `GITHUB_PAGES=true` environment variable during build

---

## 🐳 Docker (Advanced)

### Dockerfile

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Build and Run

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:80 portfolio
```

---

## ⚙️ Environment Variables

Create `.env.local` for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

For production, set these in your hosting platform:
- **Netlify**: Site settings → Environment variables
- **Vercel**: Project Settings → Environment Variables
- **GitHub Pages**: Not supported (use build-time variables)

---

## 📊 Comparison

| Feature | Netlify | Vercel | GitHub Pages |
|---------|---------|--------|--------------|
| Setup Difficulty | ⭐⭐ | ⭐ | ⭐⭐⭐ |
| Build Time | Fast | Fastest | Medium |
| Custom Domain | ✅ Free | ✅ Free | ✅ |
| HTTPS | ✅ Auto | ✅ Auto | ✅ Auto |
| Redirects | ✅ | ✅ | ❌ |
| Environment Vars | ✅ | ✅ | ❌ |
| Analytics | ✅ Paid | ✅ Free | ❌ |
| Best For | Quick deploy | Next.js apps | Open source |

---

## 🔧 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next out node_modules
npm install
npm run build
```

### 404 on Refresh (Netlify)
- Ensure `netlify.toml` has the redirects configuration
- File is already configured in this project

### Images Not Loading
- Check image paths use `/images/` (not relative paths)
- Verify images exist in `public/images/` directory

### Styles Not Loading
- Verify `src/app/globals.css` is imported in `layout.tsx`
- Check Tailwind config content paths

### Environment Variables Not Working
- Prefix client-side vars with `NEXT_PUBLIC_`
- Rebuild after changing environment variables

---

## 🎯 Recommended Workflow

1. **Development**: `npm run dev`
2. **Test Build**: `npm run build`
3. **Push to GitHub**: Automatic deployment via Netlify/Vercel
4. **Monitor**: Check deployment logs in hosting dashboard

---

## 📚 Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

