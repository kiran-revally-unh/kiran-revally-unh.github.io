import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function IndexPage() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="hero">
          <div className="profile-section">
            <img
              src="https://avatars.githubusercontent.com/u/147097894?v=4"
              alt="Kiran Revally"
              className="profile-image"
            />
            <div className="profile-info">
              <h1>KIRAN REVALLY</h1>
              <div className="title">
                🏢 Principal Software Engineer @ Capgemini
              </div>
              <div className="bio">
                <div className="bio-highlight">
                  Architecting enterprise-scale frontend systems for high-traffic, mission-critical applications
                </div>
                <div className="bio-details">
                  <span className="bio-item">🎯 8+ years in production environments</span>
                  <span className="bio-item">⚡ React • TypeScript specialist</span>
                  <span className="bio-item">🚀 E2E automation & CI/CD expert</span>
                </div>
              </div>
              <div className="location">
                📍 Boston, MA • (from India)
              </div>

              <div className="badges">
                <span className="badge">Enterprise Frontend</span>
                <span className="badge">React • TypeScript</span>
                <span className="badge">UI Systems</span>
                <span className="badge">Automation</span>
              </div>

              <div className="cta-row">
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                </Link>
                <a
                  href="/Kiran_Revally_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn resume-btn"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Resume
                </a>
                <a
                  href="mailto:revellykirankittu@gmail.com"
                  className="btn"
                >
                  Contact
                </a>
              </div>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/revally-kiran/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/kiran-revally-unh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="mailto:revellykirankittu@gmail.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="certifications">
            <div className="cert-label">Certifications</div>
            <div className="cert-badges">
              <Link
                to="/certifications/solutions-architect"
                className="cert-badge"
                title="AWS Certified Solutions Architect – Associate"
              >
                <img
                  src="https://images.credly.com/size/110x110/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
                  alt="AWS Solutions Architect Associate"
                  className="cert-image"
                />
                <div className="cert-info">
                  <div className="cert-name">Solutions Architect</div>
                  <div className="cert-level">Associate</div>
                </div>
              </Link>
              <Link
                to="/certifications/developer"
                className="cert-badge"
                title="AWS Certified Developer – Associate"
              >
                <img
                  src="https://images.credly.com/size/110x110/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png"
                  alt="AWS Developer Associate"
                  className="cert-image"
                />
                <div className="cert-info">
                  <div className="cert-name">Developer</div>
                  <div className="cert-level">Associate</div>
                </div>
              </Link>
            </div>
            
            {/* LinkedIn Profile Badge */}
            <div className="linkedin-badge-container">
              <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="revally-kiran" data-version="v1">
                <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/revally-kiran?trk=profile-badge"></a>
              </div>
            </div>
          </div>

          {/* Featured Projects Section */}
          <div className="featured-projects-section">
            <h2 className="featured-title">Featured Projects</h2>
            <div className="featured-projects-grid">
              {/* DutySpin Project */}
              <article 
                className="featured-project-card"
                onClick={() => window.open('https://dutyspin.web.app/', '_blank')}
                style={{ cursor: 'pointer' }}
              >
                <div className="featured-project-screenshots">
                  <img
                    src="https://github.com/user-attachments/assets/dd16144a-9bc4-443a-bbce-e72446e51134"
                    alt="DutySpin screenshot 1"
                    className="featured-project-screenshot"
                    loading="lazy"
                  />
                  <img
                    src="https://github.com/user-attachments/assets/bea67d0d-8fce-4523-85f1-eceeb4394292"
                    alt="DutySpin screenshot 2"
                    className="featured-project-screenshot"
                    loading="lazy"
                  />
                  <img
                    src="https://github.com/user-attachments/assets/ec911ae8-e9d7-4e4f-ab6f-20edaf81a90e"
                    alt="DutySpin screenshot 3"
                    className="featured-project-screenshot"
                    loading="lazy"
                  />
                </div>
                <div className="featured-project-content">
                  <div className="featured-project-header">
                    <h3>🏠 DutySpin</h3>
                    <span className="featured-project-badge">Live</span>
                  </div>
                  <p className="featured-project-description">
                    DutySpin is a minimal, turn-based chore management app designed to bring fairness and clarity to shared living. It rotates responsibility automatically, showing each user only what they're responsible for—without reminders, gamification, or noise. Built with a calm UX philosophy and focused on simplicity over productivity pressure.
                  </p>
                  <div className="featured-project-tags">
                    <span className="tag">Dart</span>
                    <span className="tag">Flutter</span>
                    <span className="tag">Mobile</span>
                    <span className="tag">Firebase</span>
                  </div>
                </div>
              </article>

              {/* Coco (Contract Companion) Project */}
              <article 
                className="featured-project-card"
                onClick={() => window.open('https://main.d2f04gah5juytg.amplifyapp.com', '_blank')}
                style={{ cursor: 'pointer' }}
              >
                <div className="featured-project-screenshots">
                  <img
                    src="/showcase1.png"
                    alt="Coco Contract Companion screenshot 1"
                    className="featured-project-screenshot"
                    loading="lazy"
                  />
                  <img
                    src="/showcase2.png"
                    alt="Coco Contract Companion screenshot 2"
                    className="featured-project-screenshot"
                    loading="lazy"
                  />
                  <img
                    src="/showcase3.png"
                    alt="Coco Contract Companion screenshot 3"
                    className="featured-project-screenshot"
                    loading="lazy"
                  />
                </div>
                <div className="featured-project-content">
                  <div className="featured-project-header">
                    <h3>🤖 Coco (Contract Companion)</h3>
                    <span className="featured-project-badge">Live</span>
                  </div>
                  <p className="featured-project-description">
                    Coco is an AI-powered contract risk analysis tool that uses a large language model (GPT-4o) to transform unstructured contract text into structured, explainable risk insights. It identifies risky clauses, explains them in plain English, applies confidence scoring and schema validation, and exposes observability metrics like tokens, latency, and cost—demonstrating production-grade LLM integration.
                  </p>
                  <div className="featured-project-tags">
                    <span className="tag">TypeScript</span>
                    <span className="tag">AI</span>
                    <span className="tag">LLM</span>
                    <span className="tag">GPT-4o</span>
                  </div>
                </div>
              </article>
            </div>
            <Link to="/projects" className="view-all-projects-btn">
              View All Projects →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export function Head() {
  return (
    <>
      <title>Kiran Revally - Principal Software Engineer</title>
      <meta name="description" content="Principal Software Engineer specializing in enterprise frontend, UI systems, and automation" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  )
}
