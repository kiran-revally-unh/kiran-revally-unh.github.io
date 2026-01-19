import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const projects = [
  {
    id: 1,
    title: 'DutySpin',
    date: 'Nov 2025',
    description: 'DutySpin is a minimal, turn-based chore management app designed to bring fairness and clarity to shared living. It rotates responsibility automatically, showing each user only what they\'re responsible for—without reminders, gamification, or noise. Built with a calm UX philosophy and focused on simplicity over productivity pressure.',
    tags: ['Dart', 'Flutter', 'Mobile', 'Utility'],
    icon: '🏠',
    github: 'https://github.com/kiran-revally-unh/DutySpin',
    live: 'https://dutyspin.web.app/',
    stars: 1,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    screenshots: [
      'https://github.com/user-attachments/assets/dd16144a-9bc4-443a-bbce-e72446e51134',
      'https://github.com/user-attachments/assets/bea67d0d-8fce-4523-85f1-eceeb4394292',
      'https://github.com/user-attachments/assets/ec911ae8-e9d7-4e4f-ab6f-20edaf81a90e',
      'https://github.com/user-attachments/assets/7d3e5b04-1c6e-4917-8ea9-7b977bda8f2b',
      'https://github.com/user-attachments/assets/9d5fb3a2-76c9-4a43-8d0f-26670d54181a',
      'https://github.com/user-attachments/assets/6521fafd-4dd2-4e5d-a4a1-faaef8f30aef'
    ]
  },
  {
    id: 2,
    title: 'Coco (Contract Companion)',
    date: 'Aug 2024',
    description: 'Coco is an AI-powered contract risk analysis tool that uses a large language model (GPT-4o) to transform unstructured contract text into structured, explainable risk insights. It identifies risky clauses, explains them in plain English, applies confidence scoring and schema validation, and exposes observability metrics like tokens, latency, and cost—demonstrating production-grade LLM integration.',
    tags: ['TypeScript', 'AI', 'LLM', 'GPT-4o'],
    icon: '🤖',
    github: 'https://github.com/kiran-revally-unh/AI-chatbot-LLM',
    live: 'https://main.d2f04gah5juytg.amplifyapp.com',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    screenshots: [
      '/showcase1.png',
      '/showcase2.png',
      '/showcase3.png'
    ]
  },
  {
    id: 3,
    title: 'Enterprise Angular UI System',
    date: '2020 - Present',
    description: 'Large-scale Angular application architecture for enterprise finance platforms. Includes design system, reusable components, state management with NgRx, and comprehensive test coverage.',
    tags: ['Angular', 'TypeScript', 'NgRx', 'Enterprise'],
    icon: '🏢',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    id: 4,
    title: 'Test Automation Framework',
    date: '2021 - Present',
    description: 'Comprehensive end-to-end testing framework using Playwright and Cypress. Automated regression suites for production applications with CI/CD integration.',
    tags: ['Playwright', 'Cypress', 'Testing', 'Automation'],
    icon: '🧪',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
  }
]

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="hero">
          <div className="hero-content">
            <h1 className="section-title">
              PROJECTS
              <span className="section-count">{projects.length}</span>
            </h1>
            <p className="section-subtitle">
              Check out some of my featured work below
            </p>

            <div className="projects-grid">
              {projects.map((project) => (
                <article 
                  key={project.id} 
                  className="project-card"
                  onClick={() => project.live && window.open(project.live, '_blank')}
                  style={{ cursor: project.live ? 'pointer' : 'default' }}
                >
                  {project.screenshots ? (
                    <div className="project-screenshots">
                      {project.screenshots.slice(0, 3).map((screenshot, index) => (
                        <img
                          key={index}
                          src={screenshot}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="project-screenshot"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  ) : (
                    <div 
                      className="project-image" 
                      style={{ background: project.gradient }}
                    >
                      <span style={{ fontSize: '64px' }}>{project.icon}</span>
                    </div>
                  )}
                  <div className="project-content">
                    <div className="project-header">
                      <div className="project-title-wrapper">
                        <h3>{project.title}</h3>
                        <p className="project-meta">
                          📅 {project.date}
                          {project.stars && ` • ⭐ ${project.stars}`}
                        </p>
                      </div>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
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
      <title>Projects - Kiran Revally</title>
      <meta name="description" content="Featured projects and work by Kiran Revally" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  )
}
