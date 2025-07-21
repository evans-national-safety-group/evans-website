# Evans National Safety Group - Marketing Website

> Professional marketing website showcasing the ECPORA platform ecosystem and Evans National Safety Group's enterprise child protection solutions.

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.6-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🌟 Overview

The Evans National Safety Group marketing website is a professional, enterprise-grade web presence designed to showcase the comprehensive ECPORA platform ecosystem. Built with modern web technologies and optimized for performance, SEO, and conversion, this website effectively communicates Evans NSG's position as the premier provider of child protection assessment solutions.

## 🚀 Key Features

### **Professional Marketing Design**
- Stunning hero sections with gradient backgrounds and compelling messaging
- Interactive platform ecosystem showcase
- Responsive design optimized for all devices
- Evans brand color integration throughout
- Professional animations and micro-interactions

### **ECPORA Ecosystem Showcase**
- **ECPORA Platform**: Core web-based assessment platform
- **ECPORA Mobile**: iPad-optimized mobile application
- **AI Integrations**: Advanced AI and third-party integrations
- Interactive tabs with detailed feature comparisons
- Technical specifications and status indicators

### **Enterprise Positioning**
- Government-grade compliance certifications (FedRAMP, SOC2, GDPR, HIPAA, ISO27001, NIST)
- Flexible pricing tiers (Professional, Enterprise, Government)
- Client testimonials and social proof
- Professional statistics and achievements
- Conversion-optimized calls-to-action

### **Technical Excellence**
- Next.js 14 with App Router for optimal performance
- Static site generation for fast loading
- SEO optimization with structured data
- Enterprise security headers
- Accessibility compliance (WCAG 2.1)

## 🛠 Technology Stack

### **Core Framework**
- **Next.js 14.2.5** - React framework with App Router
- **TypeScript 5.5.3** - Type-safe development
- **React 18.3.1** - Modern React with concurrent features

### **Styling & UI**
- **Tailwind CSS 3.4.6** - Utility-first CSS framework
- **Framer Motion 11.3.8** - Professional animations
- **Lucide React 0.263.1** - Modern icon library
- **Radix UI** - Accessible component primitives

### **Development Tools**
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - Cross-browser compatibility

### **Performance & SEO**
- **Static Site Generation** - Pre-rendered pages for speed
- **Image Optimization** - Next.js Image component
- **Bundle Analysis** - Webpack bundle analyzer
- **Sitemap Generation** - Automatic SEO optimization

## 📁 Project Structure

```
evans-website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global CSS styles
│   │   ├── layout.tsx           # Root layout component
│   │   ├── page.tsx             # Homepage component
│   │   └── favicon.ico          # Site favicon
│   ├── components/              # Reusable UI components
│   │   ├── ui/                  # Base UI components
│   │   ├── sections/            # Page sections
│   │   └── common/              # Common components
│   ├── lib/                     # Utility functions
│   ├── hooks/                   # Custom React hooks
│   ├── types/                   # TypeScript type definitions
│   ├── data/                    # Static data and content
│   └── assets/                  # Images and static assets
├── public/                      # Static files
│   ├── images/                  # Image assets
│   ├── icons/                   # Icon files
│   └── manifest.json            # PWA manifest
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── netlify.toml                 # Netlify deployment config
└── package.json                 # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0.0 or higher
- **npm** 8.0.0 or higher
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/evans-national-safety-group/evans-website.git
   cd evans-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run type-check   # Run TypeScript type checking
npm run lint         # Run ESLint code analysis
```

### Building
```bash
npm run build        # Build for production
npm run start        # Start production server
npm run export       # Export static site
```

### Analysis
```bash
npm run analyze      # Analyze bundle size
npm run clean        # Clean build artifacts
```

## 🌐 Deployment

### Netlify Deployment (Recommended)

