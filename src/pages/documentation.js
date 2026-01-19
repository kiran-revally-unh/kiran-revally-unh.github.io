import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Documentation() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <div className="docs-container">
          <div className="docs-hero">
            <h1 className="docs-title">Building My Portfolio</h1>
            <p className="docs-subtitle">A Technical Deep Dive</p>
          </div>

          <div className="docs-content">
            <section className="docs-section">
              <h2>About This Portfolio</h2>
              <p>
                I'm Kiran Revally, a Principal Software Engineer at Capgemini with over a decade of experience 
                architecting enterprise-scale solutions. I built this portfolio to showcase my work in cloud 
                architecture, full-stack development, and technical leadership.
              </p>
              <p>
                This document walks through how I designed and developed this entire site—the tech choices, design 
                decisions, problems I solved, and what I learned along the way.
              </p>
            </section>

            <section className="docs-section">
              <h2>Tech Stack - What I Used and Why</h2>
              
              <div className="tech-card">
                <h3>Gatsby 5.15.0</h3>
                <p>
                  I chose Gatsby for this project because it's the perfect tool for a portfolio site. Here's why:
                </p>
                <ul>
                  <li><strong>Static Site Generation:</strong> Pre-renders everything at build time. No server needed, crazy fast loading.</li>
                  <li><strong>React-based:</strong> I can use components, making code reusable and maintainable.</li>
                  <li><strong>Built-in optimizations:</strong> Image optimization, code splitting, prefetching—all automatic.</li>
                  <li><strong>File-based routing:</strong> Create a file in /src/pages/, get a route. Simple.</li>
                  <li><strong>Performance by default:</strong> Lighthouse scores in the 90s without even trying.</li>
                </ul>
              </div>

              <div className="tech-card">
                <h3>React 18.2.0</h3>
                <p>
                  Modern React with hooks for clean, functional components. No class components, no lifecycle complexity.
                </p>
              </div>

              <div className="tech-card">
                <h3>CSS3 with Custom Variables</h3>
                <p>
                  Vanilla CSS. No Tailwind, no CSS-in-JS, no preprocessors. Just clean, maintainable CSS with:
                </p>
                <ul>
                  <li>CSS variables for theming (<code>--accent-color</code>, <code>--text-color</code>)</li>
                  <li>Mobile-first responsive design</li>
                  <li>Flexbox and Grid for layouts</li>
                  <li>CSS animations and transforms for interactions</li>
                </ul>
              </div>

              <div className="tech-card">
                <h3>GitHub Pages</h3>
                <p>
                  Free, fast, and reliable hosting with:
                </p>
                <ul>
                  <li>Automatic HTTPS</li>
                  <li>Global CDN distribution</li>
                  <li>Simple deployment workflow</li>
                  <li>Custom domain support (when I need it)</li>
                </ul>
              </div>
            </section>

            <section className="docs-section">
              <h2>Design Decisions - Why Yellow?</h2>
              
              <div className="design-story">
                <h3>The Color Pivot</h3>
                <p>
                  <strong>Original Plan:</strong> I started with a standard blue theme (#0969da). Professional, safe, boring.
                </p>
                <p>
                  <strong>The Switch:</strong> Midway through development, I changed everything to yellow (#f59e0b).
                </p>
                <p>
                  <strong>Why yellow?</strong>
                </p>
                <ul>
                  <li><strong>Stands out:</strong> Most tech portfolios are blue or dark. Yellow is different.</li>
                  <li><strong>Energy:</strong> Conveys optimism, creativity, innovation.</li>
                  <li><strong>Brand identity:</strong> More memorable than generic corporate blue.</li>
                  <li><strong>Still professional:</strong> With proper contrast and subtle use, yellow works.</li>
                </ul>
                <p>
                  <strong>Implementation:</strong> I used CSS variables for the entire color system. Changing the theme 
                  meant updating one variable, then rebuilding. The hardest part? Making sure contrast ratios met 
                  WCAG accessibility standards.
                </p>
              </div>
            </section>

            <section className="docs-section">
              <h2>Building the Pages - What I Learned</h2>

              <div className="page-breakdown">
                <h3>Homepage</h3>
                <p>
                  The hero section was straightforward—profile photo, bio, social links. The tricky part was the layout:
                </p>
                <ul>
                  <li>Desktop: Two-column grid (hero + AWS certifications sidebar)</li>
                  <li>Tablet: Stacked layout</li>
                  <li>Mobile: Single column with touch-friendly buttons</li>
                </ul>
                <p>
                  <strong>Learning:</strong> Grid is perfect for this. <code>grid-template-columns: 2fr 1fr</code> on 
                  desktop, then <code>1fr</code> on mobile. Clean and semantic.
                </p>
              </div>

              <div className="page-breakdown">
                <h3>Projects Page</h3>
                <p>
                  Showcasing DutySpin and Coco with screenshots, tech stacks, and descriptions. The challenge was 
                  making screenshot carousels work smoothly on mobile.
                </p>
                <p>
                  <strong>Solution:</strong> Horizontal scroll with <code>overflow-x: auto</code> and 
                  <code>scroll-snap-type: x mandatory</code>. Native scrolling behavior, no JavaScript needed.
                </p>
              </div>

              <div className="page-breakdown">
                <h3>Publications Page</h3>
                <p>This went through two complete redesigns:</p>
                <p>
                  <strong>Version 1:</strong> Simple list with titles and links. Looked like a resume, not a showcase.
                </p>
                <p>
                  <strong>Version 2 (current):</strong> 3D flip cards with cover images.
                </p>
                <ul>
                  <li>Front: Cover image, title, topic tags</li>
                  <li>Back: Description, "Read on Medium" button</li>
                  <li>Responsive grid: 3 columns → 2 → 1</li>
                </ul>
                <p>
                  <strong>Technical challenge:</strong> CSS 3D transforms require precise setup. The parent needs 
                  <code>transform-style: preserve-3d</code>, children need <code>backface-visibility: hidden</code>, 
                  and the back face needs <code>transform: rotateY(180deg)</code>.
                </p>
              </div>

              <div className="page-breakdown">
                <h3>Certification Pages</h3>
                <p>
                  Detailed pages for each AWS certification explaining what I learned and how I've applied it. 
                  The goal was to show understanding, not just badge collecting.
                </p>
              </div>
            </section>

            <section className="docs-section">
              <h2>The Development Journey</h2>
              
              <div className="timeline">
                <div className="timeline-item">
                  <h4>Phase 1: Setup</h4>
                  <p>
                    Initialized Gatsby project, created folder structure, set up components and pages. Decision: 
                    Keep it simple—no complex abstractions.
                  </p>
                </div>

                <div className="timeline-item">
                  <h4>Phase 2: Homepage</h4>
                  <p>
                    Built hero section, AWS certifications widget, featured projects. Challenge: Making the profile 
                    photo look good (circular crop, border, subtle shadow).
                  </p>
                </div>

                <div className="timeline-item">
                  <h4>Phase 3: Projects & Publications</h4>
                  <p>
                    Projects page was straightforward. Publications took iteration—ended up with 3D flip cards for 
                    visual impact.
                  </p>
                </div>

                <div className="timeline-item">
                  <h4>Phase 4: Certification Pages</h4>
                  <p>
                    Created detailed pages explaining each certification and real-world application.
                  </p>
                </div>

                <div className="timeline-item">
                  <h4>Phase 5: The Color Overhaul</h4>
                  <p>
                    Switched from blue to yellow. Updated all CSS variables, buttons, gradients, hover states, links.
                  </p>
                </div>

                <div className="timeline-item">
                  <h4>Phase 6: Mobile Responsiveness</h4>
                  <p>
                    Mobile-first approach with breakpoints at 480px, 768px, 1024px. Tested on real devices, not just 
                    DevTools.
                  </p>
                </div>

                <div className="timeline-item">
                  <h4>Phase 7: Polish & Performance</h4>
                  <p>
                    Added animations, optimized images, ran Lighthouse audits. Result: 90+ scores across all metrics.
                  </p>
                </div>
              </div>
            </section>

            <section className="docs-section">
              <h2>Deployment Workflow</h2>
              
              <div className="code-block">
                <pre><code>{`npm run deploy
# Runs: gatsby build && gh-pages -d public`}</code></pre>
              </div>

              <p>This single command:</p>
              <ol>
                <li>Builds the production site (minified JS/CSS, optimized images, static HTML)</li>
                <li>Deploys to the gh-pages branch</li>
                <li>GitHub Pages serves it automatically</li>
              </ol>

              <p><strong>Gotcha I learned:</strong> After changing global styles, you MUST run <code>gatsby clean</code> 
              before building. Gatsby inlines critical CSS in the HTML, so old styles get baked into static files.</p>
            </section>

            <section className="docs-section">
              <h2>Performance Results</h2>
              
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-score">92</div>
                  <div className="metric-label">Performance</div>
                </div>
                <div className="metric-card">
                  <div className="metric-score">97</div>
                  <div className="metric-label">Accessibility</div>
                </div>
                <div className="metric-card">
                  <div className="metric-score">100</div>
                  <div className="metric-label">Best Practices</div>
                </div>
                <div className="metric-card">
                  <div className="metric-score">100</div>
                  <div className="metric-label">SEO</div>
                </div>
              </div>

              <h3>Load Times</h3>
              <ul>
                <li>Homepage: ~1.2s (first visit)</li>
                <li>Subsequent pages: &lt;500ms (prefetched)</li>
              </ul>

              <h3>Bundle Sizes</h3>
              <ul>
                <li>Total JavaScript: ~250KB (split across routes)</li>
                <li>CSS: ~15KB</li>
                <li>HTML: ~10KB per page</li>
              </ul>
            </section>

            <section className="docs-section">
              <h2>Problems I Solved</h2>

              <div className="problem-card">
                <h3>🔧 The Stubborn Blue Theme Cache</h3>
                <p>
                  <strong>Problem:</strong> After deploying yellow theme, homepage stayed blue.
                </p>
                <p>
                  <strong>Cause:</strong> GitHub Pages cached old static HTML with inline blue styles.
                </p>
                <p>
                  <strong>Fix:</strong> <code>gatsby clean</code>, fresh build, redeploy, hard refresh.
                </p>
              </div>

              <div className="problem-card">
                <h3>🎴 Publications Page Design</h3>
                <p>
                  <strong>Problem:</strong> List layout looked boring, not like published work.
                </p>
                <p>
                  <strong>Solution:</strong> 3D flip cards with cover images, responsive grid, smooth animations.
                </p>
              </div>

              <div className="problem-card">
                <h3>📱 Mobile Navigation Overflow</h3>
                <p>
                  <strong>Problem:</strong> Nav links breaking on small screens (&lt;375px).
                </p>
                <p>
                  <strong>Solution:</strong> Progressive font size reduction, flex-wrap, maintained 44px touch targets.
                </p>
              </div>
            </section>

            <section className="docs-section">
              <h2>What's Next</h2>
              
              <div className="future-plans">
                <div className="plan-category">
                  <h3>Short-Term</h3>
                  <ul>
                    <li>Blog section for technical articles</li>
                    <li>Dark mode toggle</li>
                    <li>Contact form with email integration</li>
                    <li>Analytics to track visitor insights</li>
                    <li>Enhanced SEO with meta descriptions and Open Graph images</li>
                  </ul>
                </div>

                <div className="plan-category">
                  <h3>Medium-Term</h3>
                  <ul>
                    <li>CMS integration (Contentful/Netlify CMS)</li>
                    <li>Project filtering by technology</li>
                    <li>Site-wide search functionality</li>
                    <li>Testimonials section</li>
                    <li>Interactive career timeline</li>
                  </ul>
                </div>

                <div className="plan-category">
                  <h3>Long-Term</h3>
                  <ul>
                    <li>Blog comments system</li>
                    <li>Newsletter subscription</li>
                    <li>Multilingual support (Spanish)</li>
                    <li>Interactive project demos</li>
                    <li>Video content and walkthroughs</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="docs-section final-thoughts">
              <h2>Final Thoughts</h2>
              <p className="highlight">
                Building this portfolio taught me that modern web development is about more than just code—it's about 
                design psychology (yellow matters!), user experience (mobile-first!), and attention to detail (those 
                hover effects add up).
              </p>
              <p>
                This portfolio represents me as an engineer: thoughtful, detail-oriented, focused on user experience, 
                and always iterating for improvement.
              </p>
            </section>

            <div className="docs-footer">
              <div className="docs-meta">
                <p><strong>Last Updated:</strong> January 2025</p>
                <p><strong>Author:</strong> Kiran Revally</p>
                <p>
                  <strong>Repository:</strong>{' '}
                  <a 
                    href="https://github.com/kiran-revally-unh/kiran-revally-unh.github.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    github.com/kiran-revally-unh
                  </a>
                </p>
                <p>
                  <strong>Live Site:</strong>{' '}
                  <a 
                    href="https://kiran-revally-unh.github.io/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    kiran-revally-unh.github.io
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
