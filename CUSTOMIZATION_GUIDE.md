# Portfolio Customization & Enhancement Guide

## Quick Start

1. **Install Node.js** from https://nodejs.org/
2. **Navigate to project folder:**
   ```bash
   cd "c:\Users\shant\OneDrive\Desktop\Shantanu Sarkar\my-portfolio"
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start development server:**
   ```bash
   npm run dev
   ```
5. **Build for production:**
   ```bash
   npm run build
   ```

---

## New Animation Features

### CSS Animations (`css/enhanced-animations.css`)

This file includes 20+ pre-made animations ready to use:

#### 1. **Floating Elements**
```html
<div class="floating-element">Content</div>
```

#### 2. **Slide Animations**
```html
<div class="animate-slide-left">Text slides in from left</div>
<div class="animate-slide-right">Text slides in from right</div>
<div class="animate-slide-up">Text slides in from bottom</div>
```

#### 3. **Scroll Reveal**
```html
<section class="scroll-reveal">
  <p>Reveals on scroll with delay</p>
</section>
```

#### 4. **Gradient Animation**
```html
<button class="gradient-animated">Animated Gradient Button</button>
```

#### 5. **Neon Glow Effect**
```html
<h1 class="neon-text">Glowing Text</h1>
```

#### 6. **Stagger Animation**
```html
<ul>
  <li class="stagger-animation">Item 1</li>
  <li class="stagger-animation">Item 2</li>
  <li class="stagger-animation">Item 3</li>
</ul>
```

---

## JavaScript Enhancements (`js/enhanced-animations.js`)

Add to your `index.html` before closing `</body>` tag:

```html
<script type="module" src="/js/enhanced-animations.js"></script>
```

### Available Functions

#### 1. **Scroll Reveal**
Automatically reveals `.scroll-reveal` elements with animation on scroll.

```html
<div class="scroll-reveal">Content appears on scroll</div>
```

#### 2. **Magnetic Cursor**
Links and buttons subtly follow your cursor hover.

#### 3. **Cursor Glow**
Custom glowing cursor effect automatically added.

#### 4. **Smooth Scroll Fade**
```html
<section data-scroll-fade>Fades in on scroll</section>
```

#### 5. **Counter Animation**
```html
<span data-counter="100">0</span> <!-- Counts from 0 to 100 -->
```

#### 6. **Typed Text**
```html
<h1 data-typed data-typed-speed="80">This text types out...</h1>
```

#### 7. **Parallax Scroll**
```html
<img src="image.jpg" data-parallax="0.5" alt="">
```

---

## How to Add These Animations to Your Portfolio

### Step 1: Link the Enhanced CSS
In your `index.html`, add after other stylesheets:
```html
<link rel="stylesheet" href="/css/enhanced-animations.css" />
```

### Step 2: Import Enhanced JavaScript
In your `index.html`, add before closing `</body>`:
```html
<script type="module" src="/js/enhanced-animations.js"></script>
```

### Step 3: Use Animations in Your Content

**Example: Animated Hero Section**
```html
<section class="hero">
  <h1 class="neon-text animate-fade-scale">Shantanu Sarkar</h1>
  <p class="animate-slide-up">Full-Stack Developer & Designer</p>
</section>
```

**Example: Animated Service Cards**
```html
<div class="service-card scroll-reveal">
  <h3>Frontend Development</h3>
  <p data-scroll-fade>Build beautiful interfaces</p>
</div>
```

**Example: Projects with Parallax**
```html
<img src="/images/project.jpg" data-parallax="0.3" alt="Project">
```

---

## Customization Tips

### 1. **Change Color Scheme**
Edit `css/globals.css`:
```css
:root {
  --bg: #edf1e8;
  --bg2: #d7dbd2;
  --fg: #141414;
  --accent1: #ed6a5a;      /* Change this */
  --accent2: #f4f1bb;      /* Change this */
  --accent3: #9bc1bc;      /* Change this */
  --accent4: #5d576b;      /* Change this */
}
```

### 2. **Adjust Animation Speed**
In `enhanced-animations.css`, look for animation durations:
```css
animation: slideInUp 0.6s ease-out;  /* Change 0.6s to your preferred speed */
```

### 3. **Mobile Responsive**
The enhanced animations automatically scale on mobile. Adjust in the media query:
```css
@media (max-width: 768px) {
  .service-card:hover {
    transform: translateY(-8px) scale(1.01);  /* Less dramatic on mobile */
  }
}
```

### 4. **Dark Mode**
The animations support dark mode automatically. Add your custom dark mode colors:
```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1a1a1a;
    --fg: #ffffff;
    /* ... other colors */
  }
}
```

---

## Replace Placeholder Content

### Update Your Information

**Email Address:**
- Find: `your-email@example.com`
- Replace in: `index.html` (line 84) and `contact.html` (line 42)

**Resume Link:**
- Find: `YOUR_RESUME_ID`
- Replace in: `index.html` (line 108)
- Get ID from Google Drive share link

**Social Media:**
- Update GitHub: Search for `https://github.com`
- Update LinkedIn: Search for `https://linkedin.com`
- Update Twitter: Search for `@yourTwitterHandle`