1. **Connect repository to Netlify**
   - Sign in to [Netlify](https://netlify.com)
   - Connect your GitHub repository
   - Select `evans-website` repository

2. **Configure build settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Base directory**: (leave empty)

3. **Set environment variables**
   ```
   NODE_VERSION=18
   NPM_VERSION=8
   NEXT_TELEMETRY_DISABLED=1
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

4. **Deploy**
   - Netlify will automatically deploy on every push to `main`
   - Preview deployments created for pull requests

### Manual Deployment

```bash
# Build the application
npm run build

# The 'out' directory contains the static files
# Upload the contents to your hosting provider
```

## 🎨 Customization

### **Evans Brand Colors**
```css
:root {
  --evans-blue: #1e3a8a;    /* Primary brand color */
  --evans-slate: #64748b;   /* Secondary color */
  --evans-green: #059669;   /* Accent color */
  --evans-orange: #ea580c;  /* Warning/highlight */
  --evans-cream: #fef7ed;   /* Light background */
}
```

### **Typography**
- **Primary Font**: Inter (Google Fonts)
- **Display Font**: Inter (consistent branding)
- **Responsive scaling**: Tailwind CSS classes

### **Component Customization**
```tsx
// Example: Customizing button variants
<button className="btn-primary">    // Primary Evans blue
<button className="btn-secondary">  // Outlined variant
<button className="btn-success">    // Evans green
```

## 📊 Performance Optimization

### **Lighthouse Scores Target**
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### **Optimization Features**
- Static site generation for instant loading
- Image optimization with Next.js Image component
- CSS purging with Tailwind CSS
- Bundle splitting and code optimization
- Comprehensive caching strategy

## 🔧 Configuration

### **Environment Variables**
```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://evansnationalsafety.com
NEXT_PUBLIC_SITE_NAME="Evans National Safety Group"

# Analytics
NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID
NEXT_PUBLIC_HOTJAR_ID=HOTJAR_ID

# Form Handling
CONTACT_FORM_WEBHOOK_URL=your_webhook_url
DEMO_REQUEST_WEBHOOK_URL=your_demo_webhook_url

# Feature Flags
NEXT_PUBLIC_SHOW_DEMO_BANNER=true
NEXT_PUBLIC_ENABLE_CHAT_WIDGET=false
```

### **Content Management**
Website content is managed through:
- **Static data files** in `src/data/`
- **Component props** for dynamic sections
- **Environment variables** for configuration

## 📱 Responsive Design

### **Breakpoint Strategy**
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

### **Mobile-First Approach**
- All components designed mobile-first
- Progressive enhancement for larger screens
- Touch-friendly interactions
- Optimized loading for mobile networks

## ♿ Accessibility

### **WCAG 2.1 Compliance**
- AA level compliance minimum
- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader optimization

### **Testing**
```bash
# Accessibility testing
npm run a11y-test    # Automated accessibility testing
npm run lighthouse   # Performance and accessibility audit
```

## 🔍 SEO Optimization

### **Technical SEO**
- Structured data markup (Organization, SoftwareApplication)
- Comprehensive meta tags and Open Graph
- XML sitemap generation
- Robots.txt optimization
- Schema.org markup

### **Content SEO**
- Semantic HTML structure
- Optimized headings hierarchy
- Image alt text and descriptions
- Internal linking strategy
- Core Web Vitals optimization

## 🛡️ Security

### **Security Headers**
- Content Security Policy (CSP)
- X-Frame-Options: DENY
- X-XSS-Protection
- Strict Transport Security (HSTS)
- X-Content-Type-Options

### **Best Practices**
- No sensitive data in client-side code
- Secure form handling
- Input sanitization
- Regular dependency updates

## 🧪 Testing

### **Testing Strategy**
```bash
# Unit testing
npm run test         # Run Jest unit tests

# Integration testing
npm run test:e2e     # Run Playwright E2E tests

# Visual regression testing
npm run test:visual  # Compare visual changes
```

### **Quality Assurance**
- TypeScript for type safety
- ESLint for code quality
- Prettier for consistent formatting
- Husky for pre-commit hooks

## 🤝 Contributing

### **Development Workflow**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes following our coding standards
4. Run tests: `npm run test`
5. Commit your changes: `git commit -m 'feat: add new feature'`
6. Push to your branch: `git push origin feature/new-feature`
7. Submit a pull request

### **Coding Standards**
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write self-documenting code
- Include tests for new features
- Follow conventional commit messages

### **Code Review Process**
- All changes require pull request review
- Automated testing must pass
- Accessibility compliance verified
- Performance impact assessed

## 📈 Analytics & Monitoring

### **Analytics Integration**
- Google Analytics 4 for visitor tracking
- Hotjar for user behavior analysis
- Core Web Vitals monitoring
- Conversion tracking for demo requests

### **Error Monitoring**
- Sentry integration for error tracking
- Performance monitoring
- User session recording
- A/B testing capabilities

## 🚨 Troubleshooting

### **Common Issues**

**Build Failures**
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

**Styling Issues**
```bash
# Rebuild Tailwind CSS
npm run build:css
```

**TypeScript Errors**
```bash
# Run type checking
npm run type-check
```

### **Getting Help**
- Check the [issues page](https://github.com/evans-national-safety-group/evans-website/issues)
- Review the [documentation](https://evansnationalsafety.com/docs)
- Contact the development team

## 📄 License

This project is proprietary software owned by Evans National Safety Group. All rights reserved.

## 🔗 Related Projects

- **[ECPORA Platform](https://github.com/evans-national-safety-group/ecpora-platform)** - Core assessment platform
- **[ECPORA Mobile](https://github.com/evans-national-safety-group/ecpora-mobile)** - Mobile application
- **[ECPORA Integrations](https://github.com/evans-national-safety-group/ecpora-integrations)** - AI integrations

## 📞 Support

- **Website**: [evansnationalsafety.com](https://evansnationalsafety.com)
- **Email**: contact@evansnationalsafety.com
- **Support**: support@evansnationalsafety.com
- **Documentation**: [docs.evansnationalsafety.com](https://docs.evansnationalsafety.com)

---

**Built with ❤️ by the Evans National Safety Group development team**

*Empowering child protection professionals with cutting-edge technology solutions.*
