import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Publications() {
  const articles = [
    {
      title: "Enterprise Cloud Migration and Modernization Project",
      date: "Oct 16, 2024",
      readTime: "5 min read",
      description: "Led a large-scale enterprise cloud migration project as AWS Solutions Architect, transitioning legacy infrastructure to cloud-native architecture on AWS. Covered migration strategies including lift-and-shift, refactoring, and replatforming while implementing microservices, serverless solutions, and multi-region high-availability architecture.",
      url: "https://medium.com/@kirankittu83/enterprise-cloud-migration-and-modernization-project-2878d1f1780f",
      tags: ["AWS", "Cloud Migration", "Microservices", "DevOps"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
      title: "Cloud Migration of Legacy Applications to AWS",
      date: "Oct 12, 2024",
      readTime: "6 min read",
      description: "Comprehensive guide on migrating legacy on-premises applications to AWS. Detailed implementation of EC2, RDS, Elastic Beanstalk, and S3 with step-by-step AWS DMS database migration. Achieved over 25% cost reduction and improved scalability through automated infrastructure.",
      url: "https://medium.com/@kirankittu83/cloud-migration-of-legacy-applications-to-aws-b2e1e67b6862",
      tags: ["AWS", "Database Migration", "EC2", "RDS"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
    },
    {
      title: "AWS Infrastructure Automation and Migration Project",
      date: "Oct 12, 2024",
      readTime: "3 min read",
      description: "Project CloudShift - Automated infrastructure deployment using Terraform and Jenkins, orchestrated containers with Kubernetes on AWS EKS, and established comprehensive CI/CD pipelines. Implemented Infrastructure-as-Code for consistent environments across regions with Ansible configuration management.",
      url: "https://medium.com/@kirankittu83/aws-infrastructure-automation-and-migration-project-a7f14785a20a",
      tags: ["Terraform", "Kubernetes", "Jenkins", "Automation"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80"
    }
  ];

  return (
    <div className="page">
      <Header />
      <main className="main-content">
        <div className="container">
          <div className="publications-header">
            <h1>Technical Publications</h1>
            <p className="publications-subtitle">
              Sharing insights and experiences from real-world cloud migration and infrastructure projects
            </p>
          </div>

          <div className="publications-grid">
            {articles.map((article, index) => (
              <div key={index} className="publication-card-container">
                <div className="publication-card">
                  {/* Front of card */}
                  <div className="card-front">
                    <div className="card-image">
                      <img src={article.image} alt={article.title} />
                      <div className="image-overlay">
                        {/* Medium logo watermark */}
                        <svg className="medium-logo" width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="publication-meta">
                        <span className="publication-date">{article.date}</span>
                        <span className="publication-divider">•</span>
                        <span className="publication-read-time">{article.readTime}</span>
                      </div>
                      <h2 className="publication-title">{article.title}</h2>
                      <div className="publication-tags">
                        {article.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="publication-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="card-back">
                    <div className="card-back-content">
                      <p className="publication-description">{article.description}</p>
                      <a 
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="publication-cta-button"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                        </svg>
                        Read on Medium
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
