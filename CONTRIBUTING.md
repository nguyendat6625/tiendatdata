# Contributing to Data Scientist Portfolio

First off, thank you for considering contributing to this project! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Guidelines](#coding-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Standards

- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description**
- **Use case** for the enhancement
- **Mockups or examples** (if applicable)
- **Why this enhancement would be useful**

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:

- `good first issue` - Simple issues for beginners
- `help wanted` - Issues that need attention

## 🛠️ Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/data-scientist-portfolio.git
   cd data-scientist-portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Make your changes**
   - Write clean, readable code
   - Follow the coding guidelines
   - Test your changes

7. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

8. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

9. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template

## 📝 Coding Guidelines

### JavaScript/React

- Use **functional components** with hooks
- Follow **React best practices**
- Use **meaningful variable names**
- Keep components **small and focused**
- Add **comments** for complex logic

Example:
```javascript
// Good
const UserProfile = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div className="user-profile">
      {/* Component content */}
    </div>
  );
};

// Avoid
const UP = (p) => {
  const [l, sl] = useState(false);
  return <div>{/* content */}</div>;
};
```

### CSS/Tailwind

- Use **Tailwind utility classes** when possible
- Keep custom CSS **minimal**
- Follow **mobile-first** approach
- Use **semantic class names**

Example:
```jsx
// Good
<div className="flex items-center justify-between p-4 bg-dark-900 rounded-lg">

// Avoid inline styles
<div style={{ display: 'flex', padding: '16px' }}>
```

### File Organization

```
src/
├── components/       # React components
├── data/            # Static data and content
├── assets/          # Images, fonts, etc.
├── utils/           # Utility functions
└── hooks/           # Custom React hooks
```

### Component Structure

```javascript
// 1. Imports
import { useState } from 'react';
import { motion } from 'framer-motion';

// 2. Component
const MyComponent = ({ prop1, prop2 }) => {
  // 3. State and hooks
  const [state, setState] = useState(null);
  
  // 4. Functions
  const handleClick = () => {
    // Logic here
  };
  
  // 5. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

// 6. Export
export default MyComponent;
```

## 💬 Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(hero): add animated background gradient

fix(contact): resolve form submission error

docs(readme): update installation instructions

style(header): improve mobile navigation spacing

refactor(skills): extract progress bar to component

perf(images): optimize image loading with lazy loading
```

## 🔄 Pull Request Process

1. **Update documentation** if needed
2. **Test your changes** thoroughly
3. **Update CHANGELOG.md** with your changes
4. **Ensure all tests pass**
5. **Request review** from maintainers

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How has this been tested?

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
```

## 🧪 Testing

Before submitting:

1. **Test locally**
   ```bash
   npm run dev
   ```

2. **Build successfully**
   ```bash
   npm run build
   ```

3. **Check for errors**
   ```bash
   npm run lint
   ```

4. **Test on different devices**
   - Desktop
   - Tablet
   - Mobile

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev/)

## ❓ Questions?

Feel free to:
- Open an issue
- Start a discussion
- Reach out to maintainers

## 🙏 Thank You!

Your contributions make this project better for everyone. Thank you for taking the time to contribute! 

---

**Happy Coding! 💻**