### Add Your Images

1. **Hero Image**: `/public/images/hero/image-1.jpg`
2. **Portrait**: `/public/images/services-header/portrait.jpeg`
3. **Service Images**: `/public/images/services/service-1.jpg` (etc.)
4. **Project Images**: `/public/images/work-items/work-item-1.jpg` (etc.)

---

## Project Structure

```
my-portfolio/
├── css/
│   ├── enhanced-animations.css    ⭐ NEW - Animation styles
│   ├── globals.css                 - Global styles & colors
│   ├── home.css
│   ├── about.css
│   ├── contact.css
│   └── ...
├── js/
│   ├── enhanced-animations.js      ⭐ NEW - Animation utilities
│   ├── hero.js
│   ├── featured-work.js
│   ├── services.js
│   └── ...
├── public/images/                  - Your images here
├── index.html                       - Homepage
├── contact.html                     - Contact page
├── SETUP_GUIDE.md                  - Setup instructions
├── CUSTOMIZATION_GUIDE.md          - This file
└── package.json
```

---

## Animation Classes Quick Reference

| Class | Effect |
|-------|--------|
| `.animate-slide-left` | Slides in from left |
| `.animate-slide-right` | Slides in from right |
| `.animate-slide-up` | Slides in from bottom |
| `.animate-fade-scale` | Fades in while scaling |
| `.scroll-reveal` | Reveals on scroll |
| `.stagger-animation` | Staggered reveal with delay |
| `.floating-element` | Continuous floating motion |
| `.gradient-animated` | Animated color gradient |
| `.neon-text` | Glowing neon effect |
| `.pulse` | Pulsing animation |
| `.blur-entrance` | Blur animation on enter |

---

## Data Attributes Quick Reference

| Attribute | Usage | Example |
|-----------|-------|---------|
| `data-scroll-fade` | Fade on scroll | `<div data-scroll-fade>` |
| `data-counter` | Count animation | `<span data-counter="100">0</span>` |
| `data-typed` | Typing effect | `<h1 data-typed data-typed-speed="80">` |
| `data-parallax` | Parallax scroll | `<img data-parallax="0.5">` |

---

## Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ⚠️ IE11 (Limited support)

---

## Performance Tips

1. **Reduce animation count** on mobile for better performance
2. **Use `will-change` CSS** for heavily animated elements:
   ```css
   .animated-element {
     will-change: transform, opacity;
   }
   ```
3. **Lazy load images** using native `loading="lazy"`
4. **Test on real devices** to ensure smooth animations

---

## Troubleshooting

### Animations not working?
1. Check if `enhanced-animations.css` is linked in HTML
2. Check if `enhanced-animations.js` is loaded
3. Open browser DevTools (F12) and check Console for errors

### Images not showing?
1. Ensure images are in `/public/images/` folder
2. Check file paths match exactly (case-sensitive)
3. Use relative paths like `/images/...`

### Too slow on mobile?
- Reduce animation durations in CSS (change `0.6s` to `0.3s`)
- Disable heavy animations on small screens

---

## Deploy Your Portfolio

### Using Vercel (Recommended)
```bash
npm run build
# Push to GitHub
# Connect to Vercel at https://vercel.com
# Deploy with one click
```

### Using Netlify
```bash
npm run build
# Drag & drop 'dist' folder to Netlify
```

### Using GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select main branch and /dist folder

---

## Resources

- [GSAP Documentation](https://gsap.com/)
- [CSS Animation Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Web Animations Best Practices](https://web.dev/animations/)

---

**Created**: February 2025
**Portfolio Owner**: Shantanu Sarkar
