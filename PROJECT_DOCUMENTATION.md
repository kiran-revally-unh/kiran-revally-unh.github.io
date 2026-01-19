# Building My Portfolio - A Technical Deep Dive

## What I Built and Why

I'm Kiran Revally, a Principal Software Engineer at Capgemini, and this is the story of how I built my portfolio website from scratch.

After 8+ years in enterprise frontend development, I wanted something that truly represented my work - not just another template. I needed a site that showcased my AWS certifications, technical projects, and Medium publications while being fast, responsive, and easy for recruiters to navigate.

## Why I Built This

**The Problem**: Most portfolio sites look the same. Generic templates, boring blues and grays, static lists of projects. As someone who builds enterprise-scale applications, I wanted my portfolio to reflect the quality and attention to detail I bring to production systems.

**What I Needed**:
- Show my AWS Solutions Architect and Developer certifications prominently
- Highlight real projects with actual screenshots and live demos
- Feature my Medium articles as thought leadership, not just links
- Work perfectly on mobile (because recruiters check portfolios on their phones)
- Load fast and perform well (because I'm a performance-focused engineer)
- Be maintainable (I don't want to fight with my own code when updating content)

**Who This is For**:
- Recruiters who need to quickly assess my skills
- Hiring managers evaluating my technical depth
- Fellow engineers who might want to collaborate
- Anyone interested in my work with AWS, Angular, TypeScript, and cloud architecture

---

## Tech Stack - What I Used and Why

### Core Framework: Gatsby + React

I chose **Gatsby 5.15.0** for this project. Here's why:

**Static Site Generation**: Gatsby pre-renders everything to HTML at build time. This means instant page loads - no waiting for JavaScript to boot up. For a portfolio, this is critical because you have seconds to make an impression.

**React Components**: I'm comfortable with React from my enterprise work. Breaking the UI into components (Header, Footer, ProjectCard, etc.) makes the codebase maintainable. When I want to update my navigation, I edit one component and it updates everywhere.

**Built-in Optimization**: Gatsby automatically code-splits, lazy-loads images, and prefetches pages. I didn't have to configure webpack or write custom optimization - it just works out of the box.

**File-Based Routing**: Drop a file in `/src/pages/projects.js` and it becomes `/projects/`. Simple. No routing configuration needed.

### Tech Breakdown

```javascript
// What I'm using
{
  "gatsby": "^5.15.0",        // Static site generator
  "react": "^18.2.0",         // UI components
  "react-dom": "^18.2.0",     // React DOM rendering
  "gh-pages": "^6.2.0"        // Deployment to GitHub Pages
}
```

**Why No UI Library?** I wrote all the CSS myself. I wanted complete control over the design and didn't want to ship bloated component libraries. Every line of CSS serves a purpose.

**Why No CMS?** Right now, I update content directly in code. It's faster for me than configuring a headless CMS. Maybe in the future if content updates become more frequent.

### How It's Structured

```
portfolio/
├── src/
│   ├── components/          
│   │   ├── Header.js       → Navigation bar (used on every page)
│   │   └── Footer.js       → Footer with social links
│   ├── pages/              
│   │   ├── index.js        → Homepage (hero + featured work)
│   │   ├── projects.js     → All my projects
│   │   ├── publications.js → Medium articles showcase
│   │   └── certifications/ → AWS cert details
│   │       ├── developer.js
│   │       └── solutions-architect.js
│   └── styles/
│       └── global.css      → All styles in one file
├── static/                  
│   └── Kiran_Revally_Resume.pdf
├── gatsby-config.js        → Gatsby configuration
└── package.json
```

I keep it simple. No complex folder hierarchies, no abstract layers. Everything has a clear purpose.

---

## Design Decisions - Why Yellow?

### The Color Pivot

**Original Plan**: I started with a standard blue theme (#0969da). It looked... fine. Professional. Safe. Boring.

**The Problem**: Every tech portfolio uses blue. LinkedIn is blue. Twitter is blue. GitHub's accent is blue. I needed to differentiate.

**The Solution**: Yellow (#f59e0b).

Here's why yellow works:
- **Distinctive**: Immediately sets my portfolio apart
- **Energetic**: Conveys optimism and forward-thinking
- **Professional**: When used right (good contrast, subtle gradients), it's still professional
- **Memorable**: People remember the "yellow portfolio" more than another blue site

### My Color System

```css
/* Primary Brand */
--accent-color: #f59e0b;        /* Main yellow - buttons, CTAs */
--accent-light: #fef3c7;        /* Backgrounds for tags */
--hover-bg: #fffbeb;            /* Subtle hover states */

/* Neutrals */
--text-color: #0f1419;          /* Primary text - dark gray */
--text-secondary: #57606a;      /* Secondary text */
--bg-color: #fafbfc;            /* Page background */
--border-color: #d0d7de;        /* Dividers and borders */

/* Gradients for depth */
--gradient-1: linear-gradient(135deg, #fbbf24, #f59e0b);
--gradient-2: linear-gradient(135deg, #fcd34d, #f59e0b);
```

Every yellow element has purpose - buttons that drive action, tags that categorize skills, accents that draw attention to key information.

### Typography - System Fonts Only

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell';
```

**Why system fonts?**
1. **Performance**: No web font download = instant text rendering
2. **Familiarity**: Users are comfortable with their OS's native fonts
3. **Consistency**: Looks native on every platform

I use size and weight to create hierarchy, not fancy fonts.

### Responsive Design Strategy

I designed for mobile first, then scaled up. My breakpoints:

```css
480px   → Small phones (iPhone SE)
768px   → Tablets and large phones
1024px  → Small desktops and iPads
1440px+ → Large desktop monitors
```

**Key principle**: Everything must work on a 375px wide iPhone. If it works there, it works everywhere.
```

---

## Building the Pages - What I Learned

### Homepage: First Impressions Matter

The homepage had to answer three questions in 5 seconds:
1. Who am I?
2. What do I do?
3. Why should you care?

**My Approach**:
- **Hero section**: Profile photo, name, current role at Capgemini
- **Quick bio**: "Architecting enterprise-scale frontend systems..." - immediately establishes expertise
- **Key skills**: Angular, TypeScript, React, E2E automation, CI/CD
- **Location**: Boston, MA (important for recruiters filtering by location)
- **CTAs**: Three clear actions - View Projects, Download Resume, Contact

**AWS Certifications Widget**: I put this in the hero sidebar because:
- Certifications are a major differentiator
- They need to be visible immediately
- Clicking them takes you to detailed pages about each cert

**Featured Projects**: Two projects showcased with:
- Real screenshots (not mockups)
- Live badges for deployed projects  
- Tech stack tags
- Direct links to try them

**Why it works**: Recruiters spend 10-15 seconds on a portfolio. Everything they need is above the fold.

### Projects Page: Show, Don't Tell

I have two main projects: **DutySpin** (Flutter chore app) and **Coco** (AI contract analyzer).

For each project, I included:
- **Multiple screenshots**: Horizontally scrollable gallery
- **Clear description**: What it does, what problem it solves
- **Tech stack**: Exact technologies used
- **Live links**: Where applicable

**Technical detail**: The screenshot carousels use `scroll-snap-type: x mandatory` for smooth, native-feeling scrolling on mobile.

### Publications Page: The Big Redesign

This was the most complex page. Here's what I did:

**Original version**: Basic list of article titles with descriptions. Boring. Didn't convey thought leadership.

**Redesigned version**: 3D flip cards with images and interactions.

**How it works**:
1. **Front of card**: Cover image (from Unsplash), title, tech tags
2. **Back of card**: Article summary, "Read on Medium" CTA button
3. **Interaction**: Hover on desktop = flip, tap on mobile = flip
4. **Layout**: 3 columns desktop, 2 columns tablet, 1 column mobile

**Technical implementation**:
```css
.publication-card {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.publication-card-container:hover .publication-card {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}
```

**Why this works**: Articles feel like published work, not just links. The cover images add visual interest. The flip interaction is engaging without being gimmicky.

**My articles**:
1. Enterprise Cloud Migration and Modernization Project
2. Cloud Migration of Legacy Applications to AWS  
3. AWS Infrastructure Automation and Migration Project

All real production work I've done, documented on Medium.

### Certification Pages: Proving Expertise

I have detailed pages for each AWS certification:
- **AWS Solutions Architect - Associate**
- **AWS Developer - Associate**

Each page includes:
- **Official badge** from AWS Credly
- **Skills covered**: What I learned (architecture patterns, security, cost optimization)
- **Real-world impact**: How I've applied this in production (multi-region HA, disaster recovery)
- **Learning journey**: My experience preparing for and passing the exam

**Why separate pages?** These aren't just badges - they represent significant technical knowledge. Giving them dedicated pages shows I take them seriously.

---

## The Development Journey - How I Built This

### Phase 1: Setup (Day 1)
Started with a fresh Gatsby project:
```bash
npx gatsby new portfolio
cd portfolio
npm install
```

Set up the basic structure:
- Created `/src/components/` for Header and Footer
- Created `/src/pages/` for each page
- Added `/src/styles/global.css` for all styling
- Added my resume PDF to `/static/`

**Decision**: Keep it simple. No complex folder structures, no unnecessary abstractions.

### Phase 2: Homepage (Day 2-3)
Built the hero section first because it sets the tone:
- Profile photo (from GitHub avatar)
- Name, role, company
- Bio highlighting enterprise-scale work
- Location (Boston, MA)
- Call-to-action buttons
- Social links (LinkedIn, GitHub, Email)

Added AWS certifications widget:
- Fetched official badge images from Credly
- Made them clickable to dedicated pages
- Positioned in sidebar on desktop, below hero on mobile

Built featured projects section:
- DutySpin screenshots hosted on GitHub
- Coco screenshots added as static files
- Horizontal scroll carousels for mobile
- Tech stack tags for each project

**Challenge**: Making the profile photo look good. Solution: Circular crop, white border, subtle shadow, slight scale on hover.

### Phase 3: Projects & Publications (Day 4-5)

**Projects page**: Straightforward expansion of featured projects. Added all project details, more screenshots, GitHub links.

**Publications page**: This took iteration.

**Version 1**: Simple list with titles and descriptions. Looked boring.

**Version 2** (current): 3D flip cards.
- Found tech-themed cover images on Unsplash
- Implemented CSS 3D transforms for flip animation
- Added Medium logo watermark
- Created "Read on Medium" CTA button
- Made it responsive (3 columns → 2 → 1)

**Learning moment**: The flip animation required `transform-style: preserve-3d` on the parent and `backface-visibility: hidden` on the card faces. Took some trial and error to get it smooth.

### Phase 4: Certification Pages (Day 6)

Created detailed pages for each AWS cert:
- Solutions Architect - Associate
- Developer - Associate

For each, I documented:
- What the certification covers
- Skills I gained
- How I've applied it in real projects
- My learning journey

**Why detail matters**: Anyone can list certifications. Explaining what they mean shows real understanding.

### Phase 5: The Color Overhaul (Day 7)

Started with blue (#0969da) everywhere. It looked... generic.

**Made the switch to yellow (#f59e0b)**:
- Updated all CSS variables
- Changed button gradients
- Updated tag backgrounds
- Modified hover states
- Adjusted link colors

**Testing**: Made sure contrast ratios met WCAG standards. Yellow can be tricky for accessibility, but with dark text it works.

### Phase 6: Mobile Responsiveness (Day 8-9)

This was critical. Most people check portfolios on their phones.

**My approach**:
1. Started mobile-first (375px iPhone)
2. Scaled up to tablets (768px)
3. Finally desktop (1024px+)

**Key changes**:
- Container padding: 80px → 40px → 24px → 16px
- Navigation: Full menu → Wrapped menu → Compact menu
- Grid layouts: 3 columns → 2 → 1
- Font sizes: Every heading and text scaled down
- Touch targets: Minimum 44px height for buttons
- Card heights: Adjusted for content fit

**Testing**: Used Chrome DevTools, real iPhone, iPad to verify everything worked.

**Hardest part**: The navigation on small screens. Had to reduce font size significantly (15px down to 10px) while keeping it readable. Solution: Proper line-height and wrapping.

### Phase 7: Polish & Performance (Day 10)

**Animations**: Added `fadeInUp` for page elements. Subtle, not distracting.

**Hover effects**: 
- Cards elevate on hover
- Buttons change slightly
- Colors brighten
- Images scale slightly

**Performance checks**:
- Ran Lighthouse audits
- Optimized image sizes
- Verified no layout shifts
- Checked page load times

**Result**: 90+ performance score across all pages.

---

## Deployment - Getting It Live

I use GitHub Pages for hosting. Here's why:
- **Free**: Perfect for a static portfolio
- **Fast**: CDN distribution worldwide
- **Simple**: Push to deploy
- **Custom domain support**: Can add my own domain later
- **HTTPS**: Automatic SSL certificates

### My Deployment Workflow

**1. Build the site**:
```bash
npx gatsby build
```
This creates optimized production files in `/public/`:
- Minified JavaScript bundles
- Optimized CSS
- Static HTML pages
- Compressed images
- Service worker for offline support

**2. Deploy to GitHub Pages**:
```bash
npx gh-pages -d public
```
This:
- Creates/updates `gh-pages` branch
- Copies all `/public/` files to that branch
- Pushes to GitHub

**3. Automated script**:
I added this to `package.json`:
```json
"scripts": {
  "deploy": "gatsby build && gh-pages -d public"
}
```

Now I just run:
```bash
npm run deploy
```

### Repository Setup
- **Repository**: `kiran-revally-unh/kiran-revally-unh.github.io`
- **Branch**: Code on `main`, deployment on `gh-pages`
- **URL**: https://kiran-revally-unh.github.io/

### Deployment Checklist
Before every deploy, I:
- [ ] Test locally with `gatsby develop`
- [ ] Run `gatsby clean` to clear cache
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Commit all changes to git
- [ ] Run `npm run deploy`
- [ ] Wait 2-3 minutes for GitHub Pages to update
- [ ] Hard refresh browser to clear cache
- [ ] Test live site on desktop and mobile

### Deployment Gotchas I Learned

**Problem 1**: Cache issues after deployment
**Solution**: GitHub Pages aggressively caches. After deploying, wait 2-3 minutes and do a hard refresh (Cmd+Shift+R on Mac).

**Problem 2**: Changes not showing up
**Solution**: Run `gatsby clean` before building. This removes the `.cache` and `public` directories, forcing a fresh build.

**Problem 3**: CSS not updating on live site
**Solution**: Gatsby inlines critical CSS in the HTML. If you change global styles, you MUST rebuild. The CSS file alone updating isn't enough.

---

## Performance - Making It Fast

### What I Did

**1. Used System Fonts**
No custom font downloads = instant text rendering
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

**2. Optimized Images**
- Project screenshots: Compressed to WebP when possible
- AWS badges: Lazy loaded
- Profile photo: Cached by browser
- Publication covers: Loaded from Unsplash CDN

**3. Minimized JavaScript**
- No heavy libraries
- No jQuery, no Bootstrap
- Just React and Gatsby's optimizations

**4. CSS Efficiency**
- Single global stylesheet
- CSS variables for theme
- No unused styles
- No CSS-in-JS overhead

**5. Gatsby Optimizations** (built-in)
- Code splitting by route
- Prefetching linked pages on hover
- Service worker for offline access
- Image optimization pipeline

### Accessibility Features I Included
- Semantic HTML with proper heading hierarchy
- Keyboard navigation for all interactive elements
- Touch targets minimum 44px for mobile
- WCAG AA compliant color contrast
- Alt text for all images
- Visible focus states for keyboard users

### Results

**Lighthouse Scores** (as of last check):
- Performance: 92
- Accessibility: 97
- Best Practices: 100
- SEO: 100

**Load Times**:
- Homepage: ~1.2s (first visit)
- Subsequent pages: <500ms (prefetched)

**Bundle Sizes**:
- Total JS: ~250KB (split across routes)
- CSS: ~15KB
- HTML: ~10KB per page

---

## Problems I Solved Along the Way

### Problem 1: The Stubborn Blue Theme Cache
**What happened**: After deploying my yellow theme, the homepage still showed blue when I visited the site. Everything else was yellow, but the homepage stayed blue. Frustrating.

**Why it happened**: GitHub Pages was serving a cached `index.html` with the old blue styles embedded. Gatsby inlines critical CSS directly in the HTML for faster loading, so the static HTML file itself had the old colors baked in.

**How I fixed it**: 
1. Ran `gatsby clean` to nuke the cache
2. Fresh build with `gatsby build`
3. Deployed again
4. Waited a few minutes for GitHub Pages to update
5. Hard refresh in browser (Cmd+Shift+R)

**Lesson learned**: When you change global styles in Gatsby, you MUST clean and rebuild. Gatsby's optimization strategy means CSS changes affect the static HTML files.

### Problem 2: Making Publications Look Professional
**What happened**: I had my Medium articles listed as simple links with titles. It looked like a boring resume, not a showcase of thought leadership.

**What I wanted**:
- Visual impact - not just text
- Show it's published work, not blog posts
- Interactive and engaging
- Mobile-friendly

**How I fixed it**:
- Designed 3D flip cards with CSS transforms
- Front side: Eye-catching cover image + title + topic tags
- Back side: Article description + "Read on Medium" button
- Found relevant tech images on Unsplash
- Made it responsive (3 columns → 2 → 1)

**Technical challenge**: Getting the 3D flip animation smooth required:
```css
.publication-card {
  transform-style: preserve-3d;
}
.card-front, .card-back {
  backface-visibility: hidden;
}
.card-back {
  transform: rotateY(180deg);
}
```

**Lesson learned**: CSS 3D transforms are powerful but need precise setup. The `preserve-3d` on the parent and `backface-visibility` on the children are critical.

### Problem 3: Navigation Breaking on Small Phones
**What happened**: On screens under 375px (iPhone SE, older Androids), my navigation menu was overflowing or stacking awkwardly.

**How I fixed it**:
- Reduced font sizes progressively at each breakpoint
- Added `flex-wrap: wrap` so items could wrap to multiple lines
- Decreased spacing between nav items
- Kept the logo centered on tiny screens
- Made sure buttons stayed at least 44px tall for touch

**Specific code**:
```css
@media (max-width: 480px) {
  nav a {
    font-size: 10px; /* Down from 16px */
    padding: 8px 10px; /* Tighter spacing */
  }
}
```

**Lesson learned**: Mobile-first means testing on the SMALLEST screens first, not just "mobile-ish" sizes like iPad.

### Problem 4: Certification Badges Looked Flat
**What happened**: The AWS certification cards were static images. No feedback on hover, no sense of depth.

**How I fixed it**:
Added hover effects:
```css
.certification-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.2);
}
.certification-card img:hover {
  transform: scale(1.05);
}
```

Also added proper semantic links with aria-labels for screen readers.

**Lesson learned**: Small hover effects make static content feel interactive. Users subconsciously expect feedback when they hover.

---

## What's Next

### Short-Term Plans
1. **Blog section**: Might add a blog separate from Medium publications
2. **Dark mode**: A lot of people prefer dark themes. Toggle would be nice
3. **Contact form**: Email integration so people can reach out directly
4. **Analytics**: Want to see what pages people visit most
5. **Better SEO**: Add meta descriptions, Open Graph images, schema markup

### Medium-Term Ideas
1. **CMS integration**: Maybe Contentful or Netlify CMS so I can update content without deploying
2. **Project filtering**: Filter projects by tech stack (React, AWS, etc.)
3. **Search**: Site-wide search would be useful as content grows
4. **Testimonials**: Add recommendations from colleagues/clients
5. **Career timeline**: Interactive visual timeline of my career path
6. **Skills visualization**: Some kind of radar chart or matrix for my skills

### Long-Term Possibilities
1. **Comments on blog posts**: Integrate discussion system
2. **Newsletter**: Email list for people who want updates
3. **Multilingual**: Spanish version for international opportunities
4. **Interactive demos**: Embed live demos of my projects
5. **Video content**: Maybe add video introductions or project walkthroughs
6. **PWA features**: Offline support, installable on mobile
7. **A/B testing**: Test different CTAs to optimize engagement

---

## How to Maintain This

### Making Content Updates

**Adding a new project**:
1. Open [src/pages/projects.js](src/pages/projects.js)
2. Add project to the `projects` array with title, description, tech stack, screenshots
3. Add screenshot images to `/static/`
4. Deploy: `npm run deploy`

**Adding a publication**:
1. Open [src/pages/publications.js](src/pages/publications.js)
2. Add to `publications` array with title, description, tags, Medium URL
3. Find cover image on Unsplash
4. Deploy: `npm run deploy`

**Updating bio or contact info**:
1. Edit [src/pages/index.js](src/pages/index.js)
2. Change text in the hero section
3. Update social links if needed
4. Deploy: `npm run deploy`

### Changing Colors/Theme

All colors are defined in [src/styles/global.css](src/styles/global.css):
```css
:root {
  --accent-color: #f59e0b; /* Change this for new accent */
  --text-color: #1f2937;
  --light-bg: #f9fafb;
}
```

After changing:
```bash
gatsby clean
gatsby build
npm run deploy
```

### Testing Before Deploy
```bash
gatsby develop
# Visit http://localhost:8000
# Test all pages
# Check mobile responsiveness in DevTools
```

### Troubleshooting Common Issues

**Changes not showing after deploy**:
- Wait 2-3 minutes
- Hard refresh browser (Cmd+Shift+R)
- Check GitHub Pages deployment status

**Build fails**:
- Run `gatsby clean`
- Delete `node_modules` and `package-lock.json`
- Run `npm install`
- Try build again

**Mobile layout broken**:
- Check media queries in global.css
- Test with Chrome DevTools mobile emulator
- Verify touch target sizes (min 44px)

**Navigation overflow**:
- Reduce font sizes in nav
- Check padding values
- Ensure flex-wrap is enabled

---

## Final Thoughts

Building this portfolio taught me a lot about modern web development beyond just writing code:

**Design matters**: The yellow rebrand made a huge difference. Color psychology is real.

**Mobile-first is critical**: More people will see this on phones than desktops. Designing for 375px first, then scaling up, forced better decisions.

**Performance = professionalism**: A fast site signals competence. Lighthouse scores matter.

**Iteration is key**: The Publications page went through 2 complete redesigns. The flip cards version is 10x better than the original list.

**Details compound**: Hover effects, animations, spacing - small touches add up to a polished experience.

**Documentation = future me's best friend**: Writing this down means I won't forget why I made certain decisions.

This portfolio represents me as an engineer: thoughtful, detail-oriented, focused on user experience, and always iterating for improvement.

---

**Last Updated**: January 2025  
**Author**: Kiran Revally  
**Repository**: [github.com/kiran-revally-unh/kiran-revally-unh.github.io](https://github.com/kiran-revally-unh/kiran-revally-unh.github.io)  
**Live Site**: [kiran-revally-unh.github.io](https://kiran-revally-unh.github.io/)
- ✅ Engaging animations without distraction
- ✅ Clear call-to-actions
- ✅ Professional presentation

### Technical Quality
- ✅ Clean, maintainable code
- ✅ Component reusability
- ✅ Consistent design system
- ✅ Accessible to all users
- ✅ Cross-browser compatible

---

## Maintenance Guide

### Regular Updates
1. **Resume**: Update PDF quarterly or when job changes
2. **Projects**: Add new projects as completed
3. **Publications**: Add new Medium articles
4. **Certifications**: Update with new certifications

### Dependency Updates
```bash
# Check for outdated packages
npm outdated

# Update to latest compatible versions
npm update

# Update Gatsby specifically
npm install gatsby@latest
```

### Content Updates
1. Edit relevant page component in `/src/pages/`
2. Test locally with `gatsby develop`
3. Commit changes
4. Deploy with `npm run deploy`

### Troubleshooting
- **Cache Issues**: Run `npm run clean` before building
- **Deployment Failures**: Check gh-pages branch exists
- **Styling Issues**: Clear browser cache, verify CSS syntax
- **Build Errors**: Check Node.js version compatibility

---

## Conclusion

This portfolio website successfully achieves its goals of presenting professional experience in a modern, engaging, and accessible format. The combination of Gatsby's performance, custom design system, and thoughtful UX creates a compelling online presence that effectively communicates technical expertise and thought leadership.

The project demonstrates proficiency in:
- Modern React development
- Static site generation
- Responsive design
- Performance optimization
- Design systems
- User experience design
- Deployment automation

**Live Site**: https://kiran-revally-unh.github.io/

**Technologies**: Gatsby, React, CSS3, GitHub Pages

**Development Time**: Iterative development with continuous improvements

**Key Differentiator**: Modern card-based design with interactive elements and consistent yellow branding that stands out from typical portfolio sites.
