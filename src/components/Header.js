import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            Kiran Revally
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <a 
                href="/Kiran_Revally_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                RESUME
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/revally-kiran/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/kiran-revally-unh" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
