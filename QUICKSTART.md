# ⚡ Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🚀 Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## 🎨 Step 2: Customize Your Content

Edit `src/data/portfolioData.js` and update:

1. **Personal Info** (lines 2-10)
   - Name, title, email, location

2. **Social Links** (lines 13-30)
   - GitHub, LinkedIn, Kaggle, Twitter URLs

3. **Skills** (lines 33-80)
   - Add/remove skills and adjust proficiency levels

4. **Projects** (lines 83-150)
   - Showcase your best work

5. **Experience** (lines 153-200)
   - Add your work history

6. **Blog Posts** (lines 203-240)
   - Add your articles

## 🖼️ Step 3: Add Your Images (Optional)

Place images in the `public` folder:

```
public/
├── avatar.jpg          # Your profile photo
├── projects/
│   ├── project1.jpg
│   └── project2.jpg
└── blog/
    └── article1.jpg
```

Update image paths in `portfolioData.js`:
```javascript
image: "/projects/project1.jpg"
```

## 🎯 Step 4: Run Development Server

```bash
npm run dev
```

Open your browser and go to: `http://localhost:3000`

## ✅ Step 5: Preview Your Site

Your portfolio should now be running! Check:

- ✅ All sections load correctly
- ✅ Navigation works smoothly
- ✅ Animations are smooth
- ✅ Content displays properly
- ✅ Responsive on mobile (use browser DevTools)

## 🚢 Step 6: Deploy

When ready to deploy:

### Option A: Vercel (Easiest)

```bash
npm install -g vercel
vercel
```

### Option B: Netlify

```bash
npm run build
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Option C: Render

1. Push to GitHub
2. Connect repository on [Render](https://render.com)
3. Deploy automatically

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 🎨 Customization

Want to change colors, fonts, or layout?

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed guide.

## 📧 Enable Contact Form (Optional)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your credentials
3. Update `src/components/Contact.jsx`

See instructions in the Contact component file.

## 🐛 Troubleshooting

### Port already in use?
```bash
npm run dev -- --port 3001
```

### Build errors?
```bash
rm -rf node_modules package-lock.json
npm install
```

### CSS not loading?
Make sure Tailwind is properly configured in `tailwind.config.js`

## 📚 Next Steps

1. ✅ Customize content
2. ✅ Add your images
3. ✅ Test on different devices
4. ✅ Deploy to production
5. ✅ Share with the world!

## 🆘 Need Help?

- 📖 Read [README.md](./README.md)
- 🚀 Check [DEPLOYMENT.md](./DEPLOYMENT.md)
- 🎨 Review [CUSTOMIZATION.md](./CUSTOMIZATION.md)
- 💬 Open an issue on GitHub

---

**You're all set! 🎉**

Build something amazing! 💪
