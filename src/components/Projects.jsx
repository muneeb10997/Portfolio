import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Edoc21",
      description: "Full-stack accounting application with bank API integration, WhatsApp chatbot for document collection, and Xero integration",
      tech: ["React", "Django REST Framework", "PostgreSQL", "Docker", "GitHub Actions", "Xero API", "Meta WhatsApp API"],
      github: null
    },
    {
      title: "Aimnexus",
      description: "AI-driven talent assessment platform with quizzes, CV analysis, AI video interviews, and automated scoring",
      tech: ["Flask", "PostgreSQL", "MongoDB", "Google Gemini AI", "Next.js", "GCP"],
      github: null
    },
    {
      title: "Document Intelligence System",
      description: "Multi-agent document processing system with RAG architecture, OCR text extraction, and AI-powered Q&A with source citations",
      tech: ["Flask", "PostgreSQL", "FAISS", "Google Gemini AI", "RAG"],
      github: null
    },
    {
      title: "AWS Infrastructure Projects",
      description: "Three-tier containerized applications, serverless REST APIs, and Terraform-provisioned infrastructure on AWS",
      tech: ["AWS ECS", "Lambda", "Terraform", "Docker", "GitHub Actions"],
      github: null
    },
    {
      title: "ShareWay - Ride-Sharing App",
      description: "Android ride-sharing application with real-time GPS navigation, driver/passenger modes, and fare calculation",
      tech: ["Java", "Firebase", "Mapbox", "Android SDK"],
      github: null
    }
  ]

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
