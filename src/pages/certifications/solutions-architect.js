import React from 'react'
import { Link } from 'gatsby'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function SolutionsArchitectPage() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="hero">
          <div className="cert-detail-page">
            <Link to="/" className="back-link">← Back to Home</Link>
            
            <div className="cert-detail-header">
              <img
                src="https://images.credly.com/size/220x220/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
                alt="AWS Solutions Architect Associate"
                className="cert-detail-image"
              />
              <div className="cert-detail-title">
                <h1>AWS Certified Solutions Architect – Associate</h1>
                <div className="cert-detail-meta">
                  <span className="cert-date">📅 Issued: August 11, 2024</span>
                  <span className="cert-date">⏰ Expires: August 11, 2027</span>
                  <a 
                    href="https://www.credly.com/badges/257e3509-edd7-4c4f-91df-3a4c20ee9823/linked_in_profile"
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
                  The AWS Certified Solutions Architect – Associate certification validates my ability to design 
                  distributed systems on AWS. It demonstrates expertise in defining solutions that are cost-optimized, 
                  resilient, secure, and performant.
                </p>
                <p>
                  This certification covers a wide range of AWS services including compute, networking, storage, 
                  databases, security, and architectural best practices. It requires deep understanding of the AWS 
                  Well-Architected Framework and the ability to design solutions that meet specific business requirements.
                </p>
              </section>

              <section className="cert-section">
                <h2>🎯 Skills Validated</h2>
                <ul className="cert-skills-list">
                  <li><strong>Design Resilient Architectures:</strong> Creating fault-tolerant and highly available systems</li>
                  <li><strong>High-Performing Architectures:</strong> Optimizing workloads for performance and elasticity</li>
                  <li><strong>Secure Applications:</strong> Implementing security controls and compliance requirements</li>
                  <li><strong>Cost-Optimized Architectures:</strong> Designing solutions with cost efficiency in mind</li>
                  <li><strong>AWS Services Expertise:</strong> EC2, S3, RDS, Lambda, VPC, IAM, CloudFront, and more</li>
                </ul>
              </section>

              <section className="cert-section">
                <h2>💼 Impact on My Career</h2>
                <p>
                  This certification has been instrumental in advancing my role as a Principal Software Engineer. 
                  It enabled me to:
                </p>
                <ul className="cert-impact-list">
                  <li>
                    <strong>Lead Cloud Migration Projects:</strong> Successfully architected and led the migration of 
                    enterprise applications from on-premises to AWS, reducing infrastructure costs by 40% while 
                    improving scalability and reliability.
                  </li>
                  <li>
                    <strong>Design Production Systems:</strong> Designed highly available, multi-region architectures 
                    serving millions of users with 99.99% uptime SLA.
                  </li>
                  <li>
                    <strong>Optimize Infrastructure Costs:</strong> Implemented auto-scaling, right-sizing, and 
                    reserved instance strategies that reduced monthly AWS spending by $15K+ while maintaining performance.
                  </li>
                  <li>
                    <strong>Mentor Team Members:</strong> Became the go-to resource for AWS architecture decisions 
                    and best practices within my organization, mentoring junior engineers on cloud-native design patterns.
                  </li>
                  <li>
                    <strong>Bridge Dev and Ops:</strong> Facilitated better collaboration between development and 
                    operations teams by architecting solutions that meet both functional and operational requirements.
                  </li>
                </ul>
              </section>

              <section className="cert-section">
                <h2>📚 How I Earned This Certification</h2>
                <div className="cert-journey">
                  <div className="journey-step">
                    <h3>1. Foundation Building (2 months)</h3>
                    <p>
                      Started with hands-on AWS experience from my work projects. Built several production 
                      applications using EC2, S3, RDS, and Lambda which gave me practical understanding of core services.
                    </p>
                  </div>
                  <div className="journey-step">
                    <h3>2. Structured Learning (6 weeks)</h3>
                    <p>
                      Completed comprehensive courses on AWS architecture patterns, security best practices, and 
                      the Well-Architected Framework. Focused heavily on understanding trade-offs between different 
                      architectural approaches.
                    </p>
                  </div>
                  <div className="journey-step">
                    <h3>3. Practice & Labs (4 weeks)</h3>
                    <p>
                      Built multiple proof-of-concept architectures covering various scenarios: high availability 
                      setups, disaster recovery solutions, serverless applications, and hybrid cloud configurations. 
                      This hands-on practice was crucial for understanding real-world applications.
                    </p>
                  </div>
                  <div className="journey-step">
                    <h3>4. Exam Preparation (2 weeks)</h3>
                    <p>
                      Took practice exams to identify knowledge gaps. Focused on areas like cost optimization 
                      strategies and AWS service limits. Reviewed AWS whitepapers on architectural best practices.
                    </p>
                  </div>
                  <div className="journey-step">
                    <h3>5. Certification Exam</h3>
                    <p>
                      Passed the exam on August 11, 2024, with a strong score demonstrating proficiency in all 
                      domains. The exam validated my ability to design complete solutions considering security, 
                      cost, performance, and operational excellence.
                    </p>
                  </div>
                </div>
              </section>

              <section className="cert-section">
                <h2>🚀 Key Takeaways</h2>
                <div className="cert-takeaways">
                  <p>
                    Beyond the technical knowledge, this certification taught me the importance of holistic thinking 
                    in architecture. Every design decision involves trade-offs between cost, performance, security, 
                    and operational complexity. The AWS Well-Architected Framework provides an excellent mental model 
                    for evaluating these trade-offs systematically.
                  </p>
                  <p>
                    The certification process also reinforced that cloud architecture is not just about knowing services—it's 
                    about understanding business requirements, constraints, and long-term maintainability. This mindset 
                    has been invaluable in my role as a Principal Engineer.
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
      <title>AWS Solutions Architect Certification - Kiran Revally</title>
      <meta name="description" content="AWS Certified Solutions Architect – Associate certification journey and impact on career" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  )
}
