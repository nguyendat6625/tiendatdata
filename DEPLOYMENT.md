# 🚀 Deployment Guide

This guide covers deploying your Data Scientist Portfolio to various platforms.

## 📋 Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] Update all personal information in `src/data/portfolioData.js`
- [ ] Replace placeholder images with your actual images
- [ ] Test the website locally (`npm run dev`)
- [ ] Build the project successfully (`npm run build`)
- [ ] Update meta tags in `index.html` for SEO
- [ ] Configure EmailJS if using the contact form
- [ ] Update social media links

## 🌐 Deployment Options

### Option 1: Vercel (Recommended) ⚡

**Why Vercel?**
- Zero configuration
- Automatic HTTPS
- Global CDN
- Instant deployments
- Free for personal projects

**Steps:**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **For production deployment**
   ```bash
   vercel --prod
   ```

**Via Vercel Dashboard:**

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite
5. Click "Deploy"

**Build Settings:**
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

---

### Option 2: Netlify 🎯

**Why Netlify?**
- Easy drag-and-drop deployment
- Form handling built-in
- Continuous deployment from Git
- Free SSL certificates

**Steps:**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

**Via Netlify Dashboard:**

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

**netlify.toml Configuration:**

Create a `netlify.toml` file in your project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Option 3: Render 🔧

**Why Render?**
- Free static site hosting
- Automatic deployments from Git
- Custom domains
- DDoS protection

**Steps:**

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Create a new Static Site on Render**
   - Go to [render.com](https://render.com)
   - Click "New" → "Static Site"
   - Connect your GitHub repository

3. **Configure build settings**
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`

4. **Deploy**
   - Click "Create Static Site"
   - Render will automatically build and deploy

**render.yaml Configuration:**

Create a `render.yaml` file:

```yaml
services:
  - type: web
    name: data-scientist-portfolio
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: dist
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

---

### Option 4: GitHub Pages 📄

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/repository-name/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

---

### Option 5: Firebase Hosting 🔥

**Steps:**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Select your project or create a new one
   - Set public directory to `dist`
   - Configure as single-page app: Yes
   - Don't overwrite index.html

4. **Build and deploy**
   ```bash
   npm run build
   firebase deploy
   ```

---

## 🔧 Environment Variables

If you're using environment variables (e.g., for EmailJS):

### Vercel
```bash
vercel env add VITE_EMAILJS_SERVICE_ID
```

### Netlify
Go to Site settings → Build & deploy → Environment → Add variable

### Render
Go to Environment → Add Environment Variable

---

## 🌍 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain settings → Add custom domain
2. Follow DNS configuration instructions

### Render
1. Go to Settings → Custom Domains
2. Add your domain and configure DNS

---

## 📊 Performance Optimization

After deployment, optimize your site:

1. **Enable Compression** (usually automatic on most platforms)
2. **Configure Caching Headers**
3. **Use CDN** (included with Vercel, Netlify, Render)
4. **Optimize Images**:
   - Use WebP format
   - Compress images with tools like TinyPNG
   - Use appropriate image sizes

---

## 🔍 SEO Configuration

1. **Update meta tags** in `index.html`
2. **Add robots.txt**:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://yourdomain.com/sitemap.xml
   ```

3. **Create sitemap.xml** (optional)
4. **Submit to Google Search Console**

---

## 📈 Analytics (Optional)

### Google Analytics

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 Errors on Refresh

Make sure your hosting platform is configured for SPA routing (see platform-specific instructions above).

### Slow Loading

- Optimize images
- Enable lazy loading
- Check bundle size: `npm run build -- --analyze`

---

## 📞 Support

If you encounter issues:

1. Check the platform's documentation
2. Review build logs
3. Test locally first
4. Open an issue on GitHub

---

**Happy Deploying! 🎉**
