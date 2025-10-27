# 📁 Project Structure

Complete overview of the portfolio website file structure and organization.

```
website_profile/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── vite.config.js            # Vite build configuration
│   ├── tailwind.config.js        # Tailwind CSS configuration
│   ├── postcss.config.js         # PostCSS configuration
│   ├── .eslintrc.cjs             # ESLint configuration
│   ├── .gitignore                # Git ignore rules
│   └── .env.example              # Environment variables template
│
├── 📚 Documentation
│   ├── README.md                 # Main project documentation
│   ├── QUICKSTART.md             # Quick start guide
│   ├── DEPLOYMENT.md             # Deployment instructions
│   ├── CUSTOMIZATION.md          # Customization guide
│   ├── CONTRIBUTING.md           # Contribution guidelines
│   ├── CHANGELOG.md              # Version history
│   ├── LICENSE                   # MIT License
│   └── PROJECT_STRUCTURE.md      # This file
│
├── 🌐 Public Assets
│   └── public/
│       ├── robots.txt            # SEO robots file
│       ├── vite.svg              # Vite logo
│       ├── avatar.jpg            # Profile photo (add your own)
│       ├── projects/             # Project images
│       │   ├── project1.jpg
│       │   └── project2.jpg
│       └── blog/                 # Blog post images
│           └── article1.jpg
│
├── 🎨 Source Code
│   └── src/
│       │
│       ├── 📱 Components
│       │   ├── Header.jsx        # Navigation header
│       │   ├── Hero.jsx          # Hero section
│       │   ├── About.jsx         # About section
│       │   ├── Skills.jsx        # Skills section
│       │   ├── Projects.jsx      # Projects gallery
│       │   ├── Experience.jsx    # Work experience timeline
│       │   ├── Blog.jsx          # Blog preview section
│       │   ├── Contact.jsx       # Contact form
│       │   └── Footer.jsx        # Footer
│       │
│       ├── 📊 Data
│       │   └── portfolioData.js  # All content data
│       │
│       ├── 🎯 Main Files
│       │   ├── App.jsx           # Main app component
│       │   ├── main.jsx          # React entry point
│       │   └── index.css         # Global styles
│       │
│       └── 🖼️ Assets (optional)
│           ├── images/
│           ├── icons/
│           └── fonts/
│
└── 🏗️ Build Output
    └── dist/                     # Production build (generated)
        ├── index.html
        ├── assets/
        └── ...
```

## 📋 File Descriptions

### Configuration Files

#### `package.json`
- Project metadata
- Dependencies list
- NPM scripts
- Build configuration

#### `vite.config.js`
- Vite bundler settings
- Development server config
- Build optimization
- Plugin configuration

#### `tailwind.config.js`
- Custom color palette
- Font families
- Custom animations
- Breakpoints
- Theme extensions

#### `postcss.config.js`
- PostCSS plugins
- Tailwind CSS integration
- Autoprefixer setup

#### `.eslintrc.cjs`
- Code linting rules
- React-specific rules
- Code quality standards

### Documentation Files

#### `README.md`
Main documentation covering:
- Project overview
- Features
- Installation
- Usage
- Deployment basics

#### `QUICKSTART.md`
Fast-track guide for:
- Quick installation
- Basic customization
- Running locally
- First deployment

#### `DEPLOYMENT.md`
Comprehensive deployment guide:
- Multiple platform options
- Step-by-step instructions
- Environment setup
- Custom domain configuration

#### `CUSTOMIZATION.md`
Detailed customization guide:
- Content updates
- Visual styling
- Layout modifications
- Advanced features

### Source Files

#### Components (`src/components/`)

**Header.jsx**
- Fixed navigation bar
- Smooth scroll links
- Mobile menu
- Scroll-based styling

**Hero.jsx**
- Animated introduction
- Social links
- Call-to-action buttons
- Animated background

**About.jsx**
- Professional summary
- Highlights grid
- Education
- Certifications

**Skills.jsx**
- Categorized skills
- Animated progress bars
- Technology tags
- Skill levels

**Projects.jsx**
- Project gallery
- Filter functionality
- Project cards
- GitHub/demo links

**Experience.jsx**
- Timeline layout
- Job descriptions
- Technology tags
- Download resume button

**Blog.jsx**
- Blog post previews
- Category badges
- Read time
- Publication dates

**Contact.jsx**
- Contact form
- EmailJS integration
- Social links
- Contact information

**Footer.jsx**
- Quick links
- Social media
- Copyright info
- Back to top button

#### Data (`src/data/`)

**portfolioData.js**
Centralized content including:
- Personal information
- Social links
- Skills list
- Projects portfolio
- Work experience
- Blog posts
- Education
- Certifications

### Styling

#### `src/index.css`
- Tailwind directives
- Custom animations
- Global styles
- Utility classes
- Scrollbar styling
- Selection colors

## 🎨 Component Architecture

```
App
├── Header (Fixed)
├── Main
│   ├── Hero
│   ├── About
│   ├── Skills
│   ├── Projects
│   ├── Experience
│   ├── Blog
│   └── Contact
└── Footer
```

## 📦 Dependencies

### Production
- **react**: UI library
- **react-dom**: React DOM renderer
- **framer-motion**: Animation library
- **lucide-react**: Icon library
- **emailjs-com**: Email service (optional)

### Development
- **vite**: Build tool
- **tailwindcss**: CSS framework
- **autoprefixer**: CSS vendor prefixes
- **postcss**: CSS processing
- **eslint**: Code linting

## 🔧 Build Process

1. **Development**: `npm run dev`
   - Starts Vite dev server
   - Hot module replacement
   - Fast refresh

2. **Production**: `npm run build`
   - Optimizes assets
   - Minifies code
   - Generates static files in `dist/`

3. **Preview**: `npm run preview`
   - Preview production build locally

## 📊 Data Flow

```
portfolioData.js
      ↓
  Components
      ↓
   Render
      ↓
  User sees content
```

## 🎯 Key Features by File

| Feature | Files Involved |
|---------|---------------|
| Navigation | Header.jsx, App.jsx |
| Animations | All components + Framer Motion |
| Styling | index.css, tailwind.config.js |
| Content | portfolioData.js |
| Forms | Contact.jsx, EmailJS |
| Responsive | All components + Tailwind |
| SEO | index.html, public/robots.txt |

## 🚀 Adding New Features

### New Section
1. Create component in `src/components/`
2. Add data to `portfolioData.js`
3. Import in `App.jsx`
4. Add navigation link in `Header.jsx`

### New Page
1. Install React Router
2. Create page component
3. Set up routing in `App.jsx`
4. Update navigation

### New Animation
1. Use Framer Motion in component
2. Define animation variants
3. Apply to elements

## 📝 Best Practices

- **Components**: One component per file
- **Data**: Centralized in `portfolioData.js`
- **Styling**: Tailwind utilities first, custom CSS minimal
- **Images**: Store in `public/` folder
- **Code**: Clean, commented, reusable

## 🔍 Finding Things

| Looking for... | Check... |
|---------------|----------|
| Content/Text | `src/data/portfolioData.js` |
| Colors | `tailwind.config.js` |
| Components | `src/components/` |
| Animations | Component files + Framer Motion |
| Global styles | `src/index.css` |
| Build config | `vite.config.js` |
| Dependencies | `package.json` |

---

**Need help navigating the project? Check the documentation files! 📚**
