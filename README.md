# 🚀 Data Scientist Portfolio Website

A modern, professional portfolio website for Data Scientists built with React, Tailwind CSS, and Framer Motion. Features smooth animations, responsive design, and a clean, minimalist aesthetic.

![Portfolio Preview](./preview.png)

## ✨ Features

- **Modern Design**: Clean, professional dark mode interface with gradient accents
- **Smooth Animations**: Powered by Framer Motion for fluid transitions and interactions
- **Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **Easy to Customize**: Well-organized code structure and data-driven content

## 🎯 Sections

1. **Hero Section** - Eye-catching introduction with animated background
2. **About Me** - Professional background and expertise
3. **Skills** - Technical skills with animated progress bars
4. **Projects** - Portfolio showcase with filtering capabilities
5. **Experience** - Professional timeline with detailed descriptions
6. **Blog** - Latest articles and insights
7. **Contact** - Contact form and social links

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS (optional)

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/data-scientist-portfolio.git
   cd data-scientist-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Update Personal Information

Edit the file `src/data/portfolioData.js` to customize:

- Personal information (name, title, email, etc.)
- Skills and expertise
- Projects portfolio
- Work experience
- Blog posts
- Social media links

### Modify Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Add/Remove Sections

Edit `src/App.jsx` to add or remove sections as needed.

## 📝 Content Management

All content is centralized in `src/data/portfolioData.js`. Simply update the data objects to reflect your information:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  // ... more fields
};
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   npm run build
   vercel
   ```

3. **Follow the prompts** to complete deployment

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

### Deploy to Render

1. **Create a new Web Service** on [Render](https://render.com)

2. **Connect your GitHub repository**

3. **Configure build settings**:
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`

4. **Deploy** - Render will automatically build and deploy your site

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your hosting provider

## 📧 Email Configuration (Optional)

To enable the contact form:

1. **Sign up for EmailJS** at [emailjs.com](https://www.emailjs.com/)

2. **Get your credentials**:
   - Service ID
   - Template ID
   - Public Key

3. **Update Contact.jsx**:
   ```javascript
   // Uncomment and configure EmailJS in src/components/Contact.jsx
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     formData,
     'YOUR_PUBLIC_KEY'
   );
   ```

## 🎯 Performance Optimization

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: Use WebP format for images
- **Lazy Loading**: Implemented for components
- **Minification**: Enabled in production build

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)

## 📞 Support

If you have any questions or need help, feel free to:

- Open an issue on GitHub
- Contact me via email
- Connect on LinkedIn

---

**Made with ❤️ and React**

⭐ If you found this helpful, please give it a star!
