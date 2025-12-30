# CSS Not Loading on Netlify - Troubleshooting Guide

## ✅ Changes Made

### 1. Updated `tailwind.config.ts`
Added comprehensive content paths:
```typescript
content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
],
```

### 2. Updated `netlify.toml`
Added proper headers and redirects:
```toml
[build]
  command = "npm run build"
  publish = "out"

[[headers]]
  for = "/_next/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  force = false
```

### 3. Created `public/_redirects`
For additional redirect support.

## 🔍 What to Check on Netlify

### 1. Clear Deploy Cache
In Netlify Dashboard:
- Go to Site Settings → Build & deploy
- Click "Clear cache and retry deploy"
- Trigger a new deployment

### 2. Check Build Log
Verify:
- ✅ `npm run build` completes successfully
- ✅ CSS file is generated in `out/_next/static/css/`
- ✅ No CSS-related errors

### 3. Check Network Tab
In browser DevTools (F12):
1. Open Network tab
2. Filter by "CSS"
3. Look for `ab9cb344dac5f5d0.css` (or similar hash)
4. Check:
   - Status Code (should be 200)
   - Content-Type (should be `text/css`)
   - If 404: Static files not being served correctly
   - If wrong Content-Type: MIME type issue

### 4. Check Response Headers
In Network tab, click on the CSS file:
- Should have `Content-Type: text/css`
- Should not have `X-Content-Type-Options: nosniff` with wrong type

## 🔧 If CSS Still Not Loading

### Option 1: Verify Build Output Locally
```bash
# Build the site
npm run build

# Check CSS file exists
ls -la out/_next/static/css/

# Check HTML references CSS correctly
grep "stylesheet" out/index.html

# Serve locally to test
npx serve out
# Open http://localhost:3000
```

### Option 2: Check Netlify Site Settings
1. Go to Site Settings → Build & deploy → Post processing
2. Ensure "Asset optimization" is OFF (or configure properly)
3. Ensure "Pretty URLs" is configured correctly

### Option 3: Add Custom Headers
Create `public/_headers`:
```
/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
  X-Content-Type-Options: nosniff

/images/*
  Cache-Control: public, max-age=31536000, immutable
```

Then rebuild:
```bash
npm run build
```

### Option 4: Check for Caching Issues
1. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Try incognito/private browsing
3. Clear browser cache
4. Check on different browser

### Option 5: Verify Tailwind is Working
Check if Tailwind utility classes are in the generated CSS:
```bash
# Check if Tailwind classes are compiled
grep "bg-gradient-to-br" out/_next/static/css/*.css
grep "text-gray" out/_next/static/css/*.css
```

If these don't appear, Tailwind isn't compiling. Ensure:
- `tailwind.config.ts` has correct content paths
- `src/app/globals.css` has Tailwind directives
- PostCSS is configured correctly

## 🚀 Deployment Steps

1. **Commit Changes**
   ```bash
   git add .
   git commit -m "Fix Netlify CSS loading issues"
   git push origin main
   ```

2. **Netlify Will Auto-Deploy**
   - Wait for build to complete
   - Clear browser cache
   - Test the site

3. **Manual Deploy (Alternative)**
   ```bash
   # Build
   npm run build
   
   # Deploy
   netlify deploy --prod --dir=out
   ```

## 📊 Expected Results

After deployment, you should see:
- ✅ CSS file loads with 200 status
- ✅ Tailwind styles applied
- ✅ Custom CSS (gradient-orb, code-rain, etc.) working
- ✅ Dark mode classes applied
- ✅ Responsive design working

## ❓ Still Having Issues?

### Check Console Errors
Look for:
- CORS errors
- MIME type errors
- 404 on CSS files
- Content Security Policy errors

### Debugging Commands
```bash
# Check what files are in the out directory
find out -type f -name "*.css"

# Check HTML references
grep -r "stylesheet" out/

# Check file sizes (CSS should be ~50KB+)
ls -lh out/_next/static/css/
```

### Contact Points
- Issue persists after all steps: Check Netlify community forums
- Provide build logs and network tab screenshots
- Share deployed URL for community debugging

---

**Last Updated:** $(date)
**Expected CSS File:** `out/_next/static/css/[hash].css`
**Current Hash:** Check `out/_next/static/css/` directory

