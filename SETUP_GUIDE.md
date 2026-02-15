# Shantanu Sarkar's Portfolio - Setup Guide

## Project Overview

This is a modern, animated portfolio website built with HTML, CSS, JavaScript, and GSAP for smooth animations.

## What's Been Done

✅ **Customization Complete:**
- Updated page titles and branding (S ✦ S logo)
- Changed hero section from "Prashant Koirala" to "Shantanu Sarkar"
- Updated About section with new bio
- Changed footer information
- Updated contact page title and social links
- Updated package.json with your information

## Setup Instructions

### 1. Install Node.js
- Download from: https://nodejs.org/ (Choose LTS version)
- Install and verify installation with: `node --version` and `npm --version`

### 2. Navigate to Project Directory
```bash
cd "c:\Users\shant\OneDrive\Desktop\Shantanu Sarkar\my-portfolio"
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
This will start a local server (usually http://localhost:5173)

### 5. Build for Production
```bash
npm run build
```

## Customization Checklist

Before deploying, update these with your actual information:

### Personal Information
- [ ] Update email: Replace `your-email@example.com` in:
  - `index.html` (line 84)
  - `contact.html` (line 42)

### Resume Link
- [ ] Add your Google Drive resume link: Replace `YOUR_RESUME_ID` in `index.html` (line 108)
  - Get the file ID from your Google Drive share link

### Social Media Links
- [ ] GitHub: Update `https://github.com` → your GitHub profile
- [ ] LinkedIn: Update `https://linkedin.com` → your LinkedIn profile
- [ ] Twitter: Update `@yourTwitterHandle` → your Twitter handle

### Portfolio/Projects
The portfolio showcases featured projects. To customize:
1. Open `index.html` (lines 164-200)
2. Update project titles and images
3. Add your own project images to `/public/images/work-items/`

### Portfolio Images
You'll need to add/replace:
- `/public/images/hero/` - Hero section image
- `/public/images/services/` - Service cards images (service-1.jpg to service-4.jpg)
- `/public/images/services-header/` - Portrait image
- `/public/images/work-items/` - Project showcase images

## Technology Stack

- **Build Tool**: Vite (fast development & optimized builds)
- **Animation**: GSAP (GreenSock) with ScrollTrigger
- **Smooth Scrolling**: Lenis
- **Typography**: Custom fonts (Rader, Formula Narrow, Supply Mono)
- **Styling**: Custom CSS with modern color palette

## Project Structure
```
my-portfolio/
├── css/              # Stylesheets
│   ├── globals.css   # Global styles & color variables
│   ├── home.css      # Homepage styles
│   ├── about.css     # About section styles
│   ├── contact.css   # Contact page styles
│   ├── footer.css    # Footer styles
│   └── ...
├── js/               # JavaScript modules
│   ├── hero.js       # Hero animation
│   ├── featured-work.js  # Project showcase animation
│   ├── services.js   # Skills/services animation
│   ├── contact.js    # Contact form handling
│   └── ...
├── public/           # Static assets (images)
├── index.html        # Homepage
├── contact.html      # Contact page
├── package.json      # Dependencies
└── vite.config.js    # Vite configuration
```

## Color Palette
- **Background**: `#edf1e8` (light beige)
- **Accent 1**: `#ed6a5a` (coral)
- **Accent 2**: `#f4f1bb` (pale yellow)
- **Accent 3**: `#9bc1bc` (mint green)
- **Accent 4**: `#5d576b` (muted purple)

## Adding More Animations

The project already includes:
- Page transition animations
- Smooth scroll with Lenis
- Image reveal animations
- Service card hover effects
- Text animations with GSAP

To add more animations, modify the individual JS files:
- `hero.js` - Hero section animations
- `featured-work.js` - Project carousel effects
- `services.js` - Skill cards animations
- `about.js` - About section reveal effects

## Deployment

Once ready to deploy:

1. Build the project: `npm run build`
2. This creates a `dist/` folder with production files
3. Deploy `dist/` folder to:
   - Vercel (recommended - already configured)
   - Netlify
   - GitHub Pages
   - Your own server

### For Vercel Deployment:
- Push to GitHub
- Connect to Vercel (vercel.json already configured)
- Deploy with one click!

## Troubleshooting

**Port already in use?**
```bash
npm run host
```
This uses a different port.

**Images not showing?**
- Ensure images are in `/public/images/` directory
- Check file paths in HTML match your image files

**Animations not working?**
- Ensure GSAP is loaded properly
- Check browser console for errors
- Verify JavaScript files are loading

## Next Steps

1. Install Node.js if not already installed
2. Run `npm install`
3. Run `npm run dev`
4. Start customizing with your content!

## Resources

- GSAP Docs: https://gsap.com/
- Vite Docs: https://vitejs.dev/
- Lenis Docs: https://lenis.darkroom.engineering/

---

**Created**: February 2025
**Portfolio Owner**: Shantanu Sarkar
