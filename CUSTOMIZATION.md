# 🎨 Customization Guide

This guide will help you customize the portfolio website to match your personal brand and preferences.

## 📝 Content Customization

### 1. Personal Information

Edit `src/data/portfolioData.js`:

```javascript
export const personalInfo = {
  name: "Your Full Name",
  title: "Your Professional Title",
  tagline: "Your Catchy Tagline",
  description: "Your professional description...",
  email: "your.email@example.com",
  location: "Your City, Country",
  avatar: "/path-to-your-avatar.jpg",
};
```

### 2. Social Links

Update your social media profiles:

```javascript
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "Github"
  },
  // Add more social links...
];
```

### 3. Skills

Organize your skills by category:

```javascript
export const skills = [
  {
    category: "Your Category Name",
    items: [
      { name: "Skill Name", level: 90 }, // level: 0-100
      // Add more skills...
    ]
  },
];
```

### 4. Projects

Showcase your best work:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Title",
    description: "Project description...",
    tags: ["Python", "ML", "TensorFlow"],
    image: "/projects/project-image.jpg",
    github: "https://github.com/username/repo",
    demo: "https://demo-url.com",
    featured: true // Set to true for featured projects
  },
];
```

### 5. Experience

Add your work history:

```javascript
export const experience = [
  {
    id: 1,
    title: "Job Title",
    company: "Company Name",
    location: "City, Country",
    period: "2022 - Present",
    description: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
    ],
    technologies: ["Tech1", "Tech2"]
  },
];
```

### 6. Blog Posts

Add your latest articles:

```javascript
export const blogPosts = [
  {
    id: 1,
    title: "Article Title",
    excerpt: "Brief description...",
    date: "2024-10-15",
    readTime: "8 min read",
    category: "Category Name",
    image: "/blog/article-image.jpg",
    slug: "article-url-slug"
  },
];
```

---

## 🎨 Visual Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#your-color',
        100: '#your-color',
        // ... up to 900
      },
    },
  },
}
```

**Color Palette Generators:**
- [Coolors.co](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)
- [Tailwind Color Generator](https://uicolors.app/create)

### Fonts

1. **Choose fonts** from [Google Fonts](https://fonts.google.com/)

2. **Update** `src/index.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
   ```

3. **Configure** in `tailwind.config.js`:
   ```javascript
   fontFamily: {
     sans: ['YourFont', 'system-ui', 'sans-serif'],
     display: ['YourDisplayFont', 'system-ui', 'sans-serif'],
   }
   ```

### Animations

Modify animation speeds in `tailwind.config.js`:

```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-in-out', // Change duration
  'float': 'float 3s ease-in-out infinite',
}
```

---

## 🖼️ Images

### Adding Images

1. **Place images** in the `public` folder:
   ```
   public/
   ├── avatar.jpg
   ├── projects/
   │   ├── project1.jpg
   │   └── project2.jpg
   └── blog/
       └── article1.jpg
   ```

2. **Reference** in your data:
   ```javascript
   image: "/projects/project1.jpg"
   ```

### Image Optimization

**Recommended tools:**
- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Convert to WebP
- [ImageOptim](https://imageoptim.com/) - Mac app for optimization

**Best practices:**
- Use WebP format for better compression
- Resize images to appropriate dimensions
- Compress before uploading
- Use lazy loading (already implemented)

---

## 🎯 Layout Customization

### Adding a New Section

1. **Create component** in `src/components/YourSection.jsx`:
   ```javascript
   import { motion } from 'framer-motion';
   
   const YourSection = () => {
     return (
       <section id="your-section" className="py-20 bg-dark-900">
         {/* Your content */}
       </section>
     );
   };
   
   export default YourSection;
   ```

2. **Import and add** to `src/App.jsx`:
   ```javascript
   import YourSection from './components/YourSection';
   
   function App() {
     return (
       <div>
         {/* ... other sections */}
         <YourSection />
       </div>
     );
   }
   ```

3. **Update navigation** in `src/components/Header.jsx`:
   ```javascript
   const navItems = [
     // ... existing items
     { name: 'Your Section', href: '#your-section' },
   ];
   ```

### Removing a Section

1. **Remove import** from `src/App.jsx`
2. **Remove component** from JSX
3. **Remove navigation link** from `src/components/Header.jsx`

---

## 📧 Contact Form Setup

### Using EmailJS

1. **Sign up** at [EmailJS](https://www.emailjs.com/)

2. **Create email service** and template

3. **Get credentials**:
   - Service ID
   - Template ID
   - Public Key

4. **Update** `src/components/Contact.jsx`:
   ```javascript
   import emailjs from '@emailjs/browser';
   
   // In handleSubmit function:
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     formData,
     'YOUR_PUBLIC_KEY'
   );
   ```

5. **Install EmailJS**:
   ```bash
   npm install @emailjs/browser
   ```

### Alternative: Form Services

- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [Web3Forms](https://web3forms.com/)

---

## 🔧 Advanced Customization

### Custom Animations

Add custom animations in `src/index.css`:

```css
@keyframes yourAnimation {
  0% { /* start state */ }
  100% { /* end state */ }
}
```

Then use in components:

```javascript
<motion.div
  animate={{ /* your animation */ }}
  transition={{ duration: 1 }}
>
```

### Dark/Light Mode Toggle

Add theme switching:

1. **Install** theme library:
   ```bash
   npm install next-themes
   ```

2. **Implement** theme provider and toggle button

### Custom Components

Create reusable components in `src/components/`:

```javascript
// Button.jsx
export const Button = ({ children, variant = 'primary', ...props }) => {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  );
};
```

---

## 📱 Responsive Design

### Breakpoints

Tailwind breakpoints used:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Testing Responsiveness

1. **Browser DevTools**: Use responsive mode
2. **Real Devices**: Test on actual phones/tablets
3. **Tools**: [Responsively App](https://responsively.app/)

---

## 🎭 SEO Customization

### Meta Tags

Update `index.html`:

```html
<meta name="description" content="Your custom description" />
<meta name="keywords" content="your, keywords, here" />
<meta property="og:title" content="Your Title" />
<meta property="og:image" content="/your-og-image.jpg" />
```

### Structured Data

Add JSON-LD for better SEO:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Data Scientist",
  "url": "https://yourwebsite.com"
}
</script>
```

---

## 🚀 Performance Tips

1. **Lazy load images**: Already implemented
2. **Code splitting**: Automatic with Vite
3. **Minimize dependencies**: Remove unused packages
4. **Optimize builds**: `npm run build`

---

## 💡 Tips

- **Keep it simple**: Don't overcomplicate the design
- **Test thoroughly**: Check all features before deploying
- **Get feedback**: Ask others to review your portfolio
- **Update regularly**: Keep content fresh and relevant
- **Mobile first**: Ensure great mobile experience

---

## 🆘 Need Help?

- Check the [README.md](./README.md)
- Review [DEPLOYMENT.md](./DEPLOYMENT.md)
- Open an issue on GitHub
- Consult component documentation

---

**Happy Customizing! 🎨**
