import React from 'react'
import { Link } from 'gatsby'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function DeveloperPage() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="hero">
          <div className="cert-detail-page">
            <Link to="/" className="back-link">← Back to Home</Link>
            
            <div className="cert-detail-header">
              <img
                src="https://images.credly.com/size/220x220/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png"
                alt="AWS Developer Associate"
                className="cert-detail-image"
              />
              <div className="cert-detail-title">
                <h1>AWS Certified Developer – Associate</h1>
                <div className="cert-detail-meta">
                  <span className="cert-date">📅 Issued: June 16, 2024</span>
                  <span className="cert-date">⏰ Expires: June 16, 2027</span>
                  <a 
                    href="https://www.credly.com/badges/769882de-595e-4a68-b921-3ec322814c20/linked_in_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-verify-btn"
                  >
                    Verify on Credly →
                  </a>
                </div>
              </div>
            </div>

            <div className="cert-detail-content">
              <section className="cert-section">
                <h2>📖 About This Certification</h2>
                <p>
                  The AWS Certified Developer – Associate certification validates my proficiency in developing, 
                  deploying, and debugging cloud-based applications using AWS services. It demonstrates hands-on 
                  experience with core AWS services, SDKs, and development best practices.
                </p>
                <p>
                  This certification focuses on the developer's perspective of AWS—writing code that interacts with 
                  AWS services, implementing CI/CD pipelines, monitoring and troubleshooting applications, and 
                  understanding security practices from a development standpoint.
                </p>
              </section>

              <section className="cert-section">
                <h2>🎯 Skills Validated</h2>
                <ul className="cert-skills-list">
                  <li><strong>AWS SDK & APIs:</strong> Proficiency in using AWS SDKs to interact with services programmatically</li>
                  <li><strong>Serverless Development:</strong> Building applications with Lambda, API Gateway, and DynamoDB</li>
                  <li><strong>CI/CD Implementation:</strong> Setting up automated deployment pipelines with CodePipeline, CodeBuild, and CodeDeploy</li>
                  <li><strong>Application Security:</strong> Implementing IAM roles, encryption, and secure coding practices</li>
                  <li><strong>Monitoring & Debugging:</strong> Using CloudWatch, X-Ray, and other tools to troubleshoot applications</li>
                  <li><strong>Container Services:</strong> Working with ECS, ECR, and containerized applications</li>
                </ul>
              </section>

              <section className="cert-section">
                <h2>💼 Impact on My Career</h2>
                <p>
                  This certification complemented my Solutions Architect certification and significantly enhanced 
                  my development capabilities:
                </p>
                <ul className="cert-impact-list">
                  <li>
                    <strong>Accelerated Development:</strong> Built serverless applications using Lambda and API Gateway 
                    that reduced deployment time from days to hours and infrastructure management overhead by 80%.
                  </li>
                  <li>
                    <strong>Implemented Modern CI/CD:</strong> Designed and implemented fully automated CI/CD pipelines 
                    using AWS CodePipeline that deploy to production multiple times per day with zero-downtime deployments.
                  </li>
                  <li>
                    <strong>Enhanced Application Observability:</strong> Integrated CloudWatch and X-Ray into applications, 
                    reducing mean-time-to-resolution for production issues by 60% through better tracing and logging.
                  </li>
                  <li>
                    <strong>Infrastructure as Code:</strong> Leveraged CloudFormation and CDK to define infrastructure 
                    alongside application code, enabling version-controlled, reproducible deployments.
                  </li>
                  <li>
                    <strong>Cost-Effective Development:</strong> Utilized serverless architectures and pay-per-use 
                    services that reduced idle resource costs and scaled automatically with demand.
                  </li>
                </ul>
              </section>

              <section className="cert-section">
                <h2>📚 How I Earned This Certification</h2>
                <div className="cert-journey">
                  <div className="journey-step">
                    <h3>1. Practical Foundation (1 month)</h3>
                    <p>
                      Already had strong development experience from enterprise frontend work. Started exploring 
                      AWS SDKs and building small serverless applications to understand the developer workflow on AWS.
                    </p>
                  </div>
                  <div className="journey-step">
                    <h3>2. Deep Dive into AWS Services (5 weeks)</h3>
                    <p>
                      Focused on developer-centric services: Lambda functions, API Gateway, DynamoDB, S3 event 
                      notifications, SQS/SNS messaging. Built several proof-of-concept applications to understand 
                      integration patterns and best practices.
                    </p>
                  </div>
                  <div className="journey-step">
                    <h3>3. CI/CD & DevOps Practices (3 weeks)</h3>
                    <p>
                      Implemented complete CI/CD pipelines using CodePipeline, CodeBuild, and CodeDeploy. Learned 
                      CloudFormation for infrastructure as code. Explored blue/green deployments and canary releases.
                    </p>
                  </div>
                  <div className="journey-step">
                    <h3>4. Security & Monitoring (2 weeks)</h3>
                    <p>
                      Studied IAM best practices, KMS encryption, Secrets Manager, and security scanning in CI/CD. 
                      Implemented comprehensive logging and monitoring with CloudWatch Logs, Metrics, and X-Ray tracing.
                    </p>
                  </div>
                  <div className="journey-step">
                    <h3>5. Exam Preparation (2 weeks)</h3>
                    <p>
                      Took practice exams focusing on code-level scenarios. Reviewed AWS service limits, SDK error 
                      handling, and troubleshooting techniques. Strengthened understanding of deployment strategies 
                      and rollback procedures.
                    </p>
                  </div>
                  <div className="journey-step">
                    <h3>6. Certification Exam</h3>
                    <p>
                      Passed the exam on June 16, 2024. The exam tested practical knowledge through scenario-based 
                      questions about writing code, debugging issues, and choosing the right AWS service for specific 
                      development requirements.
                    </p>
                  </div>
                </div>
              </section>

              <section className="cert-section">
                <h2>🚀 Key Takeaways</h2>
                <div className="cert-takeaways">
                  <p>
                    This certification shifted my perspective from traditional application development to cloud-native 
                    thinking. I learned to leverage managed services instead of building everything from scratch, which 
                    dramatically reduces complexity and maintenance burden.
                  </p>
                  <p>
                    The serverless paradigm taught me to think in terms of events and functions rather than long-running 
                    servers. This mindset has influenced how I design systems—focusing on scalability, fault tolerance, 
                    and cost efficiency from the start.
                  </p>
                  <p>
                    Most importantly, I gained a deep appreciation for the developer experience on AWS. Good architecture 
                    isn't just about the infrastructure—it's about empowering developers with the right tools, automation, 
                    and observability to ship features confidently and quickly.
                  </p>
                </div>
              </section>
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
      <title>AWS Developer Certification - Kiran Revally</title>
      <meta name="description" content="AWS Certified Developer – Associate certification journey and career impact" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  )
}
